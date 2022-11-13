import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    /* html,body {
        background-color: #131518;
    } */
    body {
        height: 100vh;
        background-color: #f9f9f9;
        background: ${(props) => (props.darkMode ? "#161721" : "#f9f9f9")};
    }
`;
