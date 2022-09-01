import React, { useState } from "react";
import { Button, Menu } from 'antd';
import { HomeOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { Outlet, Link } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";

export function HomePage() {
    const [current, setCurrent] = useState("home");
    const { state, signOut } = useAuthContext();

    const handleClick = (e) => {
        setCurrent(e.key);
    };

    const resolveUserName = () => {
        if (state.isAuthenticated) {
            // A user is logged in.
            return "Welcome, " + state.username;
        } else {
            return "User Not Found";
        }
    };
    
    return(
        <>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="setting" icon={<SettingOutlined />}>
                    <Link to="/settings">Settings</Link>
                </Menu.Item>
            </Menu>
            <p className="username-text">{ resolveUserName() }</p>
            <Button icon={<LogoutOutlined />} danger className="sign-out-btn" onClick={() => signOut()}>
                Log Out
            </Button>
            <Outlet/>
        </>
    )
}