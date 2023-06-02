import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.background};
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

* {
    box-sizing: border-box;
}
`;
