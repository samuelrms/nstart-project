export const createQueryStrings = (params?: Record<string, string>) => {
  return new URLSearchParams(params).toString();
};
