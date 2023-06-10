export interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  categoryName: string;
}
export type CreateProductType = {
  name: string;
  price: number;
  categoryName: string;
  imageUrl: string;
  description: string;
};

export type ProductType = {
  id: string;
  name: string;
  price: number;
  categoryName: string;
  categoryId: string;
  imageUrl: string;
  description: string;
  idRelation: string;
};

export type ListProductType = {
  id: string;
  name: string;
  products: ProductType[];
};

