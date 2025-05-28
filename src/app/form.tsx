import { Alert, View } from "react-native";
import { Header } from "../components/header";
import { Input } from "../components/input";
import { ProductFormData } from "../interfaces/IProduct";
import { useForm } from "react-hook-form";
import { router } from "expo-router";
import { useProductStore } from "@/src/store/produtoStore";
import { CategoryPicker } from "../components/category-picker";
import { Button } from "../components/button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinkButton } from "../components/link-button";

export default function Form() {
  const { control, handleSubmit } = useForm<ProductFormData>();
  const { addProducts } = useProductStore();

  function onSubmit(data: ProductFormData) {
    try {
      console.log("oi", data);
      addProducts(data);
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
    <KeyboardAwareScrollView>
      <Header title="Novo produto" />
      <View className="m-8 gap-5 rounded-xl bg-white px-8 py-6 shadow-lg shadow-[#a9a9a9]">
        <Input
          name="name"
          label="Nome:"
          placeholder="Nome do produto..."
          control={control}
        />
        <Input
          name="price"
          label="Preço (R$):"
          placeholder="0,00"
          keyboardType="number-pad"
          control={control}
        />
        <Input
          name="description"
          label="Descrição:"
          placeholder="Descreva brevemente o produto..."
          style={{ height: 80, textAlignVertical: "top" }}
          control={control}
          multiline
        />
        <CategoryPicker control={control} />
        <Button onPress={handleSubmit(onSubmit)} />
        <LinkButton href="/" title="Voltar" />
      </View>
    </KeyboardAwareScrollView>
  );
}
