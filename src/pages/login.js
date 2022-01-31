import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Row, Col, Form, Button, Input, notification } from 'antd';


export function LoginPage() {
    const [form] = Form.useForm();
    let navigate = useNavigate();

    const onFinish = (values) => {
        const username = "omal";
        const password = "vindula";

        if (values?.username === username && values?.password === password) {
            showSuccessNotification();
            navigate(`/home`);
        } else {
            showFailedNotification();
        }
    }

    const showSuccessNotification = () => {
        notification["success"]({
            message: 'Login Successful! Welcome Back.',
          });
    }

    const showFailedNotification = () => {
        notification["error"]({
            message: 'Login Failed. Please try again.',
          });
    }

    return (
        <>
            <div className="login-card-container">
                <Row justify="center" align="top">
                    <Col span={12}>
                        <Card className="login-card" bordered={true} size="default">
                            <h2>Welcome to To-Do List</h2>
                            <Form
                                layout="vertical"
                                size="large"
                                form={form}
                                onFinish={onFinish}
                            >
                                <Form.Item 
                                    label="Username" 
                                    name="username"
                                    rules={[{required: true}, {type: "string"}]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item 
                                    label="Password" 
                                    name="password"
                                    rules={[{required: true}, {type: "string"}]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item>
                                    <Button className="login-btn" type="primary" htmlType="submit">
                                        Log In
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}