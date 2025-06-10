import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { tv } from "tailwind-variants";
import { Icon } from "./icon";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type: "filled" | "outlined" | "plain";
  className?: string;
};

const button = tv({
  slots: {
    view: "w-full rounded-xl flex-row items-center justify-center gap-3",
    text: "text-center text-xl"
  },
  variants: {
    type: {
      filled: {
        view: "bg-red-normal p-3",
        text: "font-heading text-white"
      },
      outlined: {
        view: "border border-red-normal bg-white p-2",
        text: "text-red-normal font-medium"
      },
      plain: {
        view: "py-1 px-6 w-fit m-auto",
        text: "font-body"
      }
    }
  },
  defaultVariants: {
    type: "filled"
  }
});

export function Button({ title, type, className, ...rest }: ButtonProps) {
  const { view, text } = button({ type });
  return (
    <TouchableOpacity activeOpacity={0.7} className={view()} {...rest}>
      {title == "Adicionar" && <Icon name="plus-circle" color="white" />}
      <Text className={text({ className })}>{title}</Text>
    </TouchableOpacity>
  );
}
