"use client";
import { Product } from "@/types";
import React, { useState } from "react";
import Item from "../myList/itens";
import DeleteButton from "../myList/deleteButton";
import { AmountContainer, ButtonContainer, EmptyContainer } from "./styles";

export default function Lists({ apiData }: { apiData: Product[] }) {
  const [products, setProducts] = useState<Product[]>(apiData);
  return (
    <>
      {products.length > 0 ? (
        <>
          {products.map((product: Product) => (
            <>
              <Item product={product} />
              <ButtonContainer>
                <DeleteButton
                  productId={product.id}
                  setProducts={setProducts}
                />
              </ButtonContainer>
            </>
          ))}

          <AmountContainer>
            <span className="h3">Total: </span>
            <span className="value h3">
              {products
                .reduce((acc, curr) => {
                  return acc + curr.price;
                }, 0)
                .toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
            </span>
          </AmountContainer>
        </>
      ) : (
        <EmptyContainer>
          <section className="empty">
            <h1 className="h2">Sua lista está vazia!</h1>
            <p className="emptyDescription h4">
              Para inserir produtos basta clicar no botão “+ Lista” debaixo dos
              itens!
            </p>
            <a className="homeButton" href="/">
              Home
            </a>
          </section>
        </EmptyContainer>
      )}
    </>
  );
}
