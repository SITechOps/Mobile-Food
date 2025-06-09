import { View, Alert } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { router, useLocalSearchParams } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useProductActions } from "@/src/hooks/use-product-actions";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { Header } from "../components/header";
import { ProductProps } from "../interfaces/IProduct";
import { MoneyInput } from "../components/money-input";
import { UploadImage } from "../components/upload-image";
import { CategoryPicker } from "../components/category-picker";

export default function Form() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { product, onSubmit } = useProductActions();
  const { control, handleSubmit } = useForm<ProductProps>({
    defaultValues: id && product ? { ...product } : {}
  });

  function handleFormSubmit(data: ProductProps) {
    onSubmit(data);
  }

  function handleFormError() {
    Alert.alert("Campos obrigatórios", "Por favor, preencha todos os campos!");
  }

  return (
    <KeyboardAwareScrollView enableOnAndroid extraScrollHeight={90}>
      <Header title={id ? "Editar Produto" : "Adicionar Produto"} />
      <View className="mx-8 mb-4 gap-4 rounded-xl bg-white px-8 py-6 shadow-lg shadow-gray-medium">
        <Input
          name="name"
          label="Nome"
          placeholder="Nome do produto..."
          control={control}
        />
        <View className="flex-row gap-10">
          <MoneyInput name="price" label="Preço" control={control} />
          <Input
            name="stock"
            label="Estoque"
            placeholder="0"
            keyboardType="number-pad"
            control={control}
          />
        </View>
        <CategoryPicker control={control} />
        <Input
          name="description"
          label="Descrição"
          placeholder="Descreva brevemente o produto..."
          numberOfLines={3}
          textAlignVertical="top"
          control={control}
          multiline
        />
        <Controller
          control={control}
          name="imageUrl"
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <UploadImage value={value} onChange={onChange} />
          )}
        />
        <View className="mt-4 gap-3">
          <Button
            title="Salvar"
            type="filled"
            onPress={handleSubmit(handleFormSubmit, handleFormError)}
          />
          <Button title="Voltar" type="plain" onPress={() => router.back()} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
