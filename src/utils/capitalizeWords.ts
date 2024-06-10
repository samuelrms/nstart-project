export const capitalizeWords = (input: string) => {
  return input.replace(/\b\w/g, (char) => char.toUpperCase())
}
