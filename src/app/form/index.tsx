import { useProductStore } from "@/src/store/produtoStore";
import { useState } from "react";
import { ScrollView, TextInput, Text, TouchableOpacity } from "react-native";

export default function Form() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { addProducts } = useProductStore();
  return (
    <ScrollView className="m-auto w-3/4">
      <Text>Nome:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Digite o nome do produto..."
      />
      <Text>Preço:</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="Digite o preço do produto..."
        keyboardType="number-pad"
      />
      <TouchableOpacity
        className="mx-auto mt-4 w-1/2 rounded-lg bg-slate-700"
        onPress={() => {
          addProducts({ id: Date.now(), name, price: Number(price) });
          console.log(name, price);
        }}
      >
        <Text className="p-4 text-center text-white">Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
