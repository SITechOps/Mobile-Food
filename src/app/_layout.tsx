import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Loading } from "../components/loading";
import {
  Dosis_400Regular,
  Dosis_600SemiBold,
  Dosis_500Medium,
  Dosis_700Bold,
  useFonts,
} from "@expo-google-fonts/dosis";

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
    <SafeAreaView className="flex-1">
      <StatusBar hidden={false} />
      <View className="absolute bottom-0 left-0 top-0 w-1/2 rounded-r-full bg-[#fdedee]" />
      <Slot />
    </SafeAreaView>
  );
}
