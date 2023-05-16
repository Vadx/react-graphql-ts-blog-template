import React from "react";
import { Card, Divider, Typography } from "antd";
import Seo from "../../components/SEO";
const { Title } = Typography;

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
  fontWeight: "bold",
  color: "#333",
};

const HomePage: React.FC = () => {
  return (
    <>
      <Seo
        title="Home"
        metaDescription="Home page"
        metaKeywords="Home page Keywords"
      />
      <div className="alignCenter pt50">
        <Title>React Template using:</Title>
        <Title level={2} type="secondary">
          TypeScript, Ant Design, React Toolkit, RTK Query
        </Title>
      </div>
      <Divider />
      <Card title="🎬 Feachures" style={{ width: "100%", marginBottom: 30 }}>
        <Card.Grid style={gridStyle}>React V18.2</Card.Grid>
        <Card.Grid style={gridStyle}>TypeScript</Card.Grid>
        <Card.Grid style={gridStyle}>Ant Design</Card.Grid>
        <Card.Grid style={gridStyle}>Apollo</Card.Grid>
        <Card.Grid style={gridStyle}>ReactRouterDom V6.4</Card.Grid>
        <Card.Grid style={gridStyle}>SEO support</Card.Grid>
        <Card.Grid style={gridStyle}>Animation</Card.Grid>
        <Card.Grid style={gridStyle}>GraphQL</Card.Grid>
      </Card>

      <Card
        title="🥎  Packages"
        bordered={false}
        style={{ width: "100%", marginBottom: 30 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>

      <Card
        title="⛳ Pages"
        bordered={false}
        style={{ width: "100%", marginBottom: 30 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  );
};

export default HomePage;
