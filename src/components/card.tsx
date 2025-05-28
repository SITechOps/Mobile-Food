import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { ProductProps } from "../interfaces/IProduct";
import { Icon } from "./icon";
import { useProductStore } from "../store/produtoStore";

interface CardProps {
  product: ProductProps;
}

export function Card({ product }: CardProps) {
  const { removeProduct } = useProductStore();

  return (
    <View className="flex-row items-center justify-between rounded-lg border border-[#a9a9a9] bg-white px-6 py-4">
      <View className="flex-row items-center gap-6">
        <Image
          source={{
            uri: "https://cloudfront-us-east-1.images.arcpublishing.com/estadao/77XTHHCCLBEXLC2Y5RK4PN37CE.jpg",
          }}
          className="size-14 rounded-lg"
        />
        <View>
          <Text className="font-heading text-2xl">{product.name}</Text>
          <Text className="font-body text-xl">
            R$ {parseFloat(product.price).toFixed(2)}
          </Text>
        </View>
      </View>
      <View className="flex-row items-center gap-2">
        <Icon name="edit" />
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
    </View>
  );
}
