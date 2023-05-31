import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Suggestions from "@/components/Suggestions";

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
        <Suggestions />
        <Categories />
      </Container>
    </>
  );
}

import { styled } from "@/styles";

export const Container = styled("div", {
  maxWidth: "1000px",
  margin: "0 auto",
});
