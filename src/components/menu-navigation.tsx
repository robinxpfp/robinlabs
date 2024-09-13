"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export default function MenuNavigation() {
  const pathname = usePathname();

  const pathArray = pathname.split("/").filter(Boolean);

  const fullPathArray = ["home", ...pathArray];

  return (
    <Breadcrumb className="my-4">
      <ul>
        {fullPathArray.map((path, index) => {
          const href = "/" + fullPathArray.slice(1, index + 1).join("/");
          const isLast = index === fullPathArray.length - 1;

          return (
            <React.Fragment key={index}>
              <BreadcrumbItem as="li">
                {" "}
                {!isLast ? (
                  <BreadcrumbLink asChild>
                    <Link
                      href={href}
                      className="text-neutral-900 dark:text-neutral-200 font-bold dark:hover:text-neutral-200 hover:text-neutral-900 hover:underline hover:underline-offset-4"
                    >
                      {capitalizeFirstLetter(path)}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      href={href}
                      className="text-neutral-900 dark:text-neutral-200 font-bold dark:hover:text-neutral-200 hover:text-neutral-900 hover:underline hover:underline-offset-4"
                    >
                      {capitalizeFirstLetter(path)}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && (
                <span className="text-neutral-700 dark:text-neutral-200/60 mx-2">
                  {" > "}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </Breadcrumb>
  );
}
