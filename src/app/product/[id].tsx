import { router } from "expo-router";
import { Image, View, Text } from "react-native";
import { ActionIcons } from "@/src/components/action-icons";
import { Button } from "@/src/components/button";
import { Header } from "@/src/components/header";
import { InfoTag } from "@/src/components/info-tag";
import { useProductActions } from "@/src/hooks/use-product-actions";
import { colors } from "@/src/constants/colors";

export default function ProductDetails() {
  const { product } = useProductActions();
  return (
    <>
      <Header title="Detalhes do Produto" />
      <View className="mx-10 rounded-xl bg-white px-8 py-8 shadow-xl shadow-gray-medium">
        <ActionIcons productId={product?.id} className="-mt-5 ml-auto" />
        <View className="-mt-3 mb-3 items-center">
          <Image
            source={{
              uri: product?.imageUrl,
            }}
            className="mb-4 size-32 rounded-full"
          />
          <Text className="font-heading text-3xl leading-snug">
            {product?.name}
          </Text>
          <Text className="font-heading text-2xl leading-10 text-red-normal">
            R$ {(product?.price ?? 0).toFixed(2)}
          </Text>
        </View>

        <View className="mt-1 flex-row justify-between border-y border-gray-medium py-4">
          <InfoTag color={colors["red-normal"]} icon="tag">
            {product?.category}
          </InfoTag>
          <InfoTag color={colors["gray-dark"]} icon="box">
            {product?.stock == 0
              ? "Indisponível"
              : `Disponível: ${product?.stock}`}
          </InfoTag>
        </View>

        <View className="mb-6 mt-3">
          <Text className="font-heading text-xl leading-10">Descrição: </Text>
          <Text className="text-justify font-body text-lg leading-6">
            {product?.description}
          </Text>
        </View>

        <Button title="Voltar" type="outlined" onPress={() => router.back()} />
      </View>
    </>
  );
}
