import { ComponentProps } from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

interface IconProps {
  name: ComponentProps<typeof Feather>["name"];
  onPress?: () => void;
}

export function Icon({ name, onPress }: IconProps) {
  return (
    <TouchableOpacity className="px-2 py-4" onPress={onPress}>
      <Feather
        name={name}
        color={name == "edit" ? "#a9a9a9" : "#ee7b83"}
        size={25}
      />
    </TouchableOpacity>
  );
}
