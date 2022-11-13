import styled from "styled-components";

export const StyledUserInput = styled.div`
  width: 80%;
  height: 48px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 110px;
  background: #ffffff;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  input {
    border: none;
    font-family: "Josefin Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #9495a5;
    width: 80%;
  }

  input:focus {
    outline: none;
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: #e3e4f1;
    border-radius: 50%;
    border: 1px solid;
  }

  input[type="checkbox"]:checked {
    background-image: url("/assets/photo/icon-check.svg");
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
  }
`;
