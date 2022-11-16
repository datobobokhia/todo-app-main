import { StyledTask } from "../../styles/Task.styled";

export default function Task({
  text,
  completed,
  todoList,
  setTodoList,
  todo,
  darkMode,
}) {
  const handleListedCheckbox = () => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleDelete = () => {
    setTodoList(todoList.filter((task) => task.id !== todo.id));
  };
  return (
    <>
      <StyledTask darkMode={darkMode} completed={completed}>
        {completed ? (
          <input
            type={"checkbox"}
            checked={true}
            onClick={handleListedCheckbox}
            style={
              darkMode
                ? { backgroundColor: "#25273d" }
                : { backgroundColor: "white" }
            }
          />
        ) : (
          <input
            type={"checkbox"}
            onClick={handleListedCheckbox}
            checked={false}
            style={
              darkMode
                ? { backgroundColor: "#25273d" }
                : { backgroundColor: "white" }
            }
          />
        )}
        <p>{text}</p>
        <img
          src="/assets/photo/icon-cross.svg"
          alt="delete"
          onClick={handleDelete}
        />
      </StyledTask>
      <hr style={{ background: "#E3E4F1", opacity: 0.3, marginBottom: -3 }} />
    </>
  );
}
