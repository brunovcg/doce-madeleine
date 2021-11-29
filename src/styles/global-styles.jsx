import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


    :root {
        --light-yellow: #F2EFC6;
        --dark-orange: #EF6A51;
        --orange: #EFC6A0;
        --light-orange: #F5D5BC ;
        --pink: #C52E91;
        --brown: #A25247;
        --transparent-black: #31303066;
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

  
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body, input, button, h2, h3, h4, h5, h6, p, textarea, select{
        font-family: "Cookie", Arial, sans-serif;
    }

    h1{
        font-family: "Cookie", Arial, sans-serif;
    }

    a {
        text-decoration: none;
        color: black;
    }

    button {
        cursor: pointer;
    }

`;
