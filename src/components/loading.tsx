import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View className="flex-1 justify-center">
      <ActivityIndicator size="large" color="black" />
    </View>
  );
}
