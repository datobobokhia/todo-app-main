import { StyledHeader } from "../../styles/Header.styled";

export default function Header({ setDarkMode, darkMode }) {
  const handelDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <StyledHeader darkMode={darkMode}>
      <div>
        <h1>TODO</h1>
        <img
          src={
            darkMode
              ? "/assets/photo/icon-moon.svg"
              : "/assets/photo/icon-sun.svg"
          }
          alt="moon"
          onClick={handelDarkMode}
        />
      </div>
    </StyledHeader>
  );
}
