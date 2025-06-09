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
      rules={{ required: true }}
      render={({ field: { value, onChange } }) => (
        <View className="flex-1 gap-2">
          <Text className="font-heading text-xl">{label}:</Text>
          <TextInput
            ref={inputRef}
            value={String(value ?? "")}
            onChangeText={(text) =>
              name === "price" || name === "stock"
                ? onChange(Number(text))
                : onChange(text)
            }
            onLayout={() => {
              rest.multiline && inputRef.current?.setSelection(0, 0);
            }}
            className="rounded-lg border border-transparent bg-gray-light px-4 py-3 font-body text-lg focus:border-red-normal"
            {...rest}
          />
        </View>
      )}
    />
  );
}
