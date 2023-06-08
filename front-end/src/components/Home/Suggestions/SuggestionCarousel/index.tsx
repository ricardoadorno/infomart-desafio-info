"use client";

import { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem/CarouselItem";
import CarouselItemMobile from "./CarouselItemMobile/CarouselItemMobile";
import {
  CarouselContainer,
  Carousel,
  CarouselMobile,
  SelectorCarouselMobileElement,
} from "./styles";
import { ProductType } from "@/types";

const itemsPropsPlaceholder = [
  {
    name: "Item 0",
    price: 49.99,
    category: "Fruta",
    imageUrl: "/images/placeholder.png",
  },
  {
    name: "Item 1",
    price: 49.99,
    category: "Fruta",
    imageUrl: "/images/placeholder.png",
  },
  {
    name: "Item 2",
    price: 49.99,
    category: "Fruta",
    imageUrl: "/images/placeholder.png",
  },
  {
    name: "Item 3",
    price: 49.99,
    category: "Fruta",
    imageUrl: "/images/placeholder.png",
  },
  {
    name: "Item 4",
    price: 49.99,
    category: "Fruta",
    imageUrl: "/images/placeholder.png",
  },
];

export default function SuggestionCarousel({
  itens,
}: {
  itens: ProductType[];
}) {
  const [currentCarouselItem, setCurrentCarouselItem] = useState(0);

  return (
    <CarouselContainer>
      <h3>Algumas sugestões</h3>
      <Carousel>
        {itens.map((item, index) => (
          <CarouselItem key={index} item={item} />
        ))}
      </Carousel>

      <CarouselMobile>
        {itens
          .slice(currentCarouselItem, currentCarouselItem + 2)
          .map((item, index) => (
            <CarouselItemMobile key={index} item={item} />
          ))}
        <section>
          {itemsPropsPlaceholder.map((_, index) => (
            <SelectorCarouselMobileElement
              key={index}
              className={index === currentCarouselItem ? "active" : ""}
              onClick={() => setCurrentCarouselItem(index)}
            ></SelectorCarouselMobileElement>
          ))}
        </section>
      </CarouselMobile>
    </CarouselContainer>
  );
}
