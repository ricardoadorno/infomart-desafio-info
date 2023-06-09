import { Product } from '@/types';
import React, { useEffect, useState } from 'react';



const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:5000/products', {
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao obter os dados da API:', error);
  }
};

export default async function Test() {
  const products = await fetchData();
  
  return (
     <div>
        {products.length > 0 ? (
          products.map((product: Product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <p>{product.categoryName}</p>
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado</p>
        )}
    </div>  
    )
}

