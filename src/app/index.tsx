import "@/global.css";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Button } from "../components/button";
import { Card } from "../components/card-product";
import { Header } from "../components/header";
import { SearchBar } from "../components/search-bar";
import { useKeyboard } from "../hooks/use-keyboard";
import { useProductStore } from "../store/product-store";

export default function App() {
  const { products } = useProductStore();
  const [search, setSearch] = useState("");
  const { isKeyboardVisible } = useKeyboard();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header title="Mobile Food" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View className="mx-8 flex-1 items-center">
          {products.length === 0 ? (
            <View className="flex-1 items-center justify-center">
              <Text className="font-heading text-2xl">
                Não há produtos na lista!
              </Text>
            </View>
          ) : (
            <>
              <View className="w-full flex-row items-center gap-6">
                <SearchBar value={search} onChangeText={setSearch} />
                <Text className="mr-1 font-heading text-xl">
                  Total: {filteredProducts.length}
                </Text>
              </View>
              {filteredProducts.length === 0 ? (
                <View
                  className={`${isKeyboardVisible ? "mt-24 flex-1 items-start justify-start" : "flex-1 items-center justify-center"}`}
                >
                  <Text className="font-heading text-2xl">
                    Nenhum resultado encontrado!
                  </Text>
                </View>
              ) : (
                <FlatList
                  className="mb-8 w-full gap-6"
                  data={filteredProducts}
                  keyExtractor={(item) => item.id || item.name}
                  renderItem={({ item }) => <Card {...item} />}
                  contentContainerStyle={{ gap: 16, paddingTop: 24 }}
                  showsVerticalScrollIndicator={false}
                  keyboardShouldPersistTaps="handled"
                />
              )}
            </>
          )}
          <Button
            title="Adicionar"
            type="filled"
            className="text-2xl"
            onPress={() => router.push("/form")}
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
