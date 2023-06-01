import { Item, ItemImage, ItemInfo } from "./styles";

interface CarouselItemProps {
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export default function CarouselItem({ item }: { item: CarouselItemProps }) {
  return (
    <Item>
      <ItemImage draggable="false" src={item.imageUrl} alt="suggestion" />
      <ItemInfo>
        <p>{item.name}</p>
        <span>R$ {item.price}</span>
        <small> Categoria: {item.category}</small>
      </ItemInfo>
      <button>+ Lista</button>
    </Item>
  );
}
