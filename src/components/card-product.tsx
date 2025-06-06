import { router } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ActionIcons } from "./action-icons";
import { ProductProps } from "../interfaces/IProduct";

export function Card({ id, name, price, imageUrl }: ProductProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => router.push(`/product/${id}`)}
      className="flex-row items-center justify-between rounded-xl border border-gray-medium bg-white px-5 py-4"
    >
      <View className="flex-1 flex-row items-center gap-4">
        <Image
          source={{
            uri: imageUrl,
          }}
          className="size-14 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-heading text-2xl">{name}</Text>
          <Text className="font-body text-xl">
            R$ {(price ?? 0).toFixed(2)}
          </Text>
        </View>
      </View>
      <ActionIcons productId={id} />
    </TouchableOpacity>
  );
}
