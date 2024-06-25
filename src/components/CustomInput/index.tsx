import { Input, InputProps } from "@nextui-org/react";

export const CustomInput = ({ ...props }: InputProps) => {
  return <Input variant="bordered" color="primary" {...props} />;
};
