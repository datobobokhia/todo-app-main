import UserInput from "./UserInput";
import TodoList from "./TodoList";
import { StyledMain } from "../../styles/Main.styled";
import { useState, useEffect } from "react";

export default function Main({ darkMode }) {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("All");
  const [todoListByStatus, setTodoListByStatus] = useState([]);
  const [leftItems, setLeftItems] = useState([]);

  const statusFilter = () => {
    if (status === "All") {
      setTodoListByStatus(todoList);
    } else if (status === "Active") {
      setTodoListByStatus(todoList.filter((elem) => elem.completed === false));
    } else if (status === "Completed") {
      setTodoListByStatus(todoList.filter((elem) => elem.completed === true));
    }
  };

  const leftTasks = () => {
    setLeftItems(todoList.filter((myElem) => myElem.completed === false));
  };

  useEffect(() => {
    statusFilter();
    leftTasks();
  }, [status, todoList]);

  return (
    <StyledMain>
      <UserInput
        setInput={setInput}
        setTodoList={setTodoList}
        todoList={todoList}
        input={input}
        darkMode={darkMode}
      />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        setStatus={setStatus}
        todoListByStatus={todoListByStatus}
        leftItems={leftItems}
        darkMode={darkMode}
      />
    </StyledMain>
  );
}
