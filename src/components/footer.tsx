"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="w-full py-12 mt-auto border-t border-border">
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-8 px-6 sm:px-20 max-w-7xl mx-auto">
        <span className="hidden sm:block text-6xl">aditya atyam</span>
        <div className="w-full sm:w-auto flex flex-row sm:flex-col justify-between sm:justify-center items-center sm:items-end sm:gap-8">
          <span className="sm:hidden text-4xl">
            aditya <br /> atyam
          </span>
          <div className="flex items-center justify-center sm:justify-end gap-6 sm:mt-4">
            <SocialLink href="https://twitter.com/4tyam" label="X" />
            <SocialLink href="https://github.com/4tyam" label="github" />
            <SocialLink href="https://linkedin.com/in/atyam" label="linkedin" />
          </div>
        </div>
      </div>
    </footer>
  );
}

const SocialLink = ({ href, label }: { href: string; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground/50 hover:text-foreground/100 transition-colors text-sm sm:text-base"
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
  >
    {label}
  </motion.a>
);
