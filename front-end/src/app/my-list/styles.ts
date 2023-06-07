"use client"

import { styled } from "styled-components";

export const ListContainer = styled.section`
    width: 90vw;
    height: 65vh;
    margin: 0.625rem auto;
    font-family: ${({ theme }) => theme.fonts.serif};
`

export const ListContent = styled.div`
    margin-top: 0.625rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 100%;
    height: 100%;
    overflow: scroll;
    overflow-x: hidden;

    .empty{
        width: 80%;
        height: 100%;
        gap: 2.5rem;
        margin: 0 auto;

        text-align: center;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .emptyDescription{
        color: ${({ theme }) => theme.colors.grayAlt};
    }

    .homeButton {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.background};
        font-size: ${({ theme }) => theme.fontSizes.h4};
        font-family: ${({ theme }) => theme.fonts.sans};
        font-weight: 700;
        padding: 0.75rem 1rem;
        border-radius: 10px;
    }
`