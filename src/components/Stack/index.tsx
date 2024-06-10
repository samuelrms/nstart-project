import { createElement } from "react";

import { HTMLAttributes, ReactHTML } from "react";

export type StackProps = {
  elementType?: keyof ReactHTML;
} & HTMLAttributes<HTMLElement>;

export const Stack = ({
  elementType = "div",
  children,
  className = "",
  ...props
}: StackProps) => {
  const Element = elementType || "div";

  return createElement(
    Element,
    {
      className,
      ...props,
    },
    children
  );
};
