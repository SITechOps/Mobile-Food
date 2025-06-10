import { Animated } from "react-native";

export function animateScale(
  scale: Animated.Value,
  values: number[],
  duration: number
) {
  return values.map((toValue) =>
    Animated.timing(scale, {
      toValue,
      duration,
      useNativeDriver: true
    })
  );
}
