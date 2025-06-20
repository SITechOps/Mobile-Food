import { Image, Text, View } from "react-native";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <View className="mb-8 flex-row items-center border-b-2 border-red-normal py-5">
      <Image
        className="ml-2 h-16 w-36"
        style={{ resizeMode: "contain" }}
        source={require("@/assets/images/logo_techops_vermelha.png")}
      />
      <Text className="flex-1 flex-wrap text-center font-heading text-2xl">
        {title}
      </Text>
    </View>
  );
}
