import { Text, View } from "react-native";
import { Controller } from "react-hook-form";
import MaskInput, { Masks } from "react-native-mask-input";
import { InputProps } from "./input";

export function MoneyInput({ label, name, control, ...rest }: InputProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: true }}
      render={({ field: { value, onChange } }) => {
        const maskedValue = value
          ? (Number(value) || 0).toFixed(2).replace(".", "").padStart(3, "0") // força centavos
          : "";

        return (
          <View className="flex-1 gap-2">
            <Text className="font-heading text-xl">{label}:</Text>
            <MaskInput
              value={maskedValue}
              placeholder="R$ 0,00"
              onChangeText={(_, unmasked) => {
                onChange(unmasked ? Number(unmasked) / 100 : 0);
              }}
              mask={Masks.BRL_CURRENCY}
              keyboardType="numeric"
              className="rounded-lg border border-transparent bg-gray-light px-4 py-3 font-body text-lg focus:border-red-normal"
              {...rest}
            />
          </View>
        );
      }}
    />
  );
}
