import { View } from "react-native";
import { Control } from "react-hook-form";
import { Header } from "./header";
import { Input } from "./input";
import { Button } from "./button";
import { LinkButton } from "./link-button";
import { CategoryPicker } from "./category-picker";
import { ProductFormData } from "../interfaces/IProduct";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface FormProps {
  control: Control<ProductFormData>;
  onPress: () => void;
  title: string;
}

export function Form({ control, onPress, title }: FormProps) {
  return (
    <KeyboardAwareScrollView>
      <Header title={title} />
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
        <CategoryPicker control={control} />
        <Input
          name="description"
          label="Descrição:"
          placeholder="Descreva brevemente o produto..."
          style={{ height: 80, textAlignVertical: "top" }}
          control={control}
          multiline
        />
        <Button onPress={onPress} />
        <LinkButton href="/" title="Voltar" />
      </View>
    </KeyboardAwareScrollView>
  );
}
