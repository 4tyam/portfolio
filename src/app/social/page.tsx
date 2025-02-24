"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  username: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: "email",
    url: "mailto:aditya@aty.am",
    username: "aditya@aty.am",
    icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/atyam",
    username: "atyam",
    icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    name: "github",
    url: "https://github.com/4tyam",
    username: "4tyam",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 sm:w-6 sm:h-6"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    name: "twitter",
    url: "https://twitter.com/4tyam",
    username: "4tyam",
    icon: <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    name: "instagram",
    url: "https://instagram.com/4tyam",
    username: "4tyam",
    icon: <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />,
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
      className="group flex items-center justify-between w-full py-5 sm:py-8 relative px-3 sm:px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ x: 10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <motion.div
          className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex items-center justify-center flex-shrink-0"
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
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
      <span className="sm:hidden text-foreground/60 text-xs font-mono truncate ml-2 max-w-[100px]">
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
    <div className="mt-8 sm:mt-14 flex flex-col items-center justify-center py-20 sm:py-24 w-full overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 sm:mb-16 text-center px-4"
      >
        <h1 className="text-2xl sm:text-4xl font-medium mb-2">
          let&apos;s <span className="text-accent">connect</span>
        </h1>
        <p className="text-foreground/60 text-sm sm:text-lg">
          find me on any of these platforms
        </p>
      </motion.div>

      <div className="flex flex-col w-full max-w-md relative px-6 sm:px-8">
        {/* Background gradient decorations */}
        <div className="absolute -left-20 -top-10 w-40 h-40 bg-accent/5 rounded-full filter blur-3xl" />
        <div className="absolute -right-20 -bottom-10 w-40 h-40 bg-accent/5 rounded-full filter blur-3xl" />

        {socialLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index + 0.2 }}
            className="w-full"
          >
            <SocialLinkItem {...link} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
