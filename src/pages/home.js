import React, { useState } from "react";
import { Menu, Button } from 'antd';
import { HomeOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { Outlet, Link, useNavigate } from "react-router-dom";

export function HomePage() {
    const [current, setCurrent] = useState("home");
    const Navigate = useNavigate();

    const handleClick = (e) => {
        setCurrent(e.key);
    };

    const signOut = () => {
        Navigate("/");
    }
    
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
            <Button icon={<LogoutOutlined />} danger className="sign-out-btn" onClick={() => signOut()}>
                Log Out
            </Button>
            <Outlet/>
        </>
    )
}