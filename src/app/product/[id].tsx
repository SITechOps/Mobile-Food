import { Image, Text, View } from "react-native";
import { router } from "expo-router";

import { ActionIcons } from "@/components/action-icons";
import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { InfoTag } from "@/components/info-tag";

import { useProductActions } from "@/hooks/use-product-actions";
import { formatCurrency } from "@/utils/format-currency";

export default function ProductDetails() {
  const { product } = useProductActions();
  return (
    <>
      <Header title="Detalhes do Produto" />
      <View className="mx-2 rounded-xl bg-white px-8 py-8 shadow-xl shadow-gray-medium">
        <ActionIcons productId={product?.id} className="-mt-5 ml-auto" />
        <View className="-mt-3 mb-3 items-center">
          <Image
            source={{
              uri: product?.imageUrl
            }}
            className="mb-4 size-32 rounded-full"
          />
          <Text className="font-heading text-3xl leading-snug">
            {product?.name}
          </Text>
          <Text className="font-heading text-2xl leading-10 text-red-normal">
            {formatCurrency(product?.price || 0)}
          </Text>
        </View>

        <View className="mt-1 flex-row justify-between border-y border-gray-medium py-4">
          <InfoTag color="red-normal" icon="tag">
            {product?.category}
          </InfoTag>
          <InfoTag color="gray-dark" icon="box">
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
