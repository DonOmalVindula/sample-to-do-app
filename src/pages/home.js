import React, { useState } from "react";
import { Button, Menu } from 'antd';
import { HomeOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { Outlet, Link } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";

export function HomePage() {
    const [current, setCurrent] = useState("home");
    const { signOut } = useAuthContext();

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
            <Button icon={<LogoutOutlined />} danger className="sign-out-btn" onClick={() => signOut()}>
                Log Out
            </Button>
            <Outlet/>
        </>
    )
}