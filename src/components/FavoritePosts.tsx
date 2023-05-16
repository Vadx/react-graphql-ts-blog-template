import { List } from "antd";
// import { useAppSelector } from "../hooks/redux";

const FavoritePosts = () => {
  // const { favorites } = useAppSelector((state) => state.favoritePosts);

  return (
    <List
      style={{ minWidth: 300 }}
      itemLayout="horizontal"
      // dataSource={favorites}
      // renderItem={(item) => (
      //   <List.Item>
      //     <List.Item.Meta title={<Typography>{item}</Typography>} />
      //   </List.Item>
      // )}
    />
  );
};

export default FavoritePosts;
