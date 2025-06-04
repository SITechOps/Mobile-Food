import "@/global.css";
import React, { useState, useRef } from "react";
import {
  FlatList,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { router } from "expo-router";
import { Button } from "../components/button";
import { Card } from "../components/card-product";
import { Header } from "../components/header";
import { useProductStore } from "../store/productStore";
import { Feather } from "@expo/vector-icons";

export default function App() {
  const { products } = useProductStore();
  const [search, setSearch] = useState("");
  const inputRef = useRef<TextInput>(null);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Header title="Mobile Food" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View className="mx-8 flex-1 items-center justify-center">
          {products.length === 0 ? (
            <View className="flex-1 items-center justify-center">
              <Text className="font-heading text-2xl">
                Não há produtos na lista!
              </Text>
            </View>
          ) : (
            <>
              <View className="mb-8 w-full flex-row items-center gap-6">
                <View className="flex-1 flex-row items-center rounded-full border border-[#ee4c58] pl-4">
                  <Feather
                    name="search"
                    size={18}
                    color="#ee4c58"
                    onPress={() => inputRef.current?.focus()}
                  />
                  <TextInput
                    ref={inputRef}
                    placeholder="Buscar..."
                    value={search}
                    onChangeText={setSearch}
                    className="ml-2 w-full py-2 font-body text-xl"
                  />
                </View>
                <Text className="mr-1 font-heading text-xl">
                  Total: {filteredProducts.length}
                </Text>
              </View>
              {filteredProducts.length === 0 ? (
                <View className="flex-1 items-center justify-center">
                  <Text className="font-heading text-xl">
                    Nenhum resultado encontrado!
                  </Text>
                </View>
              ) : (
                <FlatList
                  className="mb-8 w-full gap-6"
                  data={filteredProducts}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => <Card product={item} />}
                  contentContainerStyle={{ gap: 16 }}
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
            onPress={() => router.push("/form/add-product")}
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
