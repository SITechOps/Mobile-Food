import { ScrollView, Text, TouchableOpacity, View } from "react-native";
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
      <View className="m-auto my-4 w-4/5 flex-1 items-center justify-center">
        {products.length == 0 ? (
          <View className="flex-1 items-center justify-center">
            <Text className="font-heading text-2xl">
              Não há produtos na lista!
            </Text>
          </View>
        ) : (
          <ScrollView className="mt-8 w-full">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </ScrollView>
        )}
        <Button onPress={() => router.push("/form")} />
      </View>
    </>
  );
}
