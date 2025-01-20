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
      {fullPathArray.map((path, index) => {
        const href = "/" + fullPathArray.slice(1, index + 1).join("/");
        const isLast = index === fullPathArray.length - 1;

        return (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {" "}
              {!isLast ? (
                //    <Button
                //    key={item}
                //    variant="ghost"
                //    className="border-2 border-black bg-white hover:bg-neutral-100 active:bg-neutral-200 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all rounded-none"
                //    asChild
                //  >
                //    <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                //      {item}
                //    </Link>
                //  </Button>
                <BreadcrumbLink
                  asChild
                  className="inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  h-9 px-4 py-2 border-2 border-black bg-white hover:bg-neutral-100 active:bg-neutral-200 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all rounded-none"
                >
                  <Link href={href}>{capitalizeFirstLetter(path)}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbLink
                  asChild
                  className="inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  h-9 px-4 py-2 border-2 border-black bg-white hover:bg-neutral-100 active:bg-neutral-200 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all rounded-none"
                >
                  <Link href={href}>{capitalizeFirstLetter(path)}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {/* {!isLast && (
              <span className="text-neutral-700 dark:text-neutral-200/60 mx-2">
                {" > "}
              </span>
            )} */}
          </React.Fragment>
        );
      })}
    </Breadcrumb>
  );
}
