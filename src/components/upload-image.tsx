import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

interface UploadImageProps {
  value: string | null;
  onChange: (uri: string | null) => void;
}

export function UploadImage({ value, onChange }: UploadImageProps) {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
    });

    if (!result.canceled) {
      onChange(result.assets[0].uri);
    }
  };

  const removeImage = () => {
    onChange(null);
  };

  return (
    <View className="gap-3">
      <Text className="font-heading text-xl text-gray-700">
        Imagem do Produto:
      </Text>
      {!value ? (
        <TouchableOpacity
          onPress={pickImage}
          className="items-center rounded-xl border-2 border-dashed border-gray-300 p-8 hover:border-red-400"
        >
          <View className="mb-3 h-12 w-12 items-center justify-center rounded-full bg-gray-100">
            <Ionicons name="cloud-upload-outline" size={24} color="#9ca3af" />
          </View>
          <Text className="font-medium text-gray-600">
            Clique para fazer upload
          </Text>
          <Text className="text-sm text-gray-400">PNG, JPG até 5MB</Text>
        </TouchableOpacity>
      ) : (
        <View className="relative overflow-hidden rounded-xl">
          <Image
            source={{ uri: value }}
            className="h-48 w-full rounded-xl"
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={removeImage}
            className="absolute right-2 top-2 h-8 w-8 items-center justify-center rounded-full bg-red-500 hover:bg-red-600"
          >
            <Ionicons name="close" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
