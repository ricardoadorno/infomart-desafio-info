"use client"

import { styled } from "styled-components";

export const ItemContainer = styled.div`
    width: 100%;
    padding: 1.5rem 1.75rem 1rem;

    display: flex;
    justify-content: space-between;


    .itemDescription{
        display: flex;
        gap: 0.938rem;
        width: 50%;
        
    }

    .itemClass p{
        font-weight: 700;
        margin-bottom: 2.25rem;
    }

    span{
        font-family: ${({ theme }) => theme.fonts.sans};
    }


    .itemInfo {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        width: 50%;
    }

    .itemInfo p {
        color: ${({ theme }) => theme.colors.primary};
    }

    .removeItem{
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.background};
        font-size: ${({ theme }) => theme.fontSizes.small};
        cursor: pointer;
        width: 10.25rem;
        width: 100%;
        min-height: 2.5rem;
        border-radius: 10px;
    }

    .itemPrice {
        font-weight: 700;
    }

    @media ${(props) => props.theme.media.sm} {
        padding: 1.25rem 1rem 1rem;
        .category {
            display: none;
        }
    }

    @media ${(props) => props.theme.media.xx} {
        img{
           width: 7rem;
        }
    }

    .amount {
        position: absolute;
        bottom: -30px;
        left: 50px;
        font-family: ${({ theme }) => theme.fonts.sans};
        margin-top: 1.25rem;
        font-weight: 700;
    }

    .value {
        color: ${({ theme }) => theme.colors.primary};
    }
`