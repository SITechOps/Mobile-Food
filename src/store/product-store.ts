import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import sampleProducts from "./sample.json";
import { ProductFormData, ProductProps } from "../interfaces/IProduct";

interface StateProps {
  products: ProductProps[];
  addProduct: (newProduct: ProductFormData) => void;
  editProduct: (idProduct: string, newProduct: ProductFormData) => void;
  removeProduct: (idProduct: string) => void;
}

export const useProductStore = create(
  persist<StateProps>(
    (set) => ({
      products: sampleProducts || [],

      addProduct: (newProduct) =>
        set((state) => ({
          products: [
            ...state.products,
            {
              ...newProduct,
              id: String(Date.now()),
            },
          ],
        })),

      editProduct: (idProduct, newProduct) =>
        set(({ products }) => ({
          products: products.map((products) =>
            products.id === idProduct
              ? { ...products, ...newProduct }
              : products,
          ),
        })),

      removeProduct: (idProduct) =>
        set(({ products }) => ({
          products: products.filter((product) => product.id !== idProduct),
        })),
    }),
    {
      name: "mobile-food:product",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
