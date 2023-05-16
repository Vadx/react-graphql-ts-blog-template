import { Modal, Form, Input } from "antd";
import React from "react";
import { IPost } from "../../models/IPost";
import { postAPI } from "../../store/api/postAPI";
import { ToastContainer, toast } from "react-toastify";

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
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [form] = Form.useForm();

  const [postItemUpdate, setPostItemUpdate] = React.useState<IPost>({
    id: postItem.id,
    title: postItem.title,
    postImage: postItem.postImage,
    body: postItem.body,
  } as IPost);

  const onFinish = () => {
    updatePost({
      ...postItemUpdate,
      id: postItemUpdate.id,
      title: postItemUpdate.title,
      body: postItemUpdate.body,
      postImage: postItemUpdate.postImage,
    });
    onCancel();
    toast.success(
      "The article: " + `${postItemUpdate.title}` + " was updated",
      {
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: false,
      }
    );
  };

  return (
    <>
      <ToastContainer />
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
              onChange={(e: any) =>
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
              onChange={(e: any) =>
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
              onChange={(e: any) =>
                setPostItemUpdate({ ...postItemUpdate, body: e.target.value })
              }
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UpdatePostItem;
