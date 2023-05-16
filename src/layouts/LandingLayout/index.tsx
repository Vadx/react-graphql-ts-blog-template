import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import FooterSite from "@/components/UI/FooterSite";
import HeaderSite from "@/components/UI/HeaderSite";

const { Content } = Layout;

export default function LandingLayout() {
  return (
    <Layout className="site-layout">
      <HeaderSite />
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          margin: " 84px auto 0",
          width: "100%",
          maxWidth: 1200,
        }}
      >
        <Outlet />
      </Content>
      <FooterSite />
    </Layout>
  );
}
