import { Alert } from "react-native";
import { useForm } from "react-hook-form";
import { router } from "expo-router";
import { Form } from "../../components/form";
import { ProductFormData } from "../../interfaces/IProduct";
import { useProductStore } from "@/src/store/productStore";

export default function AddForm() {
  const { control, handleSubmit } = useForm<ProductFormData>();
  const { addProduct } = useProductStore();

  function onSubmit(data: ProductFormData) {
    try {
      addProduct(data);
      Alert.alert("Sucesso", "Produto criado com sucesso!", [
        {
          text: "OK",
          onPress: () => router.back(),
        },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível criar o produto.");
    }
  }

  return (
    <Form
      control={control}
      onPress={handleSubmit(onSubmit)}
      title="Adicionar Produto"
    />
  );
}
