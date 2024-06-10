import { createElement } from "react";

export type TextProps = {
  elementType?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Text = ({
  elementType = "p",
  children,
  className,
  ...props
}: TextProps) => {
  const Element = elementType || "p";

  return createElement(
    Element,
    {
      className,
      ...props,
    },
    children
  );
};
