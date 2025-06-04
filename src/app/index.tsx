import "@/global.css";
import { FlatList, Text, View } from "react-native";
import { router } from "expo-router";
import { Button } from "../components/button";
import { Card } from "../components/card-product";
import { Header } from "../components/header";
import { useProductStore } from "../store/productStore";

export default function App() {
  const { products } = useProductStore();
  return (
    <>
      <Header title="Mobile Food" />
      <View className="mx-8 flex-1 items-center justify-center">
        {products.length === 0 ? (
          <View className="flex-1 items-center justify-center">
            <Text className="font-heading text-2xl">
              Não há produtos na lista!
            </Text>
          </View>
        ) : (
          <FlatList
            className="mb-8 w-full gap-6"
            data={products}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <Card product={item} />}
            contentContainerStyle={{ gap: 16 }}
            showsVerticalScrollIndicator={false}
          />
        )}
        <Button
          title="Adicionar"
          type="filled"
          className="text-2xl"
          onPress={() => router.push("/form/add-product")}
        />
      </View>
    </>
  );
}
