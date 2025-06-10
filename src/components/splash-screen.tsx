import { Animated } from "react-native";
import { useEffect, useRef } from "react";
import { animateScale } from "@/utils/animate-scale";

type SplashScreenProps = {
  onFinish?: () => void;
};

export function SplashScreen({ onFinish }: SplashScreenProps) {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const sequence = animateScale(scale, [1.4, 1, 1.5, 1, 1.6], 800);
    Animated.sequence(sequence).start(() => {
      onFinish && onFinish();
    });
  }, []);

  return (
    <Animated.View className="flex-1 items-center justify-center bg-red-normal">
      <Animated.Image
        source={require("@/assets/images/logo_techops_branca.png")}
        className="h-52"
        style={{ transform: [{ scale }] }}
        resizeMode="contain"
      />
    </Animated.View>
  );
}
