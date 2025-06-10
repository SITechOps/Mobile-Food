import { ComponentProps } from "react";
import { TouchableOpacityProps } from "react-native";

import { Feather } from "@expo/vector-icons";
import { colors } from "@/constants/colors";

type IconProps = TouchableOpacityProps & {
  name: ComponentProps<typeof Feather>["name"];
  color: keyof typeof colors;
  small?: boolean;
};

export function Icon({ name, color, small = false, ...rest }: IconProps) {
  return <Feather name={name} color={colors[color]} size={small ? 18 : 24} />;
}
