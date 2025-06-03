import { Link, LinkProps } from "expo-router";
import { Pressable, Text } from "react-native";
import { tv } from "tailwind-variants";

type LinkButtonProps = LinkProps & {
  outlined?: boolean;
};

const button = tv({
  base: "m-auto px-8",
  variants: {
    outlined: {
      true: "w-full rounded-xl border border-[#ee4c58] bg-white py-2",
      false: "",
    },
  },
});

const text = tv({
  base: "text-center font-body text-xl",
  variants: {
    outlined: {
      true: "font-heading text-[#ee4c58]",
      false: "",
    },
    pressed: {
      true: "opacity-50",
      false: "opacity-100",
    },
  },
});

export function LinkButton({ outlined, ...rest }: LinkButtonProps) {
  return (
    <Link {...rest} asChild>
      <Pressable className={button({ outlined })}>
        {({ pressed }) => (
          <Text className={text({ outlined, pressed })}>Voltar</Text>
        )}
      </Pressable>
    </Link>
  );
}
