import { useLocalSearchParams } from "expo-router";
import { Image, View, Text } from "react-native";
import { Badge } from "@/src/components/badge";
import { Header } from "@/src/components/header";
import { LinkButton } from "@/src/components/link-button";
import { TopicLabel } from "@/src/components/topic-label";
import { useProductStore } from "@/src/store/productStore";

export default function ProductDetails() {
  const { products } = useProductStore();
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  return (
    <>
      <Header title="Detalhes do Produto" />
      <View className="mx-10 rounded-xl bg-white px-8 py-8 shadow-xl shadow-[#a9a9a9]">
        <View className="mb-3 items-center">
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
          <View className="mt-4 h-0.5 w-full bg-[#a9a9a9]"></View>
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

        <View className="mt-3">
          <TopicLabel color="#ee4c58" label="Descrição" />
          <Text className="text-justify font-body text-lg leading-6">
            {product?.description}
          </Text>
        </View>

        <LinkButton className="mt-6" href="/" outlined />
      </View>
    </>
  );
}
