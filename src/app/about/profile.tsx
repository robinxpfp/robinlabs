import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Profile() {
  return (
    <div className="flex items-center gap-4 ">
      <Image
        src="/pfp.jpg"
        alt="Profile picture"
        width={100}
        height={100}
        className="rounded-full"
      />
      <div>
        <h1 className="text-xl font-semibold">Fulano</h1>
        <Link
          href={"x.com/robinxpfp"}
          className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 text-xs text-neutral-700"
        >
          @fulano
        </Link>
        <p className="text-neutral-600 text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>
    </div>
  );
}
