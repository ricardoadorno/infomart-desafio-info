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
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.h2};
    margin-bottom: 1rem;
    line-height: 1.14;
  }

  h4 {
    font-size: ${(props) => props.theme.fontSizes.h4};
    margin: 0;
  }

  @media ${(props) => props.theme.media.sm} {
    h1 {
      font-size: ${(props) => props.theme.fontSizes.h1};
    }
  }
`;

export const HeroImage = styled.img`
  height: auto;
  width: 300px;

  @media ${(props) => props.theme.media.sm} {
    display: none;
  }
`;
