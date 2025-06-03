import { Image, Text, View } from "react-native";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <View className="mx-6 mb-8 flex-row items-center border-b-2 border-[#ee4c58] pb-6 pt-8">
      <Image
        className="ml-2 h-16 w-36"
        style={{ resizeMode: "contain" }}
        source={require("@/assets/images/logo_techops.png")}
      />
      <Text className="flex-1 flex-wrap text-center font-heading text-2xl">
        {title}
      </Text>
    </View>
  );
}
