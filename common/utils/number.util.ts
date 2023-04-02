const compactFormat = new Intl.NumberFormat(undefined, {
  notation: "compact",
  maximumFractionDigits: 1,
});

export function convertToCompact(value: number): string {
  if (value < 0) return "N/A";
  if (value === 0) return "";
  if (value < 10_000) return value.toString();

  return compactFormat.format(value);
}
