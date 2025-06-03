import { Text } from "react-native";

interface BadgeProps {
  color: string;
  children: React.ReactNode;
}

export function Badge({ color, children }: BadgeProps) {
  return (
    <Text
      style={{
        backgroundColor: color,
      }}
      className={`w-32 rounded-full py-2 text-center font-highlight text-lg text-white`}
    >
      {children}
    </Text>
  );
}
