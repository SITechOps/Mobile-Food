import { router } from "expo-router";
import { Image, View, Text } from "react-native";
import { Badge } from "@/src/components/badge";
import { Header } from "@/src/components/header";
import { LinkButton } from "@/src/components/link-button";
import { TopicLabel } from "@/src/components/topic-label";
import { Icon } from "@/src/components/icon";
import { useProductActions } from "@/src/hooks/use-product-actions";

export default function ProductDetails() {
  const { product, handleDeleteProduct } = useProductActions();
  return (
    <>
      <Header title="Detalhes do Produto" />
      <View className="mx-10 rounded-xl bg-white px-8 py-8 shadow-xl shadow-[#a9a9a9]">
        <View className="-mr-4 ml-auto flex-row gap-1 text-end">
          <Icon
            className="px-2 pb-4"
            name="edit"
            color="#a9a9a9"
            onPress={() => {
              router.push(`/form/edit-product?id=${product!.id}`);
            }}
          />
          <Icon
            className="px-2 pb-4"
            name="trash-2"
            color="#ee7b83"
            onPress={() => handleDeleteProduct(product!.id)}
          />
        </View>
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

        <LinkButton href="/" title="Voltar" outlined />
      </View>
    </>
  );
}
