'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { PokeballColorIcon } from "./Icons";

const CustomLink = ({ href = '/', title = '', className = '' }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-themeDark absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? 'w-full' : 'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  )
}

export const Navbar = () => {
  return (
    <header className="w-full flex items-start px-32 pt-6 pb-4 font-medium justify-between border-b-2 border-themeDark">
      <div className="w-full flex items-center justify-start">
        <Link href={"/"} className="flex">
          <PokeballColorIcon />
          <p>Pikadex</p>
        </Link>
        <nav>
          <CustomLink href={"/pokemon"} title="Pokemon" className="ml-4" />
          <CustomLink href={"/berries"} title="Berries" className="mx-4" />
          <CustomLink href={"/items"} title="Items" className="mr-4" />
        </nav>
      </div>
    </header>
  )
}