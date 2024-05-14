export const truncateToWords = (string: string, length: number): string => {
  return string.split(" ").slice(0, length).join(" ");
};
