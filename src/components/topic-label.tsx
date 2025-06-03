import { View, Text } from "react-native";

interface TopicLabelProps {
  color: string;
  label: string;
}
export function TopicLabel({ color, label }: TopicLabelProps) {
  return (
    <View className="flex-row items-center gap-3">
      <View
        style={{ backgroundColor: color }}
        className={"size-2 rounded-full"}
      />
      <Text className="font-heading text-xl leading-10">{label}:</Text>
    </View>
  );
}
