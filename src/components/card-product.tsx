import { router } from "expo-router";
import { View, Text, Image, Alert, TouchableOpacity } from "react-native";
import { useProductStore } from "../store/productStore";
import { ProductProps } from "../interfaces/IProduct";
import { Icon } from "./icon";
import { useProductActions } from "../hooks/use-product-actions";

interface CardProps {
  product: ProductProps;
}

export function Card({ product }: CardProps) {
  const { handleDeleteProduct } = useProductActions();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => router.push(`/product/${product.id}`)}
      className="flex-row items-center justify-between rounded-lg border border-[#a9a9a9] bg-white px-5 py-4"
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
      <View className="-mr-2 flex-row items-center gap-1">
        <Icon
          className="px-2 py-4"
          name="edit"
          color="#a9a9a9"
          onPress={() => {
            router.push(`/form/edit-product?id=${product.id}`);
          }}
        />
        <Icon
          className="px-2 py-4"
          name="trash-2"
          color="#ee7b83"
          onPress={() => handleDeleteProduct(product.id)}
        />
      </View>
    </TouchableOpacity>
  );
}
