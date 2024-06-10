import { BreadcrumbItemProps } from "@nextui-org/react";
import { ReactNode } from "react";

export type BreadcrumbTypes = {
  actions?: ReactNode;
  customName?: string;
  /**
   * If the title name is the same as the route name, a title must be passed to enable it
   * @default True
   */
  isTitleInRoute?: boolean;
} & Partial<BreadcrumbItemProps>;
