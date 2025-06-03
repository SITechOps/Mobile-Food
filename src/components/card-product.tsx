import { router } from "expo-router";
import { View, Text, Image, Alert, TouchableOpacity } from "react-native";
import { useProductStore } from "../store/productStore";
import { ProductProps } from "../interfaces/IProduct";
import { Icon } from "./icon";

interface CardProps {
  product: ProductProps;
}

export function Card({ product }: CardProps) {
  const { removeProduct } = useProductStore();

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
          name="edit"
          onPress={() => {
            router.push(`/form/edit-product?id=${product.id}`);
          }}
        />
        <Icon
          name="trash-2"
          onPress={() => {
            Alert.alert(
              "Confirmar remoção",
              "Você deseja excluir esse produto?",
              [
                {
                  text: "Cancelar",
                },
                {
                  text: "Excluir",
                  style: "destructive",
                  onPress: () => removeProduct(product.id),
                },
              ],
            );
          }}
        />
      </View>
    </TouchableOpacity>
  );
}
