export const camelToUnderscore = (key: string): string =>
  key.replace(/([A-Z])/g, "_$1").toLowerCase();

export function ObjectToJsonSnakeCaseKeys<OriginalType>(
  original: OriginalType
) {
  const newObject = Object.fromEntries(
    Object.keys(original as object)
      .filter((key) => original[key as keyof OriginalType])
      .map((key) => [
        camelToUnderscore(key),
        String(original[key as keyof OriginalType]),
      ])
  );
  return newObject;
}
