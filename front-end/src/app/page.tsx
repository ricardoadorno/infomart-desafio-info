import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import Suggestions from "@/components/Home/Suggestions";
import Loading from "@/components/Loading";

export default function Home() {
  return (
    <main className="container">
      <Loading />
      <Hero />
      <Suggestions />
      <Categories />
    </main>
  );
}
