import { Control, Controller } from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { useRef } from "react";
import { ProductProps } from "../interfaces/IProduct";

export type InputProps = TextInputProps & {
  label: string;
  name: keyof ProductProps;
  control: Control<ProductProps>;
};

export function Input({ label, name, control, ...rest }: InputProps) {
  const inputRef = useRef<TextInput>(null);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      rules={{ required: true }}
      render={({ field: { value, onChange } }) => (
        <View style={{ marginBottom: 16 }}>
          <Text className="font-heading text-xl">{label}:</Text>
          <TextInput
            ref={inputRef}
            value={String(value ?? "")}
            placeholderTextColor="#9CA3AF"
            onChangeText={(text) =>
              name === "stock" ? onChange(Number(text)) : onChange(text)
            }
            className="bg-gray-light focus:border-red-normal rounded-lg border border-transparent px-4 py-3 font-body text-lg"
            {...rest}
          />
        </View>
      )}
    />
  );
}
