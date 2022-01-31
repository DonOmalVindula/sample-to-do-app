import React, { useState } from "react";
import { Menu } from 'antd';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Outlet, Link } from "react-router-dom";

export function HomePage() {
    const [current, setCurrent] = useState("home");

    const handleClick = (e) => {
        setCurrent(e.key);
    };
    
    return(
        <>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    <Link to="/home/todo">Home</Link>
                </Menu.Item>
                <Menu.Item key="setting" icon={<SettingOutlined />} disabled>
                    <Link to="/home/settings">Settings</Link>
                </Menu.Item>
            </Menu>
            <Outlet/>
        </>
    )
}