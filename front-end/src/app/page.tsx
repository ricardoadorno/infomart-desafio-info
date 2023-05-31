import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import Suggestions from "@/components/Home/Suggestions";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Suggestions />
      <Categories />
    </Container>
  );
}

import { styled } from "@/styles";

export const Container = styled("div", {
  maxWidth: "1000px",
  margin: "0 auto",
});
