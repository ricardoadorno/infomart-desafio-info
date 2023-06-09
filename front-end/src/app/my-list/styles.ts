"use client";

import { styled } from "styled-components";

export const ListContainer = styled.section`
  height: 100%;
  margin: 0.625rem auto;
  font-family: ${({ theme }) => theme.fonts.serif};
`;

export const ListContent = styled.div`
  margin-top: 0.625rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  height: auto;
  max-height: 65vh;
  min-height: 65vh;
  overflow: auto;
  overflow-x: hidden;
  border-radius: 5px;

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 9999px;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

`;
