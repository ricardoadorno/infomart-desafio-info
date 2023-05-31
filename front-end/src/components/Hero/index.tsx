import { HeroContainer, HeroImage } from "./styles";
import heroImage from "@/assets/images/hero-img.png";

export default function Hero() {
  return (
    <HeroContainer>
      <div>
        <h1>Listas de compra nunca foram tão simples!</h1>
        <p>
          Com um clique construa sua lista de compras gratuitamente de forma
          rápida
        </p>
      </div>
      <HeroImage src={heroImage.src} alt="hero" />
    </HeroContainer>
  );
}
