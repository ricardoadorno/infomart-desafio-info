import {
  CarouselContainer,
  Carousel,
  CarouselItem,
  ItemImage,
  ItemInfo,
} from "./styles";

export default function SuggestionCarousel() {
  return (
    <CarouselContainer>
      <h3>Algumas sugestões</h3>
      <Carousel>
        <CarouselItem>
          <ItemImage
            draggable="false"
            src="https:/placehold.it/200x200"
            alt="suggestion"
          />
          <ItemInfo>
            <p>Item 1</p>
            <span>R$ 49,99</span>
            <small>Categoria: Fruta</small>
          </ItemInfo>
          <button>+Lista</button>
        </CarouselItem>
        <CarouselItem>
          <ItemImage
            draggable="false"
            src="https:/placehold.it/200x200"
            alt="suggestion"
          />
          <ItemInfo>
            <p>Item 1</p>
            <span>R$ 49,99</span>
            <small>Categoria: Fruta</small>
          </ItemInfo>
          <button>+Lista</button>
        </CarouselItem>
        <CarouselItem>
          <ItemImage
            draggable="false"
            src="https:/placehold.it/200x200"
            alt="suggestion"
          />
          <ItemInfo>
            <p>Item 1</p>
            <span>R$ 49,99</span>
            <small>Categoria: Fruta</small>
          </ItemInfo>
          <button>+Lista</button>
        </CarouselItem>
      </Carousel>
    </CarouselContainer>
  );
}
