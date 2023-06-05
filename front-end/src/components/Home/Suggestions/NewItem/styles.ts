"use client";

import styled from "styled-components";

export const NewItemContainer = styled.div`
  flex: 1;

  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.h4};
    color: ${(props) => props.theme.colors.black};
  }
`;
