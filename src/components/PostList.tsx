import React from "react";
import { useQuery } from "@apollo/client";
import PostItem from "./PostItem";
import { IPost } from "@/models/IPost";
import { Col, Divider, Row, Pagination, FloatButton } from "antd";
// import type { PaginationProps } from 'antd';
import SpinnerPostList from "./SpinnerPostList";
// import CreatePostItem from "./modals/CreatePostItem";
import { FileAddOutlined } from "@ant-design/icons";
import { ALL_POST } from "@/apollo/posts";

interface Response {
  posts: IPost[];
}

const PostList = () => {
  // const [limit, setLimit] = React.useState<number>(9);
  // const [page, setPage] = React.useState<number>(1)
  // const {
  //   data: posts,
  //   error,
  //   isLoading,
  // } = postAPI.useFetchAllPostsQuery(limit);
  // const [deletePost, {}] = postAPI.useDeletePostMutation();

  const { loading, error, data } = useQuery<Response>(ALL_POST);

  // const [isOpenCreateModal, setIsOpenCreateModal] =
  //   React.useState<boolean>(false);

  const handleOpenCreateModal = () => {
    // setIsOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    // setIsOpenCreateModal(false);
  };

  const handleRemove = (post: IPost) => {
    // deletePost(post);
  };

  // console.log('All pages:', page)

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
      {/* <div>{`${posts?.total || 'NA'}`}</div> */}
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
