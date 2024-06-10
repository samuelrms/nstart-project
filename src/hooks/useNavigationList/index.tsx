"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { capitalizeWords } from "@/utils";
import { IoHome } from "react-icons/io5";
import {
  NavigationItem,
  NavigationListResponse,
} from "./useNavigationList.types";

export const useNavigationList = (): NavigationListResponse => {
  const pathname = usePathname();

  const navigationData = useMemo(() => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const navigationItems: NavigationItem[] = [
      {
        startContent: <IoHome className="mr-2" />,
        name: "Home",
        link: "/dashboard",
      },
    ];

    let pathAccumulator = "";
    pathSegments.forEach((segment) => {
      pathAccumulator += `/${segment}`;
      if (pathAccumulator !== "/dashboard") {
        navigationItems.push({
          name: segment.charAt(0).toUpperCase() + segment.slice(1),
          link: pathAccumulator,
        });
      }
    });

    const pageName = capitalizeWords(
      pathSegments[pathSegments.length - 1] || ""
    );
    return { list: navigationItems, pageName };
  }, [pathname]);

  return navigationData;
};
