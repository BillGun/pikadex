"use client";

import { motion } from "framer-motion";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";

export const Card = ({
  name,
  image,
  href,
  className,
}: {
  name: string;
  image: string;
  href: Url;
  className?: string;
}) => {
  return (
    <div
      className={`z-10 my-4 h-auto w-1/6 cursor-pointer shadow-custom ${className}`}
    >
      <Link href={href}>
        <motion.div
          className="border-themeSoftDark mx-auto w-[85%] rounded-2xl border-2 bg-primary pb-8 pt-4 shadow-custom"
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-full">
            <Image
              className="mx-auto"
              src={image}
              alt={name}
              width={96}
              height={96}
            />
          </div>
          <div>
            <h4 className="text-center capitalize">{name}</h4>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};
