import { Alert } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { ProductProps } from "../interfaces/IProduct";
import { useProductStore } from "../store/product-store";

export function useProductActions() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { products, editProduct, addProduct, removeProduct } =
    useProductStore();

  function getProductInfo() {
    return products.find((p) => p.id === id);
  }

  function onSubmit(data: ProductProps) {
    const isEditing = Boolean(id);
    try {
      if (isEditing) {
        editProduct(id!, data);
      } else {
        addProduct(data);
      }
      Alert.alert(
        "Sucesso",
        `Produto ${isEditing ? "alterado" : "criado"} com sucesso!`,
        [
          {
            text: "OK",
            onPress: () => router.back(),
          },
        ],
      );
    } catch (error) {
      Alert.alert(
        "Erro",
        `Não foi possível ${isEditing ? "alterar" : "criar"} o produto.`,
      );
    }
  }

  function handleDeleteProduct(productId: string | undefined) {
    Alert.alert("Confirmar remoção", "Você deseja excluir esse produto?", [
      {
        text: "Cancelar",
      },
      {
        text: "Excluir",
        style: "destructive",
        onPress: () => {
          if (productId) {
            removeProduct(productId);
            router.push("/");
          }
        },
      },
    ]);
  }

  return { product: getProductInfo(), onSubmit, handleDeleteProduct };
}
