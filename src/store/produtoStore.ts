import { create } from "zustand";
import { ProductFormData, ProductProps } from "../interfaces/IProduct";

interface StateProps {
  products: ProductProps[];
  addProduct: (newProduct: ProductFormData) => void;
  removeProduct: (idProduct: number) => void;
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

  removeProduct: (idProduct) => {
    set(({ products }) => ({
      products: products.filter((product) => product.id != idProduct),
    }));
  },
}));
