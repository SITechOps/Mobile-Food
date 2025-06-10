import { Image, Text, TouchableOpacity, View } from "react-native";
import { launchImageLibraryAsync } from "expo-image-picker";
import { Icon } from "./icon";

type UploadImageProps = {
  value: string | null;
  onChange: (uri: string | null) => void;
};

export function UploadImage({ value, onChange }: UploadImageProps) {
  async function pickImage() {
    const result = await launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1
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
            <Icon name="upload" color="gray-medium" small />
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
            <Icon name="x" color="white" small />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
