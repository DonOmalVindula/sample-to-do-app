import React, { useEffect, useState } from "react";
import { Form, Col, Row, Input } from "antd";
import { useAuthContext } from "@asgardeo/auth-react";

export function SettingsPage() {
    const { getBasicUserInfo } = useAuthContext();
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = () => {
        getBasicUserInfo()
            .then((data) => {
                setUserInfo(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Row>
                <Col className="todo-container" span={16} offset={4}>
                    <h1>User Profile</h1>
                </Col>
            </Row>
            <Row>
                <Col span={8} offset={8}>
                    <Form
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 0 }}
                        layout="vertical"
                        onValuesChange={null}
                        disabled={false}
                    >
                        <Form.Item label="Username">
                            <Input value={userInfo?.username} readOnly />
                        </Form.Item>
                        <Form.Item label="Sub">
                            <Input value={userInfo?.sub} readOnly />
                        </Form.Item>
                        <Form.Item
                            label="First Name"
                            style={{
                                display: "inline-block",
                                width: "calc(50% - 8px)",
                            }}
                        >
                            <Input value={userInfo?.givenName} readOnly />
                        </Form.Item>
                        <Form.Item
                            label="Last Name"
                            style={{
                                display: "inline-block",
                                width: "50%",
                                margin: "0 0 0 8px",
                            }}
                        >
                            <Input value={userInfo?.familyName} readOnly />
                        </Form.Item>
                        <Form.Item label="Mobile">
                            <Input value={userInfo?.phoneNumber} readOnly />
                        </Form.Item>
                        <Form.Item label="Country">
                            <Input
                                value={userInfo?.address?.country}
                                readOnly
                            />
                        </Form.Item>
                        <Form.Item label="Date of Birth">
                            <Input value={userInfo?.birthdate} readOnly />
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
}
