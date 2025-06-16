import { Text, View } from "react-native";
import { Controller } from "react-hook-form";
import MaskInput, { Masks } from "react-native-mask-input";
import { handleOnlyNumbersInput } from "@/utils/numeric-input-handler";
import { colors } from "@/constants/colors";
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
              mask={Masks.BRL_CURRENCY}
              keyboardType="number-pad"
              placeholder="R$ 0,00"
              placeholderTextColor={colors["gray-medium"]}
              onChangeText={(_, unmasked) => {
                handleOnlyNumbersInput(unmasked ?? "", onChange, true);
              }}
              className="rounded-lg border border-transparent bg-gray-light px-4 py-3 font-body text-lg text-black focus:border-red-normal"
              {...rest}
            />
          </View>
        );
      }}
    />
  );
}
