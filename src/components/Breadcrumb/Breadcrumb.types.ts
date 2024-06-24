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

  /**
   * @description - Overwrites the names of the routes in the breadcrumb,
   * starting from the number zero,
   * if not overwritten the default name will be kept
   * @example <Breadcrumb overrideNames={{ 0: "rootRoute" }} />
   */
  overrideNames?: { [key: number]: string };
} & Partial<BreadcrumbItemProps>;
