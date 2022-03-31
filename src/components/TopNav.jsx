import React, { useState } from "react";
import {
  Input,
  Space,
  Badge,
  Avatar,
  Row,
  Col,
  Divider,
  Menu,
  Typography,
  Select,
  Button,
} from "antd";
import { BellOutlined, DownOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Title } = Typography;

const TopNav = () => {
  const [currentKey, setCurrentKey] = useState("efficiency");

  const handleClick = (e) => {
    setCurrentKey({ currentKey: e.key });
  };

  const { Option } = Select;

  return (
    <>
      {/* First Row */}
      <Row>
        <Col className="gutter-row col-1" span={16}>
          <Space direction="horizontal">
            <Search
              placeholder="Ask any question"
              style={{ width: 441 }}
              className="search"
            />
          </Space>
        </Col>

        <Col className="gutter-row col-2" span={8}>
          <Space className="badge-avatar" direction="horizontal">
            <div>
              <Badge count={3} offset={[12, 8]}>
                <BellOutlined style={{ fontSize: 16 }} />
              </Badge>
            </div>
            <Divider type="vertical" />
            <div>
              <Avatar />
              <DownOutlined />
            </div>
          </Space>
        </Col>
      </Row>

      {/* Second Row */}
      <Row>
        <Col span={24}>
          <Menu
            onClick={handleClick}
            selectedKeys={[currentKey]}
            mode="horizontal"
          >
            <Menu.Item
              key="efficiency"
              style={{ borderBottom: "1px solid #ECEBF5" }}
            >
              Efficiency
            </Menu.Item>
            <Menu.Item key="volume">Volume</Menu.Item>
            <Menu.Item key="customer">Customer Satisfaction</Menu.Item>
            <Menu.Item key="backlog">Backlog</Menu.Item>
          </Menu>
        </Col>
      </Row>

      {/* Third Row */}
      <Row className="thirdRow">
        <Col span={12}>
          <Title level={3}>Efficiency Analytics</Title>
        </Col>
        <Col span={6} className="search-column">
          <Space direction="horizontal">
            <Search
              placeholder="Search"
              className="third-row-search"
            />
          </Space>
        </Col>
        <Col span={6} style={{ display: "flex" }}>
          <div>
            <Select defaultValue="filter">
              <Option value="filter">Filter Options</Option>
            </Select>
          </div>
          <Divider type="vertical" />
          <div className="export-btn">
            <Button>Export</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TopNav;
