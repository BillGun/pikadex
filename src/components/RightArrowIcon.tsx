'use client'

import { RightArrow } from "@/components/Icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const RightArrowIcon = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleRightClick = () => {
    router.push(`/pokemon/${Number(id) + 1}`);
  }
  return (
    <motion.div
      className="w-16 absolute right-2 top-[50vh] cursor-pointer"
      onClick={handleRightClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <RightArrow />
    </motion.div>
  )
}