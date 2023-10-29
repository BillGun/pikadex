import Link from "next/link";
import { ReactIcon, TailwindIcon, TypescriptIcon } from "./Icons";
import Layout from "./Layout";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-themeDark text-xs font-medium dark:border-themeLight dark:text-themeLight md:text-base lg:text-lg">
      <Layout className="flex flex-col items-center justify-between px-0 py-3 sm:flex-row sm:!px-32 md:py-4 xl:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Build with{" "}
          <span className="px-1 text-2xl text-primary dark:text-primaryDark">
            &#9825;
          </span>{" "}
          by&nbsp;
          <Link href="">Me</Link>
        </div>
        <div className="flex items-center">
          <ReactIcon />
          <TailwindIcon />
          <TypescriptIcon />
        </div>
      </Layout>
    </footer>
  );
}
