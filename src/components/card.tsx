import { View, Text, Image, TouchableOpacity } from "react-native";
import { ProductProps } from "../interfaces/IProduct";
import { Feather } from "@expo/vector-icons";

interface CardProps {
  product: ProductProps;
}

export function Card({ product }: CardProps) {
  return (
    <View className="flex-row items-center gap-4 rounded-lg bg-slate-200 p-4">
      <Image
        source={{
          uri: "https://cloudfront-us-east-1.images.arcpublishing.com/estadao/77XTHHCCLBEXLC2Y5RK4PN37CE.jpg",
        }}
        className="size-12 rounded-lg"
      />
      <View>
        <Text className="font-heading text-2xl">{product.name}</Text>
        <Text className="font-body text-xl">
          R$ {parseFloat(product.price).toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity className="ml-4">
        <Feather name="trash-2" color={"#ee7b83"} size={24} />
      </TouchableOpacity>
    </View>
  );
}
