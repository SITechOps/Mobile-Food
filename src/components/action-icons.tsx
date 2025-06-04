import { router } from "expo-router";
import { View } from "react-native";
import { Icon } from "./icon";
import { useProductActions } from "../hooks/use-product-actions";
import { twMerge } from "tailwind-merge";

interface ActionIconsProps {
  productId: string;
  className?: string;
}
export function ActionIcons({ productId, className }: ActionIconsProps) {
  const { handleDeleteProduct } = useProductActions();
  return (
    <View className={twMerge("-mr-2 flex-row items-center", className)}>
      <Icon
        className="px-2 py-4"
        name="edit"
        color="#a9a9a9"
        onPress={() => {
          router.push(`/form/edit-product?id=${productId}`);
        }}
      />
      <Icon
        className="px-2 py-4"
        name="trash-2"
        color="#ee7b83"
        onPress={() => handleDeleteProduct(productId)}
      />
    </View>
  );
}
