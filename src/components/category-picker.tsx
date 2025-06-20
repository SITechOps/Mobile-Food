import { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Control, Controller } from "react-hook-form";

import { ProductProps } from "@/interfaces/product-props";
import { colors } from "@/constants/colors";

type CategoryPickerProps = {
  control: Control<ProductProps>;
};

const availableOptions = [
  "Bebidas",
  "Lanches",
  "Sobremesas",
  "Massas",
  "Vegetariana",
  "Grãos"
];

const CATEGORIES = availableOptions.map((item) => ({
  label: item,
  value: item
}));

export function CategoryPicker({ control }: CategoryPickerProps) {
  return (
    <Controller
      control={control}
      name="category"
      rules={{ required: true }}
      render={({ field: { value, onChange } }) => {
        const dropdownRef = useRef<any>(null);

        const handlePress = () => {
          dropdownRef.current?.open();
        };

        return (
          <View className="gap-2">
            <Text className="font-heading text-xl">Categoria:</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              className="rounded-lg border border-transparent bg-gray-light px-4"
              onPress={handlePress}
            >
              <Dropdown
                ref={dropdownRef}
                data={CATEGORIES}
                labelField="label"
                valueField="value"
                placeholder="Selecione uma categoria..."
                value={value}
                onChange={(item) => onChange(item.value)}
                style={{
                  height: 48
                }}
                placeholderStyle={{
                  fontFamily: "Dosis_400Regular",
                  color: colors["gray-medium"]
                }}
                selectedTextStyle={{
                  fontFamily: "Dosis_400Regular"
                }}
                itemTextStyle={{
                  fontFamily: "Dosis_400Regular"
                }}
                containerStyle={{
                  borderRadius: 8
                }}
                iconStyle={{ tintColor: colors["red-normal"] }}
                activeColor={colors["red-light"]}
                mode="modal"
                backgroundColor="rgba(0,0,0,0.5)"
              />
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
}
