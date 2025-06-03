export interface ProductFormData {
  name: string;
  price: string;
  stock: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface ProductProps extends ProductFormData {
  id: string;
}
