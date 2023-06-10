"use client";

import { useState } from "react";
import CarouselItem from "./CarouselItem/CarouselItem";
import CarouselItemMobile from "./CarouselItemMobile/CarouselItemMobile";
import {
  CarouselContainer,
  Carousel,
  CarouselMobile,
  SelectorCarouselMobileElement,
} from "./styles";
import { ProductType } from "@/types";
import { getSuggetions } from "@/app/page";
import { useQuery } from "@tanstack/react-query";

export default function SuggestionCarousel({
  itens,
}: {
  itens: ProductType[];
}) {
  const [currentCarouselItem, setCurrentCarouselItem] = useState(0);

  const { data } = useQuery<ProductType[]>({
    queryKey: ["posts"],
    queryFn: getSuggetions,
    initialData: itens,
  });

  return (
    <CarouselContainer>
      <h3>Algumas sugestões</h3>
      <Carousel>
        {data.map((item, index) => (
          <CarouselItem key={index} item={item} />
        ))}
      </Carousel>

      <CarouselMobile>
        {itens
          .slice(currentCarouselItem, currentCarouselItem + 1)
          .map((item, index) => (
            <CarouselItemMobile key={index} item={item} />
          ))}
        <section>
          {itens.map((_, index) => (
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
