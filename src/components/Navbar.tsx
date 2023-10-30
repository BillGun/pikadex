"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { MoonIcon, PokeballColorIcon, SunIcon } from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href = "/", title = "", className = "" }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px] 
      bg-themeDark transition-[width] duration-300 group-hover:w-full dark:bg-themeLight ${
        pathname.includes(href) ? "w-full" : "w-0"
      }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomLinkMobile = ({
  href = "/",
  title = "",
  className = "",
  toggle = () => {},
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
    toggle();
  };

  return (
    <button
      className={`${className} group relative my-2 text-themeLight dark:text-themeDark `}
      onClick={handleClick}
    >
      {title}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px] bg-themeLight 
      transition-[width] duration-300 group-hover:w-full dark:bg-themeDark ${
        pathname.includes(href) ? "w-full" : "w-0"
      }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

export const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex w-full items-start justify-between border-b-2 border-themeDark px-8 py-5 font-medium text-themeDark dark:border-themeLight dark:bg-themeDark dark:text-themeLight lg:px-32 lg:pb-4 lg:pt-6">
      {/* Burger */}
      <button
        className="flex flex-col items-center justify-center lg:hidden"
        onClick={handleClick}
      >
        <span
          className={`block h-0.5 w-6 rounded-sm bg-themeDark transition-all duration-300 ease-out dark:bg-themeLight ${
            isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`my-0.5 block h-0.5 w-6 rounded-sm bg-themeDark transition-all duration-300 ease-out dark:bg-themeLight ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-sm bg-themeDark transition-all duration-300 ease-out dark:bg-themeLight  ${
            isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* NavBar */}
      <div className="hidden w-full items-center justify-between lg:flex">
        <div className="flex">
          <Link href={"/"} className="flex">
            <PokeballColorIcon />
            <p>Pikadex</p>
          </Link>
          <nav>
            <CustomLink href={"/pokemon"} title="Pokémon" className="ml-4" />
            <CustomLink href={"/berry"} title="Berries" className="mx-4" />
            <CustomLink href={"/item"} title="Item" className="mr-4" />
          </nav>
        </div>
        <nav className="items-center justify-center">
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="ml-1 flex items-center justify-center rounded-full bg-themeDark p-1 text-themeLight dark:bg-themeLight dark:text-themeDark sm:ml-3"
          >
            {mode === "dark" ? (
              <SunIcon className="fill-themeDark" />
            ) : (
              <MoonIcon className="fill-themeDark" />
            )}
          </button>
        </nav>
      </div>

      {/* Burger Menu */}
      {isOpen ? (
        <motion.div
          className="fixed left-1/2 top-1/2 z-30 flex min-w-[70vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-lg bg-themeDark/90 py-32 backdrop-blur-md dark:bg-themeLight/75"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomLinkMobile
              href="/pokemon"
              title="Pokémon"
              toggle={handleClick}
            />
            <CustomLinkMobile
              href="/berry"
              title="Berries"
              toggle={handleClick}
            />
            <CustomLinkMobile href="/item" title="Item" toggle={handleClick} />
          </nav>
          <nav className="mt-2 flex flex-wrap items-center justify-center">
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className="ml-1 flex items-center justify-center rounded-full bg-themeDark p-1 text-themeLight dark:bg-themeLight dark:text-themeDark sm:ml-3"
            >
              {mode === "dark" ? (
                <SunIcon className="fill-themeDark" />
              ) : (
                <MoonIcon className="fill-themeDark" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div
        className="absolute left-[50%] top-2 z-10 translate-x-[-50%] lg:hidden"
        onClick={() => {
          router.push("/");
        }}
      >
        <PokeballColorIcon />
      </div>
    </header>
  );
};
