import { useMutation } from "@apollo/client";
import { ALL_POST, UPDATE_POST } from "@/apollo/posts";
import { Modal, Form, Input, message } from "antd";
import React from "react";
import { IPost } from "../../models/IPost";

interface UpdatePostItemProps {
  postItem: IPost;
  open: boolean;
  title: string;
  onCancel: () => void;
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const UpdatePostItem = ({
  open,
  title,
  onCancel,
  postItem,
}: UpdatePostItemProps) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [updatePost, { error }] = useMutation<IPost>(UPDATE_POST, {
    refetchQueries: [{ query: ALL_POST }],
  });

  const [postItemUpdate, setPostItemUpdate] = React.useState<IPost>({
    id: postItem.id,
    title: postItem.title,
    postImage: postItem.postImage,
    body: postItem.body,
  } as IPost);

  const onFinish = () => {
    updatePost({
      variables: {
        ...postItemUpdate,
        id: postItemUpdate.id,
        title: postItemUpdate.title,
        body: postItemUpdate.body,
        postImage: postItemUpdate.postImage,
      },
    }).then(() => {
      onCancel();
      messageApi.info({
        type: "success",
        content: "The article:" + `${postItemUpdate.title}` + " was updated",
      });
    });
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={open}
        title={title}
        onOk={onFinish}
        onCancel={onCancel}
        okText="Update"
      >
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          fields={[
            { name: ["title"], value: postItemUpdate.title },
            { name: ["postImage"], value: postItemUpdate.postImage },
            { name: ["body"], value: postItemUpdate.body },
          ]}
        >
          <Form.Item
            name="title"
            label="Post Title"
            rules={[{ required: true }]}
          >
            <Input
              onChange={(e) =>
                setPostItemUpdate({ ...postItemUpdate, title: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item
            name="postImage"
            label="Post Image"
            rules={[{ required: true }]}
          >
            <Input
              onChange={(e) =>
                setPostItemUpdate({
                  ...postItemUpdate,
                  postImage: e.target.value,
                })
              }
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
              onChange={(e) =>
                setPostItemUpdate({ ...postItemUpdate, body: e.target.value })
              }
            />
          </Form.Item>
          {error && <>Oppps! Try again!</>}
        </Form>
      </Modal>
    </>
  );
};

export default UpdatePostItem;
