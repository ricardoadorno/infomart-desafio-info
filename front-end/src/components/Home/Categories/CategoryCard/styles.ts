"use client";

import styled from "styled-components";

export const CategoriesCard = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.gray};
  padding-bottom: 3rem;

  h3 {
    font-size: ${(props) => props.theme.fonts.h3};
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;
