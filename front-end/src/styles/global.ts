import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: ${({ theme }) => theme.colors.background};
}

input, button{
    border: none;
    outline: none;
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

.h1{
    font-size: ${({ theme }) => theme.fontSizes.h1};
}
.h2{
    font-size: ${({ theme }) => theme.fontSizes.h2};
}
.h3{
    font-size: ${({ theme }) => theme.fontSizes.h3};
}
.h4{
    font-size: ${({ theme }) => theme.fontSizes.h4};
}
.p{
    font-size: ${({ theme }) => theme.fontSizes.p};
}
.small{
    font-size: ${({ theme }) => theme.fontSizes.small};
}

@media ${(props) => props.theme.media.xm} {
    .h1{
        font-size: ${({ theme }) => theme.fontSizes.h1Mobile};
    }
    .h2{
        font-size: ${({ theme }) => theme.fontSizes.h2Mobile};
    }
    .h3{
        font-size: ${({ theme }) => theme.fontSizes.h3Mobile};
    }
    .h4{
        font-size: ${({ theme }) => theme.fontSizes.h4Mobile};
    }
    .p{
        font-size: ${({ theme }) => theme.fontSizes.pMobile};
    }
    }
`;
