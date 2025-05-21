import { create } from "zustand";

interface ProductProps {
  id: number;
  name: string;
  price: number;
}

interface StateProps {
  products: ProductProps[];
  addProducts: (newProduct: ProductProps) => void;
}

export const useProductStore = create<StateProps>((set) => ({
  products: [],
  addProducts: (newProduct) =>
    set((state) => ({
      products: [...state.products, newProduct],
    })),
}));
