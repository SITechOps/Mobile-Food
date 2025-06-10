import { ComponentProps } from "react";
import { Text, View } from "react-native";

import { Feather } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { Icon } from "./icon";

type InfoTagProps = {
  color: keyof typeof colors;
  icon: ComponentProps<typeof Feather>["name"];
  children: React.ReactNode;
};

export function InfoTag({ color, icon, children }: InfoTagProps) {
  return (
    <View className="flex-row items-center gap-2">
      <Icon name={icon} color={color} small />
      <Text style={{ color: colors[color] }} className={"font-heading text-xl"}>
        {children}
      </Text>
    </View>
  );
}
