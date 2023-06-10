"use client"

import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.black};
}

input, button{
    border: none;
    outline: none;
}

input {
    background: ${(props) => props.theme.colors.gray};
    border-radius: 36px;
    border: none;
    padding: 10px;
    width: 100%;

    &::placeholder {
      color: ${(props) => props.theme.colors.placeholder};
    }
  }

  button {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 10px;
}

  .container {
    max-width: 1000px;
    margin: 4rem auto;
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

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`