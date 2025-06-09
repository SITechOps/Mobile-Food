import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import {
  Dosis_400Regular,
  Dosis_600SemiBold,
  Dosis_500Medium,
  Dosis_700Bold,
  useFonts,
} from "@expo-google-fonts/dosis";
import { Loading } from "../components/loading";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Dosis_400Regular,
    Dosis_500Medium,
    Dosis_600SemiBold,
    Dosis_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar hidden={false} />
      <View className="absolute bottom-2 left-0 top-6 w-1/2 rounded-r-full bg-red-light" />
      <Slot />
    </SafeAreaView>
  );
}
