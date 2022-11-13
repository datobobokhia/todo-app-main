import styled from "styled-components";

export const StyledHeader = styled.header`
  /* @media (max-width: 600px) { */
  height: 200px;
  background-image: ${(props) =>
    props.darkMode
      ? "url('/assets/photo/bg-mobile-dark.jpg')"
      : "url('/assets/photo/bg-mobile-light.jpg')"};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  /* } */

  div {
    width: 80%;
    height: 20px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }
`;
