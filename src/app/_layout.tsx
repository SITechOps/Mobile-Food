import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { View } from "react-native";
import Loading from "../components/loading";
import {
  Dosis_400Regular,
  Dosis_600SemiBold,
  Dosis_700Bold,
  useFonts,
} from "@expo-google-fonts/dosis";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Dosis_400Regular,
    Dosis_600SemiBold,
    Dosis_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="absolute bottom-4 left-0 top-7 w-3/5 rounded-r-full bg-[#fdedee]" />
      <Slot />
    </SafeAreaView>
  );
}
