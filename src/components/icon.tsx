import { ComponentProps } from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type IconName = ComponentProps<typeof Feather>["name"];
type IconProps = TouchableOpacityProps & {
  name: IconName;
  color: string;
};

export function Icon({ name, color, ...rest }: IconProps) {
  return (
    <TouchableOpacity {...rest}>
      <Feather name={name} color={color} size={25} />
    </TouchableOpacity>
  );
}
