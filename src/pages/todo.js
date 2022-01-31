import React, { useState } from "react";
import { Button, Col, List, Row, Checkbox, Input, Form } from 'antd';

export function TodoPage() {
    const [todoArray, setTodoArray] = useState([]);
    const [form] = Form.useForm();

    const checkTodo = (index) => {
        var tempArray = todoArray.slice();
        tempArray[index] = {
            name: tempArray[index].name,
            checked: !tempArray[index].checked
        }

        setTodoArray(tempArray);
    }

    const addTodo = (e) => {
        if (e?.itemname) {
            const todoObject = {
                name: e.itemname,
                checked: false
            };
    
            setTodoArray([...todoArray, todoObject]);
        }
        form.resetFields();
    }

    const deleteTodo = (index) => {
        var tempArray = todoArray.slice();
        tempArray.splice(index, 1);

        setTodoArray(tempArray);
    }

    const clearTodo = () => {
        setTodoArray([]);
    }
    
    return(
        <>
            <Row>
                <Col className="todo-container" span={16} offset={4}>
                    <h1>To-do List</h1>
                    <Row className="button-row">
                        <Col>
                            <Form layout="inline" form={form} onFinish={addTodo}>
                                <Form.Item 
                                    label="Item Name" 
                                    name="itemname"
                                    rules={[{type: "string"}]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Add Item
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col>
                            <Button onClick={clearTodo} danger>
                                Clear All
                            </Button>
                        </Col>
                    </Row>
                    <Row className="list-container">
                        <List
                            className="list"
                            bordered
                            itemLayout="horizontal"
                            dataSource={todoArray}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <Row className="list-row">
                                        <Col span={20} className="list-itemname">
                                            <Checkbox onChange={() => checkTodo(index)} checked={item.checked} className={item.checked? "checked-item": ""}>
                                                {item.name}
                                            </Checkbox>
                                        </Col>
                                        <Col span={4}>
                                            <a className="delete-item" href onClick={() => deleteTodo(index)}>Delete</a>
                                        </Col>
                                    </Row>
                                </List.Item>
                            )}
                        />
                    </Row>
                </Col>
            </Row>
        </>
    )
}