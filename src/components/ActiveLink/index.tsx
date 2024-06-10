"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type ActiveLinkProps = {
  href: string;
  includes?: boolean;
} & LinkProps;

export const ActiveLink = ({
  href,
  children,
  includes,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const router = usePathname();

  const verifyIsActive = () => {
    if (includes) return router.includes(href);

    return href === router;
  };

  const isActive = verifyIsActive();

  const activeClass = isActive
    ? "flex font-semibold border-r-5 border-secondary text-white rounded bg-primary hover:text-secondary-800"
    : "border-none bg-transparent hover:text-secondary ";

  const className = twMerge("p-2 transition-all duration-700", activeClass);

  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
};
