"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Projects from "@/components/projects";

export default function Home() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);
  const y = useTransform(scrollY, [0, 200], [100, 0]);
  const arrowOpacity = useTransform(scrollY, [0, 100], [0.5, 0]);

  return (
    <div className="min-h-[200vh]">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)]">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1.5, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-8xl text-center font-medium sm:font-normal"
        >
          <span className="sm:hidden">
            hi, I&apos;m
            <br />
            Aditya Atyam
          </span>
          <span className="hidden sm:block">hi, I&apos;m Aditya Atyam</span>
        </motion.h1>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 10, 0] }}
        style={{ opacity: arrowOpacity }}
        transition={{
          opacity: { delay: 1.5, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L19 12M12 19L5 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      <motion.div style={{ opacity }}>
        <motion.h2
          style={{ y }}
          className="text-2xl sm:text-4xl mb-20 text-center font-medium"
        >
          things i&apos;ve built
        </motion.h2>

        <Projects featuredOnly />
      </motion.div>
    </div>
  );
}
