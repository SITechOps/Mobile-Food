import { Image, View, Text } from "react-native";
import { ActionIcons } from "@/src/components/action-icons";
import { Badge } from "@/src/components/badge";
import { Header } from "@/src/components/header";
import { TopicLabel } from "@/src/components/topic-label";
import { useProductActions } from "@/src/hooks/use-product-actions";
import { Button } from "@/src/components/button";
import { router } from "expo-router";

export default function ProductDetails() {
  const { product } = useProductActions();
  return (
    <>
      <Header title="Detalhes do Produto" />
      <View className="mx-10 rounded-xl bg-white px-8 py-8 shadow-xl shadow-[#a9a9a9]">
        <ActionIcons productId={product!.id} className="-mt-5 ml-auto" />
        <View className="-mt-3 mb-3 items-center">
          <Image
            source={{
              uri: product?.imageUrl,
            }}
            className="mb-4 size-32 rounded-full"
          />
          <Text className="font-heading text-3xl">{product?.name}</Text>
          <Text className="font-heading text-2xl leading-10 text-[#ee4c58]">
            R$ {product?.price}
          </Text>
          <View className="mt-3 h-0.5 w-full bg-[#a9a9a9]"></View>
        </View>

        <View className="flex-row justify-between">
          <View>
            <TopicLabel color="#ee4c58" label="Categoria" />
            <Badge color="#ee4c58">{product?.category}</Badge>
          </View>
          <View>
            {product?.stock == "0" ? (
              <>
                <TopicLabel color="#a9a9a9" label="Estoque" />
                <Badge color="#a9a9a9">Indisponível</Badge>
              </>
            ) : (
              <>
                <TopicLabel color="#28d1b4" label="Estoque" />
                <Badge color="#28d1b4">
                  {product?.stock}{" "}
                  {product?.stock == "1" ? "unidade" : "unidades"}
                </Badge>
              </>
            )}
          </View>
        </View>

        <View className="mb-6 mt-3">
          <TopicLabel color="#ee4c58" label="Descrição" />
          <Text className="text-justify font-body text-lg leading-6">
            {product?.description}
          </Text>
        </View>

        <Button title="Voltar" type="outlined" onPress={() => router.back()} />
      </View>
    </>
  );
}
