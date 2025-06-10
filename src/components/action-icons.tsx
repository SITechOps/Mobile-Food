import { TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { twMerge } from "tailwind-merge";

import { useProductActions } from "@/hooks/use-product-actions";
import { Icon } from "./icon";

type ActionIconsProps = {
  productId: string | undefined;
  className?: string;
};

export function ActionIcons({ productId, className }: ActionIconsProps) {
  const { handleDeleteProduct } = useProductActions();
  return (
    <View className={twMerge("-mr-2 flex-row items-center", className)}>
      <TouchableOpacity
        className="px-2 py-4"
        onPress={() => {
          router.push(`/form?id=${productId}`);
        }}
      >
        <Icon name="edit" color="gray-medium" />
      </TouchableOpacity>
      <TouchableOpacity
        className="px-2 py-4"
        onPress={() => handleDeleteProduct(productId)}
      >
        <Icon name="trash-2" color="red-normal" />
      </TouchableOpacity>
    </View>
  );
}
