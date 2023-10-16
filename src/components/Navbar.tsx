"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PokeballColorIcon } from "./Icons";

const CustomLink = ({ href = "/", title = "", className = "" }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px] 
      bg-themeDark transition-[width] duration-300 group-hover:w-full ${
        pathname === href ? "w-full" : "w-0"
      }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export const Navbar = () => {
  return (
    <header className="flex w-full items-start justify-between border-b-2 border-themeDark px-32 pb-4 pt-6 font-medium">
      <div className="flex w-full items-center justify-start">
        <Link href={"/"} className="flex">
          <PokeballColorIcon />
          <p>Pikadex</p>
        </Link>
        <nav>
          <CustomLink href={"/pokemon"} title="Pokemon" className="ml-4" />
          <CustomLink href={"/berry"} title="Berries" className="mx-4" />
          <CustomLink href={"/items"} title="Items" className="mr-4" />
        </nav>
      </div>
    </header>
  );
};
