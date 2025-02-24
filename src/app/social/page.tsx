"use client";

import { motion } from "motion/react";
import { useState } from "react";

interface SocialLink {
  name: string;
  url: string;
  username: string;
  icon?: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "email",
    url: "mailto:aditya@aty.am",
    username: "aditya@aty.am",
    icon: "M1.75 3A1.75 1.75 0 0 0 0 4.75v10.5C0 16.216.784 17 1.75 17h16.5A1.75 1.75 0 0 0 20 15.25v-10.5A1.75 1.75 0 0 0 18.25 3H1.75ZM1.5 4.75a.25.25 0 0 1 .25-.25h16.5a.25.25 0 0 1 .25.25v.852l-8.5 5.675-8.5-5.675V4.75Zm0 2.662V15.25c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V7.412l-8.5 5.675-8.5-5.675Z",
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/atyam",
    username: "atyam",
    icon: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
  },
  {
    name: "github",
    url: "https://github.com/4tyam",
    username: "4tyam",
    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    name: "x",
    url: "https://twitter.com/4tyam",
    username: "4tyam",
    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    name: "instagram",
    url: "https://instagram.com/4tyam",
    username: "4tyam",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
];

const SocialLinkItem = ({ name, url, username, icon }: SocialLink) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      draggable={false}
      className="group flex items-center justify-between w-full py-5 sm:py-8 relative px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ x: 10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        {icon && (
          <motion.div
            className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex items-center justify-center flex-shrink-0"
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d={icon} />
            </svg>
          </motion.div>
        )}
        <motion.span className="text-lg sm:text-2xl font-medium">
          {name}
        </motion.span>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : -10,
        }}
        className="hidden sm:block text-foreground/60 text-base sm:text-lg"
      >
        <span className="font-mono">{username}</span>
        <motion.span
          className="ml-2"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          →
        </motion.span>
      </motion.div>
      <span className="sm:hidden text-foreground/60 text-xs font-mono truncate ml-2 max-w-[120px]">
        {username}
      </span>

      {/* Line indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-border origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

export default function Social() {
  return (
    <div className="mt-8 sm:mt-14 flex flex-col items-center justify-center py-20 sm:py-24 px-4 sm:px-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 sm:mb-16 text-center"
      >
        <h1 className="text-2xl sm:text-4xl font-medium mb-2">
          let&apos;s <span className="text-accent">connect</span>
        </h1>
        <p className="text-foreground/60 text-sm sm:text-lg">
          find me on any of these platforms
        </p>
      </motion.div>

      <div className="flex flex-col w-full max-w-md relative">
        {/* Background gradient decorations */}
        <div className="absolute -left-20 -top-10 w-40 h-40 bg-accent/5 rounded-full filter blur-3xl" />
        <div className="absolute -right-20 -bottom-10 w-40 h-40 bg-accent/5 rounded-full filter blur-3xl" />

        {socialLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index + 0.2 }}
          >
            <SocialLinkItem {...link} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
