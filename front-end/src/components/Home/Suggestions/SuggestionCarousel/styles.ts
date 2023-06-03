"use client";

import styled from "styled-components";

export const CarouselContainer = styled.div`
  flex: 1;
  h3 {
    font-size: ${(props) => props.theme.fontSizes.h4};
    color: ${(props) => props.theme.colors.black};

    @media ${(props) => props.theme.media.sm} {
      text-align: center;
      margin-bottom: 1rem;
    }
  }
`;

export const Carousel = styled.div`
  @media ${(props) => props.theme.media.sm} {
    display: none;
  }

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

export const CarouselMobile = styled.div`
  @media ${(props) => props.theme.media.sm} {
    display: flex;
  }

  display: none;

  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;

  section {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  button {
    padding: 0;
  }
`;

export const SelectorCarouselMobileElement = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;

  &.active {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
