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
      <h2>Algumas sugestões</h2>
      <Carousel>
        <CarouselItem>
          <ItemImage
            draggable="false"
            src="https:/placehold.it/200x200"
            alt="suggestion"
          />
          <ItemInfo>
            <h3>Item 1</h3>
            <span>Preço</span>
            <small>Tag</small>
          </ItemInfo>
          <button>+Lista</button>
        </CarouselItem>
      </Carousel>
    </CarouselContainer>
  );
}
