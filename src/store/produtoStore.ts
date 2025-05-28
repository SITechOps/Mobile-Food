import { create } from "zustand";
import { ProductProps } from "../interfaces/IProduct";

interface StateProps {
  products: ProductProps[];
  addProduct: (newProduct: ProductProps) => void;
}

export const useProductStore = create<StateProps>((set) => ({
  products: [
    {
      category: "Massas",
      description: "Oi",
      name: "Pizza",
      price: "12.50",
      id: 273234,
    },
  ],

  addProduct: (newProduct) =>
    set((state) => ({
      products: [
        ...state.products,
        {
          ...newProduct,
          id: Date.now(),
        },
      ],
    })),
}));
