import { FlatList, Text, View } from "react-native";
import "@/global.css";
import { useProductStore } from "../store/produtoStore";
import { Header } from "../components/header";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { router } from "expo-router";

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
            contentContainerStyle={{ paddingTop: 24, gap: 16 }}
            showsVerticalScrollIndicator={false}
          />
        )}
        <Button onPress={() => router.push("/form")} />
      </View>
    </>
  );
}
