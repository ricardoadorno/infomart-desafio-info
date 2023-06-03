"use client";

import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: ${(props) => props.theme.fonts.h2};
    font-family: ${(props) => props.theme.fonts.serif};
    font-weight: 700;
    margin: 2rem 0 2rem 0;

    @media ${(props) => props.theme.media.sm} {
      text-align: center;
    }
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  gap: 0.8rem;

  @media ${(props) => props.theme.media.sm} {
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    margin: 0 auto;
  }
`;
