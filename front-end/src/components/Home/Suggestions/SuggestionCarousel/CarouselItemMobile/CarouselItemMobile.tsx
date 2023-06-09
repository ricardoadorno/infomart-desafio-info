import { Item, ItemInfo } from "./styles";

export default function CarouselItemMobile({ item }: { item: ProductType }) {
  return (
    <Item>
      <img
        draggable="false"
        src={item.imageUrl}
        width={111}
        height={111}
        alt={item.name}
      />
      <ItemInfo>
        <p>{item.name}</p>
        <span>R$ {item.price}</span>
        <button>+ Lista</button>
      </ItemInfo>
    </Item>
  );
}
