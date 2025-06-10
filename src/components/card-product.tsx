import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

import { ProductProps } from "@/interfaces/product-props";
import { formatCurrency } from "@/utils/format-currency";
import { ActionIcons } from "./action-icons";

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
            uri: imageUrl
          }}
          className="size-14 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-heading text-2xl">{name}</Text>
          <Text className="font-body text-xl">
            {formatCurrency(price || 0)}
          </Text>
        </View>
      </View>
      <ActionIcons productId={id} />
    </TouchableOpacity>
  );
}
