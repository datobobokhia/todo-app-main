import styled from "styled-components";

export const StyledTask = styled.li`
  width: 100%;
  height: 45px;
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
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    border: 1px solid;
  }

  input[type="checkbox"]:checked {
    background-image: url("/assets/photo/icon-check.svg");
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
  }

  p {
    width: 60%;
    overflow: hidden;
  }

  img {
    width: 12px;
    height: 12px;
  }
`;
