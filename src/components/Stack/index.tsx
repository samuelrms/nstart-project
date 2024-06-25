import { createElement } from "react";

import { HTMLAttributes, ReactHTML } from "react";
import { twMerge } from "tailwind-merge";

export type StackProps = {
  elementType?: keyof ReactHTML;
} & HTMLAttributes<HTMLElement>;

export const Stack = ({
  elementType = "div",
  children,
  className,
  ...props
}: StackProps) => {
  const Element = elementType;

  const classNameProps = twMerge("flex", className);

  return createElement(
    Element,
    {
      className: classNameProps,
      ...props,
    },
    children
  );
};
