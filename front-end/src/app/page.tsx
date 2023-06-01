import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import Suggestions from "@/components/Home/Suggestions";
import { Container } from "@/styles/global";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Suggestions />
      <Categories />
    </Container>
  );
}
