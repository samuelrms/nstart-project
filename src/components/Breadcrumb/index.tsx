"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Link from "next/link";

import { useNavigationList } from "@/hooks";
import { BreadcrumbTypes } from "./Breadcrumb.types";

export const Breadcrumb = ({
  actions,
  title,
  customName,
  ...props
}: BreadcrumbTypes) => {
  const { list, pageName } = useNavigationList();
  return (
    <div className="flex flex-col justify-between">
      <h1 className="text-primary font-semibold text-4xl">
        {title ?? pageName.replace(/-/g, " ")}
      </h1>
      <div className="mt-5 flex flex-1 items-center justify-between">
        <Breadcrumbs>
          {list.map((item, index) => {
            const name = decodeURIComponent(item.name).replace(/-/g, " ");
            const isDisabled = index === 0;
            const renderLink = !isDisabled && index !== list.length - 1;
            const isLastItem = index === list.length - 1;
            return (
              <BreadcrumbItem
                isDisabled={isDisabled}
                key={item.name}
                startContent={item.startContent}
                {...props}
              >
                {renderLink ? (
                  <Link href={item.link}>{name}</Link>
                ) : isLastItem && customName ? (
                  customName
                ) : (
                  name
                )}
              </BreadcrumbItem>
            );
          })}
        </Breadcrumbs>

        <div className="flex flex-row gap-4">{actions}</div>
      </div>
    </div>
  );
};
