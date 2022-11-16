import Task from "./Task";
import { StyledTodoList } from "../../styles/TodoList.styled";
import Status from "./Status";

export default function TodoList({
  todoList,
  setTodoList,
  setStatus,
  todoListByStatus,
  leftItems,
  darkMode,
}) {
  const clearCompleted = () => {
    setTodoList(todoList.filter((element) => element.completed === false));
  };
  return (
    <StyledTodoList darkMode={darkMode}>
      <ul>
        {todoListByStatus.map((todo, index) => (
          <Task
            text={todo.text}
            completed={todo.completed}
            todoList={todoList}
            setTodoList={setTodoList}
            todo={todo}
            key={index}
            darkMode={darkMode}
          />
        ))}
      </ul>
      <div>
        <div
          style={{
            height: "60px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
            borderRadius: "5px",
          }}
        >
          <p
            style={{
              margin: "0",
              padding: "0",
              fontFamily: "Josefin Sans",
              fontSize: "14px",
              lineHeight: "14px",
              color: "#5B5E7E",
            }}
          >
            {leftItems.length} items left
          </p>
          <button onClick={clearCompleted}>Clear Completed</button>
        </div>
        <h1></h1>
        <Status setStatus={setStatus} darkMode={darkMode} />
      </div>
    </StyledTodoList>
  );
}
