import React, { useState } from "react";
import { Menu, Card } from "antd";
import {
  CalendarOutlined,
  UsergroupAddOutlined,
  CheckSquareOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const SideMenu = () => {
  const [openKeys, setOpenKeys] = useState(['analytics']);

  

  const rootSubmenuKeys = ['analytics','admin', 'knowledge', 'train', 'agent', ];

  const handleClick = e => {
    setCurrent({ current: e.key });
  };

  return (
    <>
      <Card title="Metacare">
        <h4>adeyinka@metacare.app</h4>
      </Card>

      <Menu
        mode="inline"
        defaultSelectedKeys={['13']}
        defaultOpenKeys={['analytics']}
        className="sidebar-menu"
      >
        <SubMenu title="Admin" key="admin" icon={<UsergroupAddOutlined />}>
          <Menu.Item key="1">Admin Nav 1</Menu.Item>
          <Menu.Item key="2">Admin Nav 2</Menu.Item>
          <Menu.Item key="3">Admin Nav 3</Menu.Item>
        </SubMenu>
        <SubMenu
          title="Knowledge Base"
          key="knowledge"
          icon={<CheckSquareOutlined />}
        >
          <Menu.Item key="4">Knowledge Nav 1</Menu.Item>
          <Menu.Item key="5">Knowledge Nav 2</Menu.Item>
          <Menu.Item key="6">Knowledge Nav 3</Menu.Item>
        </SubMenu>
        <SubMenu key="train" title="Train SAM" icon={<CheckSquareOutlined />}>
          <Menu.Item key="7">Train Sam 1</Menu.Item>
          <Menu.Item key="8">Train Sam 2</Menu.Item>
          <Menu.Item key="9">Train Sam 3</Menu.Item>
        </SubMenu>
        <SubMenu key="agent" title="Agent Inbox" icon={<CalendarOutlined />}>
          <Menu.Item key="10">Agent Nav 1</Menu.Item>
          <Menu.Item key="11">Agent Nav 2</Menu.Item>
          <Menu.Item key="12">Agent Nav 3</Menu.Item>
        </SubMenu>
        <SubMenu key="analytics" title="Analytics" icon={<MessageOutlined />}>
          <Menu.Item key="13">Teams</Menu.Item>
          <Menu.Item key="14">Knowledge Base</Menu.Item>
          <Menu.Item key="15">Training SAM</Menu.Item>
          <Menu.Item key="16">Help Center</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default SideMenu;
