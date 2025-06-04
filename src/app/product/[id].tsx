import { router } from "expo-router";
import { Image, View, Text } from "react-native";
import { ActionIcons } from "@/src/components/action-icons";
import { Button } from "@/src/components/button";
import { Header } from "@/src/components/header";
import { InfoTag } from "@/src/components/info-tag";
import { useProductActions } from "@/src/hooks/use-product-actions";

export default function ProductDetails() {
  const { product } = useProductActions();
  return (
    <>
      <Header title="Detalhes do Produto" />
      <View className="mx-10 rounded-xl bg-white px-8 py-8 shadow-xl shadow-[#a9a9a9]">
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
          <Text className="font-heading text-2xl leading-10 text-[#ee4c58]">
            R$ {product?.price ? parseFloat(product.price).toFixed(2) : "0.00"}
          </Text>
        </View>

        <View className="mt-1 flex-row justify-between border-y border-[#a9a9a9] py-4">
          <InfoTag color="#ee4c58" icon="tag">
            {product?.category}
          </InfoTag>
          <InfoTag color="#808080" icon="box">
            {product?.stock == "0"
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
