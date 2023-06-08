export type CreateProductType = {
  name: string;
  price: number;
  categoryName: string;
  imageUrl: string;
  description: string;
};

export type ProductType = {
  name: string;
  price: number;
  category: string;
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
