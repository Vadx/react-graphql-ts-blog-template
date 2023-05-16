import { Tabs } from "antd";
import FavoritePosts from "../../components/FavoritePosts";

const ProfilePage = () => {
  return (
    <>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Profile Info" key="1">
          Content of Tab Pane 1
        </Tabs.TabPane>
        <Tabs.TabPane tab="Favorite Posts" key="2">
          <FavoritePosts />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Logs" key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default ProfilePage;
