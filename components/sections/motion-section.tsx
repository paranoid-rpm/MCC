"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export function MotionSection({
  children,
  className
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.55 }}
      className={cn("py-20", className)}
    >
      {children}
    </motion.section>
  );
}
