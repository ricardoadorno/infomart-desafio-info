"use client";
import { styled } from "styled-components";

export default function Home() {
  return (
    <>
      <Title>InfoMart</Title>
    </>
  );
}

const Title = styled.h1`
  font-size: 4.5em;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.serif};
  font-weight: 700;

  @media ${(props) => props.theme.media.sm} {
    font-size: 2.5em;
  }
`;
