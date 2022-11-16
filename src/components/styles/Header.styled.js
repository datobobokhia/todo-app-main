import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 300px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  background-image: ${(props) =>
    props.darkMode
      ? "url('/assets/photo/bg-desktop-dark.jpg')"
      : "url('/assets/photo/bg-desktop-light.jpg')"};

  div {
    width: 50%;
    height: 48px;
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
    background-image: url("/assets/photo/");
  }
  h1 {
    font-family: "Josefin Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 15px;
    color: #ffffff;
    margin: 0px;
    padding: 0px;
  }

  img {
    width: 26px;
    height: 26px;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    height: 200px;
    background-image: ${(props) =>
      props.darkMode
        ? "url('/assets/photo/bg-mobile-dark.jpg')"
        : "url('/assets/photo/bg-mobile-light.jpg')"};

    div {
      width: 80%;
      height: 20px;
      margin-top: 50px;
    }
    h1 {
      font-size: 23px;
      line-height: 25px;
      letter-spacing: 10px;
    }

    img {
      width: 20px;
      height: 20px;
    }
  }
`;
