import Link from "next/link";
import { ReactIcon, TailwindIcon, TypescriptIcon } from "./Icons";
import Layout from "./Layout";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid font-medium text-lg border-themeDark md:text-base">
      <Layout className="py-6 flex items-center justify-between xl:py-6 md:flex-col md:py-4 sm:py-2">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Build with{" "}
          <span className="text-primaryDark text-2xl px-1">&#9825;</span>{" "}
          by&nbsp;<Link href="">Me</Link>
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
