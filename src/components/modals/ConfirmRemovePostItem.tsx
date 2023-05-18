import { Modal, Typography, message } from "antd";
import { DELETE_POST, ALL_POST } from "@/apollo/posts";
import { useMutation } from "@apollo/client";
import { IPost } from "@/models/IPost";

const { Title } = Typography;

interface ConfirmRemovePostItemProps {
  open: boolean;
  title: string;
  onCancel: () => void;
  contentRemove: string;
  idRemove: number;
}

const ConfirmRemovePostItem = ({
  open,
  title,
  onCancel,
  contentRemove,
  idRemove,
}: ConfirmRemovePostItemProps) => {
  const [messageApi, contextHolder] = message.useMessage();

  const [removePost, { error: removeError }] = useMutation<IPost>(DELETE_POST, {
    refetchQueries: [{ query: ALL_POST }],
    // update(cache, { data: { removePost } }) {
    //   cache.modify({
    //     fields: {
    //       allPost(currentPost = []) {
    //         return currentPost.filter(
    //           (post) => post.__ref !== `Post:${removePost.id}`
    //         );
    //       },
    //     },
    //   });
    // },
  });

  const handleRemove = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.stopPropagation();
      removePost({ variables: { id: idRemove } });
      console.log("ID remove", idRemove);
      onCancel();
    } catch {
      console.log("Remove Error:", removeError);
      messageApi.info({
        type: "error",
        content: "Some thing wrong :(" + `${removeError}`,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Modal open={open} title={title} onOk={handleRemove} onCancel={onCancel}>
        <Title level={4}>{contentRemove}</Title>
      </Modal>
    </>
  );
};

export default ConfirmRemovePostItem;
