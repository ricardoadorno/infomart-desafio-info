import Link from "next/link";
import { CardsContainer, CategoriesCard, CardImage, H2 } from "./styles";
import higiene from "@/assets/images/categories/higiene-min.png";
import hortifruti from "@/assets/images/categories/hortifruti-min.png";
import limpeza from "@/assets/images/categories/limpeza-min.png";
import padaria from "@/assets/images/categories/padaria-min.png";

export default function Categories() {
  return (
    <>
      <H2>Categories</H2>
      <CardsContainer>
        <CategoriesCard>
          <CardImage src={padaria.src} alt="Padaria" />
          <h3>Padaria</h3>
          <Link href="/categories/padaria">
            <button>Confira</button>
          </Link>
        </CategoriesCard>
        <CategoriesCard>
          <CardImage src={hortifruti.src} alt="Hortifruti" />
          <h3>Hortifruti</h3>
          <Link href="/categories/hortifruti">
            <button>Confira</button>
          </Link>
        </CategoriesCard>
        <CategoriesCard>
          <CardImage src={limpeza.src} alt="Limpeza" />
          <h3>Limpeza</h3>
          <Link href="/categories/limpeza">
            <button>Confira</button>
          </Link>
        </CategoriesCard>
        <CategoriesCard>
          <CardImage src={higiene.src} alt="Higiene" />
          <h3>Higiene</h3>
          <Link href="/categories/higiene">
            <button>Confira</button>
          </Link>
        </CategoriesCard>
      </CardsContainer>
    </>
  );
}
