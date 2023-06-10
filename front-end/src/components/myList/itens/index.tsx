"use client";
import { Product } from "@/types";
import { ItemContainer } from "./styles";

export default function Item({ product }: { product: Product }) {
  return (
    <ItemContainer>
      <div className="itemDescription">
        <img src={product.imageUrl} />
        <div className="itemClass">
          <p className="h4">{product.name}</p>
          <div className="category">
            <span className="p">Categoria: {product.categoryName}</span>
          </div>
        </div>
      </div>

      <div className="itemInfo">
        <div className="itemprice">
          <span className="itemPrice h4">
            {product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </div>
    </ItemContainer>
  );
}
