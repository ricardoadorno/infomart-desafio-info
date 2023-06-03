"use client";

import styled from "styled-components";

export const SuggestionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem 0 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  height: 28rem;

  @media ${(props) => props.theme.media.md} {
    flex-direction: column;
    height: 100%;
    padding: 1rem;
  }
`;

export const SuggestionsDivider = styled.div`
  width: 1px;
  height: 80%;
  background-color: ${(props) => props.theme.colors.primary};
  align-self: center;

  @media ${(props) => props.theme.media.md} {
    width: 80%;
    height: 1px;
  }
`;
