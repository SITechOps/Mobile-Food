import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { tv } from "tailwind-variants";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type: "filled" | "outlined" | "plain";
  className?: string;
};

const button = tv({
  slots: {
    view: "w-full rounded-xl flex-row items-center justify-center gap-4",
    text: "text-center text-xl",
  },
  variants: {
    type: {
      filled: {
        view: "bg-[#ee4c58] p-3",
        text: "font-heading text-white",
      },
      outlined: {
        view: "border border-[#ee4c58] bg-white p-2",
        text: "text-[#ee4c58] font-medium",
      },
      plain: {
        view: "py-1 px-6 w-fit m-auto",
        text: "font-body",
      },
    },
  },
  defaultVariants: {
    type: "filled",
  },
});

export function Button({ title, type, className, ...rest }: ButtonProps) {
  const { view, text } = button({ type });
  return (
    <TouchableOpacity activeOpacity={0.7} className={view()} {...rest}>
      {title == "Adicionar" && (
        <Feather name="plus-circle" size={24} color="white" />
      )}
      <Text className={text({ className })}>{title}</Text>
    </TouchableOpacity>
  );
}
