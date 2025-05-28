export interface ProductFormData {
  name: string;
  price: string;
  description: string;
  category: string;
}

export interface ProductProps extends ProductFormData {
  id?: number;
}
