import { router } from "expo-router";
import { View } from "react-native";
import { Icon } from "./icon";
import { useProductActions } from "../hooks/use-product-actions";
import { twMerge } from "tailwind-merge";
import { colors } from "../constants/colors";

interface ActionIconsProps {
  productId: string | undefined;
  className?: string;
}
export function ActionIcons({ productId, className }: ActionIconsProps) {
  const { handleDeleteProduct } = useProductActions();
  return (
    <View className={twMerge("-mr-2 flex-row items-center", className)}>
      <Icon
        className="px-2 py-4"
        name="edit"
        color={colors["gray-medium"]}
        onPress={() => {
          router.push(`/form?id=${productId}`);
        }}
      />
      <Icon
        className="px-2 py-4"
        name="trash-2"
        color={colors["red-normal"]}
        onPress={() => handleDeleteProduct(productId)}
      />
    </View>
  );
}
