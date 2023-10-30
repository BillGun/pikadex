"use client";

import { LeftArrow } from "@/components/Icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const LeftArrowIcon = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleLeftClick = () => {
    router.push(`/pokemon/${Number(id) - 1}`);
  };
  return (
    <motion.div
      className="absolute left-2 top-[50vh] w-10 cursor-pointer "
      onClick={handleLeftClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <LeftArrow className="fill-themeDark dark:fill-themeLight" />
    </motion.div>
  );
};
