import Image from "next/image";
import { HeroContainer } from "./styles";

export default function Hero() {
  return (
    <HeroContainer>
      <hgroup>
        <h1>Listas de compra nunca foram tão simples!</h1>
        <h4>
          Com um clique construa sua lista de compras gratuitamente de forma
          rápida
        </h4>
      </hgroup>
      <Image src={"/images/hero-img.png"} width={500} height={500} alt="hero" />
    </HeroContainer>
  );
}
