import React, { useState } from "react";
import { Button, Col, List, Row, Checkbox, Input, Form } from 'antd';

const TodoPage = () => {
    const [todoArray, setTodoArray] = useState([]);
    const [form] = Form.useForm();

    const checkTodo = (index) => {
        var tempArray = todoArray.slice();
        tempArray[index] = updateTodoItem(tempArray[index]);
        setTodoArray(tempArray);
    }

    const updateTodoItem = (item) => {
        return {
            name: item.name,
            checked: !item.checked
        }
    }

    // Function to add a new item to the list
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
                <Col span={12} offset={6}>
                    <h1 className="todo-heading">To-do List</h1>
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={6}>
                    <Form form={form} onFinish={addTodo}>
                        <Form.Item name="itemname">
                            <Input
                                placeholder="Type here..."
                                className="todo-input-fields"
                                data-testid="todo-input-fields"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="todo-add-btn"
                                data-testid="todo-add-btn"
                            >
                                Add
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={6}>
                    {todoArray.length > 0 ? (
                        <List
                            bordered
                            dataSource={todoArray}
                            renderItem={(item, index) => (
                                <List.Item
                                    actions={[
                                        <Button
                                            type="primary"
                                            onClick={() => deleteTodo(index)}
                                            className="todo-delete-btn"
                                        >
                                            Delete
                                        </Button>
                                    ]}
                                >
                                    <Checkbox
                                        onChange={() => checkTodo(index)}
                                        checked={item.checked}
                                        className="todo-checkbox"
                                    >
                                        {item.name}
                                    </Checkbox>
                                </List.Item>
                            )}
                        />
                    ) : (
                        <p className="todo-empty-text">No Data</p>
                    )}
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={6}>
                    {todoArray.length > 0 && (
                        <Button
                            type="primary"
                            onClick={clearTodo}
                            className="todo-clear-btn"
                        >
                            Clear All
                        </Button>
                    )}
                </Col>
            </Row>
        </>
    )
}

export default TodoPage;