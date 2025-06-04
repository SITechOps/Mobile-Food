import { View } from "react-native";
import { Control } from "react-hook-form";
import { Button } from "./button";
import { CategoryPicker } from "./category-picker";
import { Header } from "./header";
import { Input } from "./input";
import { ProductFormData } from "../interfaces/IProduct";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { router } from "expo-router";

interface FormProps {
  control: Control<ProductFormData>;
  onPress: () => void;
  title: string;
}

export function Form({ control, onPress, title }: FormProps) {
  return (
    <KeyboardAwareScrollView>
      <Header title={title} />
      <View className="mx-8 gap-4 rounded-xl bg-white px-8 py-6 shadow-lg shadow-[#a9a9a9]">
        <Input
          name="name"
          label="Nome"
          placeholder="Nome do produto..."
          control={control}
        />
        <View className="flex-row gap-10">
          <Input
            name="price"
            label="Preço (R$)"
            placeholder="0,00"
            keyboardType="number-pad"
            control={control}
          />
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
          textAlignVertical="top"
          style={{ height: 80 }}
          numberOfLines={3}
          control={control}
          multiline
        />
        <View className="mt-4 gap-3">
          <Button title="Salvar" type="filled" onPress={onPress} />
          <Button title="Voltar" type="plain" onPress={() => router.back()} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
