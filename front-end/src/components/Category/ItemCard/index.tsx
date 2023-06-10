"use client";

import { ProductType } from "@/types";
import EditDialog from "../EditDialog";
import { ButtonGroup, Item, ItemContent } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { getItemsByCategory } from "@/app/categories/[category]/page";

export default function ItemCard({ item }: { item: ProductType[] }) {
  const { data } = useQuery<ProductType[]>({
    queryKey: ["posts"],
    queryFn: getItemsByCategory,
    initialData: item,
  });

  async function handleAddToList(id: string) {
    return fetch(`http://localhost:5000/products/list/${id}`, {
      method: "POST",
      cache: "no-cache",
    });
  }

  async function handleDeleteItem(id: string) {
    return fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <Item>
      {data.map((item, index) => (
        <LoopItem key={index} {...item} />
      ))}
    </Item>
  );
}

function LoopItem(item: ProductType) {
  return (
    <Item>
      <img width={245} height={208} src={item.imageUrl} alt={item.name} />
      <ItemContent>
        <div>
          <h2>{item.name}</h2>
          <span>R$ {item.price}</span>
        </div>
        <ButtonGroup>
          <button onClick={() => handleAddToList(item.id)}>Adicionar</button>
          <EditDialog itemId={item.id} />
          <button
            onClick={() => {
              handleDeleteItem(item.id);
            }}
          >
            Excluir
          </button>
        </ButtonGroup>
      </ItemContent>
    </Item>
  );
}
