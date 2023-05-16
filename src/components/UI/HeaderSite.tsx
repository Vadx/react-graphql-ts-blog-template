import React from "react";
import { Layout, Menu, Row, Col, Popover, Button, Space } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import type { MenuProps } from "antd";
import { ReadOutlined } from "@ant-design/icons";
import FavoritePosts from "../FavoritePosts";

const { Header } = Layout;

const items: MenuProps["items"] = [
  { label: <NavLink to="/">Home</NavLink>, key: "/" },
  { label: <NavLink to="/articles">Articles</NavLink>, key: "/articles" },
  { label: <NavLink to="/about">About Us</NavLink>, key: "/about" },
  { label: <NavLink to="/contact-us">Contact Us</NavLink>, key: "/contact-us" },
];

const HeaderSite: React.FC = () => {
  const location = useLocation();
  return (
    <Header
      data-theme="light"
      className="site-layout-background site-layout-header"
    >
      <Row>
        <Col span={8}>
          <Logo logoColor="#333" logoSize={20}>
            Logo
          </Logo>
        </Col>
        <Col span={8} offset={8}>
          <Space>
            <Menu
              style={{ border: 0, background: "transparent" }}
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["/"]}
              selectedKeys={[location.pathname]}
              items={items}
            />
            <Popover
              placement="bottomRight"
              title="Favorite posts"
              content={<FavoritePosts />}
              trigger="click"
            >
              <Button type="dashed" shape="circle" icon={<ReadOutlined />} />
            </Popover>
          </Space>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderSite;
