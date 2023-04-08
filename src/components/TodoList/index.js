import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { todoRemainingSelector } from "../../redux/selector";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import { addTodo } from "../../redux/action";
export default function TodoList({ completed, id }) {
  const dispatch = useDispatch();
  const todoList = useSelector(todoRemainingSelector);
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("Medium");
  function handleAddTodo() {
    dispatch(
      addTodo({
        name: input,
        prioriry: priority,
        id: uuidV4(),
        completed: false,
      })
    );
  }
  
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
            id={todo.id}
            key={todo.id}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={input}
            onChange={(e) => {
              console.log(e.target.value);
              setInput(e.target.value);
            }}
          />
          <Select
            defaultValue="Medium"
            onChange={(value) => {
              setPriority(value);
            }}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
