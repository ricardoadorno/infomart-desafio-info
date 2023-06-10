"use client";

import { styled } from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  padding: 1.5rem 1.75rem 1rem;
  display: flex;
  justify-content: space-between;

  img{
    border-radius: 50%;
    min-width: 9.5rem;
    height:  9.5rem;
  }

  .itemDescription {
    display: flex;
    gap: 0.938rem;
    width: 50%;
  }

  .itemClass p {
    font-weight: 700;
    margin-bottom: 2.25rem;
  }

  span {
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

  .itemPrice {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media ${(props) => props.theme.media.sm} {
    padding: 1.25rem 1rem 1rem;
    .category {
      display: none;
    }
  }

  @media ${(props) => props.theme.media.xm} {
    img {
      min-width: 7rem;
      height: 7rem;
    }
  }
`;
