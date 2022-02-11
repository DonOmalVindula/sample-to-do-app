import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Row, Col, Button } from 'antd';
import { useAuthContext } from "@asgardeo/auth-react";

export function LoginPage() {
    const { signIn, state } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!state?.isAuthenticated) {
            return;
        } else {
            navigate(`/home/todo`);
        }
    }, [ state?.isAuthenticated ]);

    return (
        <>
            <div className="login-card-container">
                <Row justify="center" align="top">
                    <Col span={12}>
                        <Card className="login-card" bordered={true} size="default">
                            <h2>Welcome to To-Do List</h2>
                            <br></br>
                            <Button type="primary" onClick={() => signIn()}>
                                Log In with Asgardeo
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}