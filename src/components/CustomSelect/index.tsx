import { Select, SelectProps } from "@nextui-org/react";

export const CustomSelect = <T extends object>({
  ...props
}: SelectProps<T>) => {
  return <Select variant="bordered" color="primary" {...props} />;
};
