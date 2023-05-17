import { Modal, Form, Input, message } from "antd";
import React from "react";
import { IPost } from "../../models/IPost";
import { useMutation } from "@apollo/client";
import { ADD_POST, ALL_POST } from "@/apollo/posts";

interface CreatePostItemProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const CreatePostItem = ({ open, onCancel }: CreatePostItemProps) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const [createPost, { error }] = useMutation(ADD_POST, {
    refetchQueries: [{ query: ALL_POST }],
    // update(cache, { data: { addPost } }) {
    //   const { posts } = cache.readQuery({ query: ALL_POST });

    //   cache.writeQuery({
    //     query: ALL_POST,
    //     data: {
    //       posts: [addPost, ...posts],
    //     },
    //   });
    // },
  });

  const [postItem, setPostItem] = React.useState({
    title: "",
    body: "",
    postImage: "",
  } as IPost);

  const onFinish = async () => {
    try {
      await createPost({
        variables: {
          title: postItem.title,
          body: postItem.body,
          postImage: postItem.postImage,
        },
      });
      form.resetFields();
      onCancel();
      messageApi.info({
        type: "success",
        content: "A new article was created",
      });
    } catch (err) {
      console.error("Failed to save the post: ", err);
    }
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={open}
        title="Create New Post"
        okText="Create"
        onCancel={onCancel}
        onOk={onFinish}
      >
        <Form {...layout} form={form} name="control-hooks">
          <Form.Item
            name="title"
            label="Post Title"
            rules={[{ required: true }]}
          >
            <Input
              onChange={(e: { target: { value: string } }) =>
                setPostItem({ ...postItem, title: e.target.value })
              }
              value={postItem.title}
            />
          </Form.Item>

          <Form.Item
            name="postImage"
            label="Post Image"
            rules={[{ required: true }]}
          >
            <Input
              onChange={(e: { target: { value: string } }) =>
                setPostItem({ ...postItem, postImage: e.target.value })
              }
              value={postItem.postImage}
            />
          </Form.Item>

          <Form.Item
            name="body"
            label="Post Content"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              allowClear
              showCount
              onChange={(e: { target: { value: any } }) =>
                setPostItem({ ...postItem, body: e.target.value })
              }
              value={postItem.body}
            />
          </Form.Item>
          {error && <h4>Something wrong...</h4>}
        </Form>
      </Modal>
    </>
  );
};

export default CreatePostItem;
