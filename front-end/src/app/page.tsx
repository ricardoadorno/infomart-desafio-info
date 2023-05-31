import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
      </Container>
    </>
  );
}

import { styled } from "@/styles";

export const Container = styled("div", {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "0 1rem",
});
