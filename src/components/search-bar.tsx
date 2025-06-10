import { TextInput, TouchableOpacity, View } from "react-native";
import { useRef } from "react";
import { Icon } from "./icon";

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export function SearchBar({ value, onChangeText }: SearchBarProps) {
  const inputRef = useRef<TextInput>(null);

  return (
    <View className="flex-1 flex-row items-center rounded-full border border-red-normal px-4">
      <TouchableOpacity onPress={() => inputRef.current?.focus()}>
        <Icon name="search" color="red-normal" activeOpacity={0.9} small />
      </TouchableOpacity>
      <TextInput
        ref={inputRef}
        placeholder="Buscar..."
        value={value}
        onChangeText={onChangeText}
        className="flex-1 py-2 pl-3 font-body text-xl"
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={() => onChangeText("")}>
          <Icon name="x" color="red-normal" small />
        </TouchableOpacity>
      )}
    </View>
  );
}
