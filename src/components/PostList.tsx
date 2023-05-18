import React from "react";
import { useQuery } from "@apollo/client";
import PostItem from "./PostItem";
import { IPost } from "@/models/IPost";
import { Col, Divider, Row, FloatButton, Button, Space } from "antd";
import SpinnerPostList from "./SpinnerPostList";
import CreatePostItem from "./modals/CreatePostItem";
import { FileAddOutlined } from "@ant-design/icons";
import { ALL_POST } from "@/apollo/posts";

interface Response {
  posts: IPost[];
}

interface PostsVars {
  page: number;
  perPage: number;
}

const POSTS_PER_PAGE = 9;

const PostList = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { loading, error, data } = useQuery<Response, PostsVars>(ALL_POST, {
    variables: {
      page: currentPage,
      perPage: POSTS_PER_PAGE,
    },
  });

  const [isOpenCreateModal, setIsOpenCreateModal] =
    React.useState<boolean>(false);

  const handleOpenCreateModal = () => {
    setIsOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setIsOpenCreateModal(false);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const isPrevButtonDisabled = currentPage === 1;

  return (
    <>
      <FloatButton
        tooltip={<div>Add new post</div>}
        onClick={handleOpenCreateModal}
        type="primary"
        icon={<FileAddOutlined />}
      />
      <CreatePostItem
        onOk={handleCloseCreateModal}
        open={isOpenCreateModal}
        onCancel={handleCloseCreateModal}
      />
      <Divider orientation="center">Articles</Divider>
      {loading && <SpinnerPostList />}
      {error && <h1>Something wrong...</h1>}
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {data?.posts.map((post) => (
          <Col className="gutter-row" span={8} key={post.id}>
            <PostItem post={post} />
          </Col>
        ))}
      </Row>
      <Divider />
      <Space wrap>
        <Button onClick={handleNextPage} disabled={isPrevButtonDisabled}>
          Prev Page
        </Button>
        <Button onClick={handlePrevPage}>Next Page</Button>
      </Space>
    </>
  );
};

export default PostList;
