import { Button, Divider, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { GET_POST } from "@/apollo/posts";
import { useQuery } from "@apollo/client";

const SinglePostPage = () => {
  const goBack = () => navigate(-1);
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_POST);

  console.log("Sing post", data);
  return (
    <>
      <Button type="text" onClick={goBack} icon={<ArrowLeftOutlined />}>
        Go back
      </Button>
      <Divider />
      {loading && <>Loading...</>}
      {error && <>Something goes Wrong</>}
      {data && (
        <Card>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </Card>
      )}
    </>
  );
};

export default SinglePostPage;
