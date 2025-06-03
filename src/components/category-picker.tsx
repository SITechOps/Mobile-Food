import { Text, TouchableOpacity, View } from "react-native";
import { Controller, Control } from "react-hook-form";
import { Dropdown } from "react-native-element-dropdown";
import { ProductFormData } from "../interfaces/IProduct";

interface CategoryPickerProps {
  control: Control<ProductFormData>;
}

const CATEGORIES = [
  { label: "Bebidas", value: "Bebidas" },
  { label: "Lanches", value: "Lanches" },
  { label: "Sobremesas", value: "Sobremesas" },
  { label: "Massas", value: "Massas" },
  { label: "Vegetariana", value: "Vegetariana" },
];

export function CategoryPicker({ control }: CategoryPickerProps) {
  return (
    <Controller
      control={control}
      name="category"
      rules={{ required: true }}
      render={({ field: { value, onChange } }) => (
        <View className="gap-2">
          <Text className="font-heading text-xl">Categoria:</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            className="rounded-lg border border-transparent bg-[#f1f1f1] px-4"
          >
            <Dropdown
              data={CATEGORIES}
              labelField="label"
              valueField="value"
              placeholder="Selecione uma categoria..."
              value={value}
              onChange={(item) => onChange(item.value)}
              style={{
                height: 48,
              }}
              placeholderStyle={{
                color: "#676767",
                fontFamily: "Dosis_400Regular",
              }}
              selectedTextStyle={{
                color: "#222",
                fontFamily: "Dosis_400Regular",
              }}
              itemTextStyle={{
                fontFamily: "Dosis_400Regular",
              }}
              containerStyle={{
                borderRadius: 8,
              }}
              iconStyle={{ tintColor: "#ee4c58" }}
              activeColor="#fdedee"
              mode="modal"
              backgroundColor="rgba(0,0,0,0.5)"
            />
          </TouchableOpacity>
        </View>
      )}
    />
  );
}
