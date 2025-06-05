import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { colors } from "../constants/colors";

interface UploadImageProps {
  value: string | null;
  onChange: (uri: string | null) => void;
}

export function UploadImage({ value, onChange }: UploadImageProps) {
  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
    });

    if (!result.canceled) {
      onChange(result.assets[0].uri);
    }
  }

  function removeImage() {
    onChange(null);
  }

  return (
    <View className="gap-3">
      <Text className="font-heading text-xl">Imagem do Produto:</Text>
      {!value ? (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={pickImage}
          className="items-center rounded-xl border-2 border-dashed border-gray-300 p-8"
        >
          <View className="mb-3 size-12 items-center justify-center rounded-full bg-gray-100">
            <Feather name="upload" size={20} color={colors["gray-medium"]} />
          </View>
          <Text className="font-medium text-gray-600">
            Clique para fazer upload
          </Text>
          <Text className="font-body text-gray-medium">PNG, JPG até 5MB</Text>
        </TouchableOpacity>
      ) : (
        <View>
          <Image
            source={{ uri: value }}
            className="h-48 w-full rounded-xl"
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={removeImage}
            className="absolute right-2 top-2 h-8 w-8 items-center justify-center rounded-full bg-red-normal"
          >
            <Feather name="x" size={18} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
