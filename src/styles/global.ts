import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html {
        /* tamanho padrão da font-size para desktop é 16px . obs: REM equivale ao tamanho do font-size da tela */
        @media(max-width: 1080px) {
            font-size: 93.75%; /* 16 * 0,9375 = 15px */
        }

        @media(max-width: 720px) {
            font-size: 81.5%; /* 16 * 0,875 = 14px --- 16 * 0,815 = 13px */
        }
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
    }

    body {
        background-color: ${(props) => props.theme["gray-800"]};
        color: ${(props) => props.theme["gray-100"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif;
    } 
`;
