import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.background};
}



button {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 10px;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1rem;
}

body, input, button, textarea {
    font-family: 'Mulish', sans-serif;
    font-size: 1rem;
    font-weight: 400;
}

a {
    color: inherit;
    text-decoration: none;
}


`;
