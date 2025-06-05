import { router } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ActionIcons } from "./action-icons";
import { ProductProps } from "../interfaces/IProduct";

interface CardProps {
  product: ProductProps;
}

export function Card({ product }: CardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => router.push(`/product/${product.id}`)}
      className="flex-row items-center justify-between rounded-xl border border-gray-medium bg-white px-5 py-4"
    >
      <View className="flex-1 flex-row items-center gap-4">
        <Image
          source={{
            uri: product.imageUrl,
          }}
          className="size-14 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-heading text-2xl">{product.name}</Text>
          <Text className="font-body text-xl">
            R$ {parseFloat(product.price).toFixed(2)}
          </Text>
        </View>
      </View>
      <ActionIcons productId={product.id} />
    </TouchableOpacity>
  );
}
