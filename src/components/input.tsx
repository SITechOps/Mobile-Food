import { Control, Controller } from "react-hook-form";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { ProductFormData } from "../interfaces/IProduct";
import { useEffect, useRef, useState } from "react";

type InputProps = TextInputProps & {
  label: string;
  name: keyof ProductFormData;
  control: Control<ProductFormData>;
};

export function Input({ label, name, control, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: true }}
      render={({ field: { value, onChange, onBlur } }) => {
        useEffect(() => {
          // Só força a posição inicial se não estiver focado e for multiline
          if (!isFocused && rest.multiline && value && inputRef.current) {
            setTimeout(() => {
              inputRef.current?.setSelection(0, 0);
            }, 10);
          }
        }, [value, isFocused, rest.multiline]);

        return (
          <View className="flex-1 gap-2">
            <Text className="font-heading text-xl">{label}:</Text>
            <TextInput
              ref={inputRef}
              value={value || ""}
              onChangeText={onChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="rounded-lg border border-transparent bg-[#f1f1f1] px-4 py-3 font-body text-lg focus:border-[#ee4c58]"
              {...rest}
            />
          </View>
        );
      }}
    />
  );
}
