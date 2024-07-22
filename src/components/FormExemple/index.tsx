"use client";

import { createUserFormSchema } from "@/helpers/schema";
import { defaultValuesFormExample } from "@/mocks";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { CreateUserFormData } from "./FormExemple.types";

export const FormExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreateUserFormData>({
    defaultValues: defaultValuesFormExample,
    resolver: zodResolver(createUserFormSchema),
  });

  const onSubmit = (data: CreateUserFormData) => {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
  };

  return (
    <Stack
      className="flex-col gap-6"
      elementType="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Text elementType="h1">Create User Form</Text>
      <Stack className="flex-col gap-4">
        <Input
          label="Username"
          labelPlacement="outside"
          isRequired
          variant="bordered"
          color="primary"
          isInvalid={!!errors.username}
          errorMessage={errors.username?.message}
          {...register("username")}
        />
        <Input
          label="Password"
          labelPlacement="outside"
          isRequired
          variant="bordered"
          color="primary"
          isInvalid={!!errors.password}
          errorMessage={errors.password?.message}
          {...register("password")}
        />
        <Input
          label="Confirm password"
          labelPlacement="outside"
          isRequired
          variant="bordered"
          color="primary"
          isInvalid={!!errors.confirm_password}
          errorMessage={errors.confirm_password?.message}
          {...register("confirm_password")}
        />
        <Button variant="bordered" color="primary" type="submit">
          Submit
        </Button>
      </Stack>
    </Stack>
  );
};
