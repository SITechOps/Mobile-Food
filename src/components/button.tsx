import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

export function Button({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      className="w-full flex-row items-center justify-center gap-4 rounded-xl bg-[#ee4c58] p-3"
      {...rest}
    >
      <Feather name="plus-circle" color={"white"} size={24} />
      <Text className="text-center font-heading text-2xl text-white">
        Adicionar
      </Text>
    </TouchableOpacity>
  );
}
