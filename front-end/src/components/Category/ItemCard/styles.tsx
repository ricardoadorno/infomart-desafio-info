"use client";

import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1.5rem 0;
  padding: 1rem;
  border-top: 2px solid ${(props) => props.theme.colors.primary};

  @media ${(props) => props.theme.media.sm} {
    flex-direction: column;

    img {
      align-self: center;
    }
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  span {
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    margin-top: 4rem;
  }

  @media ${(props) => props.theme.media.sm} {
    gap: 1rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;

  @media ${(props) => props.theme.media.sm} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
