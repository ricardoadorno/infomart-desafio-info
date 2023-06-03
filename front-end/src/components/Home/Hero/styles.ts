"use client";

import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 8rem 0;

  hgroup {
    max-width: 50%;
    font-weight: 700;
    font-family: ${(props) => props.theme.fonts.serif};

    @media ${(props) => props.theme.media.sm} {
      max-width: 100%;
      text-align: center;
    }
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.h2};
    margin-bottom: 1rem;
    line-height: 1.14;

    @media ${(props) => props.theme.media.sm} {
      font-size: ${(props) => props.theme.fontSizes.h2} !important;
    }
  }

  h4 {
    font-size: ${(props) => props.theme.fontSizes.h4};
    margin: 0;

    @media ${(props) => props.theme.media.sm} {
      font-size: ${(props) => props.theme.fontSizes.h4};
    }
  }

  img {
    height: auto;
    width: 350px;

    @media ${(props) => props.theme.media.sm} {
      display: none;
    }
  }

  @media ${(props) => props.theme.media.sm} {
    h1 {
      font-size: ${(props) => props.theme.fontSizes.h1};
    }
  }
`;
