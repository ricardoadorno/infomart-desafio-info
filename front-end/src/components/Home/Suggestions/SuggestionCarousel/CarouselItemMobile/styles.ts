"use client";

import styled from "styled-components";

export const Item = styled.div`
  width: 100%;
  flex-shrink: 0;
  flex-basis: 50px;
  display: flex;
  align-self: center;
  justify-content: space-evenly;

  img {
    width: 40%;
    height: auto;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const ItemInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
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

  button {
    height: 2rem;
    padding: 0.2rem 0.6rem;
    grid-column: 1 / 3;
  }
`;
