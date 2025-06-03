import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  type: "add" | "save";
};

export function Button({ type, ...rest }: ButtonProps) {
  const isAdd = type === "add";

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="mt-4 w-full flex-row items-center justify-center gap-3 rounded-xl bg-[#ee4c58] p-3"
      {...rest}
    >
      {isAdd && <Feather name="plus-circle" size={24} color="white" />}
      <Text className="font-heading text-2xl text-white">
        {isAdd ? "Adicionar" : "Salvar"}
      </Text>
    </TouchableOpacity>
  );
}
