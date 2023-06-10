"use client";
import { styled } from "styled-components";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import Suggestions from "@/components/Home/Suggestions";
import { ProductType } from "@/types";

async function getSuggetions() {
  return fetch("http://localhost:5000/products?&pageSize=6", {
    cache: "no-store",
  }).then((res) => res.json());
}

export default async function Home() {
  const suggestionItens = (await getSuggetions()) as ProductType[];

  return (
    <main className="container">
      <Hero />
      <Suggestions suggestionItens={suggestionItens} />
      <Categories />
    </main>
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
