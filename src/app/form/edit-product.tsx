import { Alert } from "react-native";
import { useForm } from "react-hook-form";
import { router, useLocalSearchParams } from "expo-router";
import { Form } from "../../components/form";
import { ProductFormData } from "../../interfaces/IProduct";
import { useProductStore } from "@/src/store/productStore";

export default function EditForm() {
  const { products, editProduct } = useProductStore();

  const { id } = useLocalSearchParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  const { control, handleSubmit } = useForm<ProductFormData>({
    defaultValues: product && { ...product },
  });

  function onSubmit(data: ProductFormData) {
    try {
      editProduct(id, data);
      Alert.alert("Sucesso", "Produto alterado com sucesso!", [
        {
          text: "OK",
          onPress: () => router.back(),
        },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível alterar o produto.");
    }
  }

  return (
    <Form
      control={control}
      onPress={handleSubmit(onSubmit)}
      title="Editar Produto"
    />
  );
}
