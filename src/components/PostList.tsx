import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import PostItem from "./PostItem";
import { IPost } from "@/models/IPost";
import { Col, Divider, Row, Pagination, FloatButton } from "antd";
// import type { PaginationProps } from 'antd';
import SpinnerPostList from "./SpinnerPostList";
// import CreatePostItem from "./modals/CreatePostItem";
import { FileAddOutlined } from "@ant-design/icons";
import { ALL_POST, DELETE_POST } from "@/apollo/posts";

interface Response {
  posts: IPost[];
}

const PostList = () => {
  // const [limit, setLimit] = React.useState<number>(9);
  // const [page, setPage] = React.useState<number>(1)

  const [removePost] = useMutation(DELETE_POST, {
    refetchQueries: [{ query: ALL_POST }],
  });

  const { loading, error, data } = useQuery<Response>(ALL_POST);

  // const [isOpenCreateModal, setIsOpenCreateModal] =
  //   React.useState<boolean>(false);

  const handleOpenCreateModal = () => {
    // setIsOpenCreateModal(true);
  };

  // const handleCloseCreateModal = () => {
  //   // setIsOpenCreateModal(false);
  // };

  const handleRemove = (postId: number) => {
    removePost({ variables: { id: postId } });
  };

  // const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
  //   console.log(current, pageSize);
  //   // setLimit(10)
  // };

  return (
    <>
      <FloatButton
        tooltip={<div>Add new post</div>}
        onClick={handleOpenCreateModal}
        type="primary"
        icon={<FileAddOutlined />}
      />
      {/* <CreatePostItem
        onOk={handleCloseCreateModal}
        open={isOpenCreateModal}
        onCancel={handleCloseCreateModal}
      /> */}
      <Divider orientation="center">Articles</Divider>
      {loading && <SpinnerPostList />}
      {error && <h1>Something wrong...</h1>}
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {data?.posts.map((post) => (
          <Col className="gutter-row" span={8} key={post.id}>
            <PostItem remove={handleRemove} post={post} />
          </Col>
        ))}
      </Row>
      <Divider />
      <Pagination
        // showSizeChanger
        // onShowSizeChange={onShowSizeChange}
        defaultCurrent={1}
        total={100}
      />
    </>
  );
};

export default PostList;
