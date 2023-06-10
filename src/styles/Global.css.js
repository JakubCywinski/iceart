import { createGlobalStyle } from "styled-components";

// font-family: 'Inter', sans-serif;
// font-family: 'Poppins', sans-serif;

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-background: #f2efea;
        --color-text: #333;
        --color-primary: #ff4079;
        
        --font-size-sm: clamp(0.7rem, 0.35vw + 0.61rem, 0.89rem);
        --font-size-base: clamp(0.88rem, 0.57vw + 0.73rem, 1.19rem);
        --font-size-md: clamp(1.09rem, 0.89vw + 0.87rem, 1.58rem);
        --font-size-lg: clamp(1.37rem, 1.35vw + 1.03rem, 2.11rem);
        --font-size-xl: clamp(1.71rem, 2.01vw + 1.21rem, 2.81rem);
        --font-size-xxl: clamp(2.14rem, 2.93vw + 1.4rem, 3.75rem);
        --font-size-xxxl: clamp(2.67rem, 4.23vw + 1.61rem, 5rem);
    }

    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        transition: background-color 0.3s cubic-bezier(0.74, 0.44, 0.38, 0.85), color 0.1s linear;
    }

    /* Firefox scrollbar */
    * {
        scrollbar-width: thin;
        scrollbar-color: #FF4079 #E8C0EB;
    }

    /* Chrome, Edge and Safari scrollbar */
    *::-webkit-scrollbar {
        width: 10px;
        width: 10px;
    }
    *::-webkit-scrollbar-track {
        border-radius: 0px;
        background-color: #E8C0EB;
    }

    *::-webkit-scrollbar-track:hover {
        background-color: #E8C0EB;
    }

    *::-webkit-scrollbar-track:active {
        background-color: #E8C0EB;
    }

    *::-webkit-scrollbar-thumb {
        border-radius: 0px;
        background-color: #FF4079;
    }

    *::-webkit-scrollbar-thumb:hover {
        background-color: #E73A6E;
    }

    *::-webkit-scrollbar-thumb:active {
        background-color: #E73A6E;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-size: var(--font-size-base);
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        scroll-padding-top: 20vh;
    }

    html {
        scroll-behavior: smooth;
        font-size: 16px;
    }

    body {
        background-color: var(--color-background);
        color: var(--color-text);
    }

    a {
        display: inline-block;
        color: var(--color-primary);
        text-decoration: none;
        font-family: inherit;
    }

    button {
        cursor: pointer;
        font-family: inherit;
        border: none;
    }

    p {
        font-family: 'Inter', sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Poppins', sans-serif;
    }
`;
