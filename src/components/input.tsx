import { Control, Controller } from "react-hook-form";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { ProductFormData } from "../interfaces/IProduct";
import { useRef } from "react";

type InputProps = TextInputProps & {
  label: string;
  name: keyof ProductFormData;
  control: Control<ProductFormData>;
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
            value={value}
            onChangeText={onChange}
            onLayout={() => {
              rest.multiline && inputRef.current?.setSelection(0, 0);
            }}
            className="bg-gray-light rounded-lg border border-transparent px-4 py-3 font-body text-lg focus:border-red-normal"
            {...rest}
          />
        </View>
      )}
    />
  );
}
