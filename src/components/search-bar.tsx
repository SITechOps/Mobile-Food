import { Feather } from "@expo/vector-icons";
import { View, TextInput } from "react-native";
import { useRef } from "react";
import { colors } from "../constants/colors";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

export function SearchBar({ value, onChangeText }: SearchBarProps) {
  const inputRef = useRef<TextInput>(null);

  return (
    <View className="border-red-normal flex-1 flex-row items-center rounded-full border">
      <Feather
        className="p-3"
        name="search"
        size={18}
        color={colors["red-normal"]}
        onPress={() => inputRef.current?.focus()}
      />
      <TextInput
        ref={inputRef}
        placeholder="Buscar..."
        placeholderTextColor={colors["gray-dark"]}
        value={value}
        onChangeText={onChangeText}
        className="flex-1 py-2 font-body text-xl"
      />
    </View>
  );
}
