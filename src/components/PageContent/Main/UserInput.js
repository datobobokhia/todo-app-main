import { useState } from "react";
import { v4 as uuid } from "uuid";
import { StyledUserInput } from "../../styles/UserInput.styled";

export default function UserInput({
  input,
  setInput,
  setTodoList,
  todoList,
  darkMode,
}) {
  const [checked, setChecked] = useState(false);
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const handleCheckbox = () => {
    setChecked(!checked);
  };
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      setTodoList([
        ...todoList,
        {
          text: input,
          completed: checked,
          id: small_id,
        },
      ]);
      setInput("");
    }
  };

  return (
    <StyledUserInput
      style={
        darkMode ? { backgroundColor: "#25273d" } : { backgroundColor: "white" }
      }
    >
      <input
        type={"checkbox"}
        onChange={handleCheckbox}
        style={
          darkMode
            ? { backgroundColor: "#25273d" }
            : { backgroundColor: "white" }
        }
      />
      <input
        type={"text"}
        onChange={handleInput}
        value={input}
        onKeyPress={handleKeyPress}
        placeholder={"Create a new todo..."}
        style={
          darkMode
            ? { backgroundColor: "#25273d" }
            : { backgroundColor: "white" }
        }
      />
    </StyledUserInput>
  );
}
