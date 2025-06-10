import { useState } from "react";
import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Dosis_400Regular,
  Dosis_600SemiBold,
  Dosis_500Medium,
  Dosis_700Bold,
  useFonts
} from "@expo-google-fonts/dosis";
import { Slot } from "expo-router";

import { SplashScreen } from "@/components/splash-screen";
import { Loading } from "@/components/loading";
import "../../global.css";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Dosis_400Regular,
    Dosis_500Medium,
    Dosis_600SemiBold,
    Dosis_700Bold
  });
  const [showSplash, setShowSplash] = useState(true);

  if (!fontsLoaded) {
    return <Loading />;
  }

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar hidden={false} />
      <View className="absolute bottom-2 left-0 top-6 w-1/2 rounded-r-full bg-red-light" />
      <View className="mx-8 flex-1">
        <Slot />
      </View>
    </SafeAreaView>
  );
}
