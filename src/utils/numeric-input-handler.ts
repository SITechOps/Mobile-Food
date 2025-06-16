export function handleOnlyNumbersInput(
  text: string,
  onChange: (value: number) => void,
  isCurrency = false
) {
  if (!/^\d*$/.test(text)) return;
  onChange(Number(text) / (isCurrency ? 100 : 1));
}
