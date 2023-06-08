"use client";

import styled from "styled-components";

export const Item = styled.div`
  flex-shrink: 0;
  flex-basis: 200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const ItemInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;

  p {
    font-family: ${(props) => props.theme.fonts.serif};
    color: ${(props) => props.theme.colors.black};
  }

  span {
    text-align: right;
    color: ${(props) => props.theme.colors.primary};
  }

  small {
    color: ${(props) => props.theme.colors.placeholder};
    grid-column: 1 / span 2;
  }
`;
