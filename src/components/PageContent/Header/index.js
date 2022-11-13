import { StyledHeader } from "../../styles/Header.styled";

export default function Header({ setDarkMode, darkMode }) {
  const handelDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <StyledHeader darkMode={darkMode}>
      <div>
        <img src="/assets/photo/logo-todo.png" alt="todo" />
        <img
          src={
            darkMode
              ? "/assets/photo/icon-moon.svg"
              : "/assets/photo/icon-sun.svg"
          }
          alt="moon"
          style={{
            width: "20px",
            height: "20px",
          }}
          onClick={handelDarkMode}
        />
      </div>
    </StyledHeader>
  );
}
