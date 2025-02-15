"use client";

import { motion } from "motion/react";
import { useState } from "react";

interface SocialLink {
  name: string;
  url: string;
  username: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "email",
    url: "mailto:aditya@atyam.me",
    username: "aditya@aty.am",
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/atyam",
    username: "atyam",
  },
  {
    name: "github",
    url: "https://github.com/4tyam",
    username: "4tyam",
  },
  {
    name: "x",
    url: "https://twitter.com/4tyam",
    username: "4tyam",
  },
  {
    name: "instagram",
    url: "https://instagram.com/4tyam",
    username: "4tyam",
  },
];

const SocialLinkItem = ({ name, url, username }: SocialLink) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      draggable={false}
      className="group flex items-center gap-10 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ x: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.span className="text-xl sm:text-2xl font-medium">
        {name}
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : -10,
        }}
        className="hidden sm:block text-foreground/60 text-base sm:text-lg"
      >
        {username}
      </motion.span>
      <span className="sm:hidden text-gray-500 text-base">{username}</span>
    </motion.a>
  );
};

export default function Social() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className="text-2xl sm:text-4xl font-medium mb-2">
          let&apos;s connect
        </h1>
        <p className="text-foreground/60 text-base sm:text-lg">
          find me on any of these platforms
        </p>
      </motion.div>

      <div className="flex flex-col w-full max-w-md px-6">
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * index }}
            className={`${
              index === socialLinks.length - 1
                ? ""
                : "border-b sm:border-b-slate-300"
            }`}
          >
            <SocialLinkItem {...link} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
