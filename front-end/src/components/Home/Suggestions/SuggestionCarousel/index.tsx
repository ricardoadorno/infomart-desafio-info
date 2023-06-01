import CarouselItem from "./CarouselItem/CarouselItem";
import { CarouselContainer, Carousel } from "./styles";

const itemsPropsPlaceholder = [
  {
    name: "Item 1",
    price: 49.99,
    category: "Fruta",
    imageUrl: "https:/placehold.it/200x200",
  },
  {
    name: "Item 1",
    price: 49.99,
    category: "Fruta",
    imageUrl: "https:/placehold.it/200x200",
  },
  {
    name: "Item 1",
    price: 49.99,
    category: "Fruta",
    imageUrl: "https:/placehold.it/200x200",
  },
];

export default function SuggestionCarousel() {
  return (
    <CarouselContainer>
      <h3>Algumas sugestões</h3>
      <Carousel>
        {itemsPropsPlaceholder.map((itemPropsPlaceholder, index) => (
          <CarouselItem key={index} item={itemPropsPlaceholder} />
        ))}
      </Carousel>
    </CarouselContainer>
  );
}
