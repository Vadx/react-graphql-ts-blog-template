import { Button, Divider, Card, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { GET_POST } from "@/apollo/posts";
import { useQuery } from "@apollo/client";
const { Text } = Typography;

const SinglePostPage = () => {
  const { postId } = useParams();
  const goBack = () => navigate(-1);
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id: Number(postId) },
  });

  const post = data?.post;

  return (
    <>
      <Button type="text" onClick={goBack} icon={<ArrowLeftOutlined />}>
        Go back
      </Button>
      <Divider />
      {loading && <Text>Loading...</Text>}
      {error && <Text type="danger">Something goes Wrong</Text>}
      {post && (
        <Card>
          <img alt="example" src={post.postImage} />
          <h1>{post.title}</h1>
          <Text>{post.body}</Text>
        </Card>
      )}
    </>
  );
};

export default SinglePostPage;
