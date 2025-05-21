import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import "@/global.css";
import { useProductStore } from "../store/produtoStore";
import { useRouter } from "expo-router";

export default function App() {
  const { products } = useProductStore();
  const router = useRouter();

  return (
    <View className="m-auto w-3/5 flex-1 items-center justify-center">
      {products.length == 0 && <Text>Não há produtos na lista!</Text>}

      <ScrollView className="mb-4 w-full">
        {products.map((produto) => (
          <View key={produto.id}>
            <Text className="font-body text-4xl">{produto.name}</Text>
            <Text className="font-body text-4xl">
              R$ {produto.price.toFixed(2)}
            </Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        className="w-full rounded-lg bg-slate-700 p-4"
        onPress={() => router.push("/form")}
      >
        <Text className="text-white">Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
