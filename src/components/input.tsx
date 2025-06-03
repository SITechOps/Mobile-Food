import { Control, Controller } from "react-hook-form";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { ProductFormData } from "../interfaces/IProduct";

type InputProps = TextInputProps & {
  label: string;
  name: keyof ProductFormData;
  control: Control<ProductFormData>;
};

export function Input({ label, name, control, ...rest }: InputProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: true }}
      render={({ field: { value, onChange, onBlur } }) => (
        <View className="flex-1 gap-2">
          <Text className="font-heading text-xl">{label}:</Text>
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            className="rounded-lg border border-transparent bg-[#f1f1f1] px-4 py-3 font-body text-lg focus:border-[#ee4c58]"
            {...rest}
          />
        </View>
      )}
    />
  );
}
