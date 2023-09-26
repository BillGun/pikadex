'use client'

import { motion } from "framer-motion"
import { Url } from "next/dist/shared/lib/router/router"
import Image from "next/image"
import Link from "next/link"

export const Card = ({ name, image, href, className }: { name: string, image: string, href: Url, className?: string }) => {
  return (
    <div className={`w-1/6 h-auto my-4 shadow-custom z-10 cursor-pointer ${className}`}>
      <Link href={href}>
        <motion.div className="w-[85%] mx-auto bg-dark text-primary rounded-2xl pt-4 pb-8 shadow-custom"
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-full">
            <Image className="mx-auto" src={image} alt={name} width={96} height={96} />
          </div>
          <div>
            <h4 className="capitalize text-center">{name}</h4>
          </div>
        </motion.div>
      </Link>
    </div>
  )
}