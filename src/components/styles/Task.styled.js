import styled from "styled-components";

export const StyledTask = styled.li`
  width: 100%;
  height: 64px;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.166667px;
  color: ${(props) => (props.darkMode ? "#c8cbe7" : "#494c6b")};
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 7px;

  input {
    color: #9495a5;
  }
  input[type="checkbox"] {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background: #fff;
    border-radius: 50%;
    border: 1px solid;
  }

  input[type="checkbox"]:checked {
    background-image: url("/assets/photo/icon-check.svg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 24px 24px;
  }

  p {
    width: 75%;
    overflow: hidden;
    font-family: "Josefin Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.25px;
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
    opacity: ${(props) => (props.completed ? "0.7" : "1")};
  }

  img {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 480px) {
    height: 45px;

    input[type="checkbox"] {
      width: 20px;
      height: 20px;
    }

    input[type="checkbox"]:checked {
      background-size: 20px 20px;
    }

    p {
      width: 60%;
      font-size: 12px;
      line-height: 12px;
      letter-spacing: -0.166667px;
    }

    img {
      width: 12px;
      height: 12px;
    }
  }
`;
