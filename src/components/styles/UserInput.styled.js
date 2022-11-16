import styled from "styled-components";

export const StyledUserInput = styled.div`
  width: 50%;
  height: 64px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 158px;
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
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.25px;
    color: #393a4b;
    width: 85%;
  }

  input:focus {
    outline: none;
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background: #e3e4f1;
    border-radius: 50%;
    border: 1px solid;
  }

  input[type="checkbox"]:checked {
    background-image: url("/assets/photo/icon-check.svg");
    background-size: 24px 24px;
    background-position: center center;
    background-repeat: no-repeat;
  }

  @media (max-width: 480px) {
    width: 80%;
    height: 48px;
    top: 110px;

    input {
      border: none;
      font-size: 12px;
      line-height: 12px;
      letter-spacing: -0.166667px;
      color: #9495a5;
      width: 80%;
    }

    input[type="checkbox"] {
      width: 20px;
      height: 20px;
    }

    input[type="checkbox"]:checked {
      background-size: 20px 20px;
    }
  }
`;
