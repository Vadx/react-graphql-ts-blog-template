import { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { IPost } from "../models/IPost";
import { Link } from "react-router-dom";
// import UpdatePostItem from "./modals/UpdatePostItem";
import ConfirmRemovePostItem from "./modals/ConfirmRemovePostItem";
// import { StarFilled, StarOutlined } from "@ant-design/icons";

const { Meta } = Card;

export interface PostItemProps {
  post: IPost;
  remove: (post: number) => void;
}

const PostItem = ({ post, remove }: PostItemProps) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmRemoveOpen, setIsConfirmRemoveOpen] = useState(false);

  // const { addFavorite, removeFavorite } = useActions();
  // const { favorites } = useAppSelector((state) => state.favoritePosts);
  // const [isFav, setIsFav] = useState(favorites.includes(post.title));

  // const handleCancelUpdate = () => {
  //   setIsModalOpen(false);
  // };

  const handleOpenRemoveModal = () => {
    setIsConfirmRemoveOpen(true);
  };

  const handleCloseRemoveModal = () => {
    setIsConfirmRemoveOpen(false);
  };

  const handleRemove = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    remove(post.id);
  };

  // const handlePostUpdateOpen = () => {
  //   setIsModalOpen(true);
  // };

  // Favorites
  // const addToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   // addFavorite(post.title);
  //   // setIsFav(true);
  // };

  // const removeFromFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   // removeFavorite(post.title);
  //   // setIsFav(false);
  // };

  return (
    <>
      {/* <UpdatePostItem
        title={`Update Post: ${post.title}`}
        open={isModalOpen}
        onCancel={handleCancelUpdate}
        postItem={post}
      /> */}
      <ConfirmRemovePostItem
        onOk={handleRemove}
        open={isConfirmRemoveOpen}
        title="Please confirm Remove"
        onCancel={handleCloseRemoveModal}
        contentRemove={post.title}
      />
      <Card
        style={{ width: "100%", marginBottom: 20 }}
        cover={<img alt="example" src={post.postImage} />}
        actions={[
          // <EditOutlined key="edit" onClick={handlePostUpdateOpen} />,
          <DeleteOutlined key="delete" onClick={handleOpenRemoveModal} />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={post.title}
          description={post.body.substring(0, 100)}
        />
        <div className="readMoreWrap">
          <Link to={`/articles/${post.id}`}>Read more...</Link>
        </div>
        <div className="favoriteIconWrap">
          {/* {!isFav && (
            <Button
              type="text"
              shape="circle"
              icon={<StarOutlined />}
              onClick={addToFavorite}
            />
          )}
          {isFav && (
            <Button
              type="text"
              shape="circle"
              icon={<StarFilled style={{ color: "#ffe11b" }} />}
              onClick={removeFromFavorite}
            />
          )} */}
        </div>
      </Card>
    </>
  );
};

export default PostItem;
