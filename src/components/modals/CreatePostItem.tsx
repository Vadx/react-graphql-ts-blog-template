import { Modal, Form, Input } from "antd";
import React from "react";
import { IPost } from "../../models/IPost";
import { postAPI } from "../../store/api/postAPI";
import { ToastContainer, toast } from "react-toastify";

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

  const [createPost, {}] = postAPI.useCreatePostMutation();

  const [postItem, setPostItem] = React.useState({
    title: "",
    body: "",
    postImage: "",
  } as IPost);

  const onFinish = async (values: any) => {
    try {
      await createPost({
        title: postItem.title,
        body: postItem.body,
        postImage: postItem.postImage,
      } as IPost);
      form.resetFields();
      onCancel();
      toast("A new article was created");
    } catch (err) {
      console.error("Failed to save the post: ", err);
    }
  };

  return (
    <>
      <ToastContainer />
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
        </Form>
      </Modal>
    </>
  );
};

export default CreatePostItem;
