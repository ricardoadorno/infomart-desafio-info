"use client";

import styled from "styled-components";

export const CarouselContainer = styled.div`
  flex: 1;
  h3 {
    font-size: ${(props) => props.theme.fontSizes.h4};
    color: ${(props) => props.theme.colors.black};

    @media ${(props) => props.theme.media.sm} {
      text-align: center;
    }
  }
`;

export const Carousel = styled.div`
  margin-top: 0.6rem;
  align-items: center;
  display: flex;
  height: 347px;
  overflow-x: auto;
  justify-content: space-between;
  gap: 1rem;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    margin-top: 1rem;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 9999px;
  }
`;
