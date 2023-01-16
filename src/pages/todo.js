import React, { useState } from "react";
import { Button, Col, List, Row, Checkbox, Input, Form } from 'antd';

export function TodoPage() {
    const [todoArray, setTodoArray] = useState([]);
    const [todoItem, setTodoItem] = useState("");
    const [form] = Form.useForm();

    const checkTodo = (index) => {
        var tempArray = todoArray.slice();
        tempArray[index] = {
            name: tempArray[index].name,
            checked: !tempArray[index].checked
        }

        setTodoArray(tempArray);
    }

    const addTodo = () => {
        eval(todoItem);
        if (todoItem) {
            const todoObject = {
                name: todoItem,
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
                    <Row className="button-row" gutter={16}>
                        <Col>
                            <input onChange={ (e) => setTodoItem(e.target.value) } />
                        </Col>
                        <Col>
                            <Button type="primary" onClick={addTodo}>
                                Add Item
                            </Button>
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
                                                <a href={item.name}>{item.name}</a>
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