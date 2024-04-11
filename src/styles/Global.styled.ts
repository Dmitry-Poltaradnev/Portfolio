import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";


export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.text};
        font-weight: 400;
        line-height: 1.2;
    }    

    section {
        margin-bottom: 60px;        
    }

    h1, h2, h3, h4 {
        color: ${theme.colors.title};
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    li {
        list-style: none;
    }

    button {
        background-color: unset;
        border: unset;
        cursor: pointer;
    }
`