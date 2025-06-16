import { useRef } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { Control, Controller } from "react-hook-form";
import { handleOnlyNumbersInput } from "@/utils/numeric-input-handler";
import { ProductProps } from "@/interfaces/product-props";
import { colors } from "@/constants/colors";

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
        <View className="flex-1 gap-2">
          <Text className="font-heading text-xl">{label}:</Text>
          <TextInput
            ref={inputRef}
            value={String(value ?? "")}
            placeholderTextColor={colors["gray-medium"]}
            onChangeText={(text) => {
              name === "stock"
                ? handleOnlyNumbersInput(text, onChange)
                : onChange(text);
            }}
            onLayout={() => {
              rest.multiline && inputRef.current?.setSelection(0, 0);
            }}
            keyboardType={name === "stock" ? "number-pad" : "default"}
            className="rounded-lg border border-transparent bg-gray-light px-4 py-3 font-body text-lg text-black focus:border-red-normal"
            {...rest}
          />
        </View>
      )}
    />
  );
}
