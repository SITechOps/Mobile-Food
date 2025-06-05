import { ComponentProps } from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text } from "react-native";

interface InfoTagProps {
  color: string;
  icon: ComponentProps<typeof Feather>["name"];
  children: React.ReactNode;
}
export function InfoTag({ color, icon, children }: InfoTagProps) {
  return (
    <View className="flex-row items-center gap-2">
      <Feather name={icon} size={18} color={color} />
      <Text style={{ color: color }} className={`font-heading text-xl`}>
        {children}
      </Text>
    </View>
  );
}
