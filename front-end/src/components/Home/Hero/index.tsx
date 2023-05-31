import { HeroContainer, HeroImage } from "./styles";
import heroImage from "@/assets/images/hero-img.png";

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
      <HeroImage src={heroImage.src} alt="hero" />
    </HeroContainer>
  );
}
