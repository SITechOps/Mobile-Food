import { Text } from "react-native";

interface BadgeProps {
  color: string;
  children: React.ReactNode;
}

export function Badge({ color, children }: BadgeProps) {
  return (
    <Text
      className={`w-32 rounded-full bg-[${color}] py-2 text-center font-highlight text-lg tracking-wide text-white`}
    >
      {children}
    </Text>
  );
}
