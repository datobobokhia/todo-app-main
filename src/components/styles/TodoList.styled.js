import styled from "styled-components";

export const StyledTodoList = styled.div`
  position: absolute;
  top: 246px;
  width: 50%;
  background-color: ${(props) => (props.darkMode ? "#25273d" : "#ffffff")};
  box-shadow: ${(props) =>
    props.darkMode ? "none" : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};
  border-radius: 5px;

  ul {
    padding: 0;
    list-style-type: none;
    border-radius: 5px;
    margin: 0px;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: "Josefin Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    text-align: right;
    letter-spacing: -0.194444px;
    color: #9495a5;
  }
  h1 {
    width: 100%;
    height: 16px;
    background-color: ${(props) => (props.darkMode ? "#161721" : "#f5f5f6")};
    border: none;
    padding: 0px;
    margin: 0px;
  }

  @media (max-width: 480px) {
    top: 180px;
    width: 80%;

    button {
      font-size: 12px;
      line-height: 12px;
      letter-spacing: -0.166667px;
    }
  }
`;
