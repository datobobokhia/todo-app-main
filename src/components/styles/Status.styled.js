import styled from "styled-components";

export const StyledStatus = styled.div`
  display: flex;
  justify-content: center;
  height: 55px;
  background-color: ${(props) => (props.darkMode ? "#25273d" : "#ffffff")};
  box-shadow: ${(props) =>
    props.darkMode ? "none" : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};
  border-radius: 5px;
  padding: 0px;
  margin: 0px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: "Josefin Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.194444px;
  }

  button:focus {
    color: #3a7cfd;
  }
`;
