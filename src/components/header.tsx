"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

export default function Header() {
  const pathName = usePathname();
  const isActive = (path: string) => pathName === path;

  return (
    <header className="fixed w-full top-0 z-50">
      <div className="backdrop-blur-xl bg-background/40">
        <nav className="flex justify-center items-center max-w-6xl mx-auto p-4">
          <div className="flex gap-10">
            <NavItem name="home" link="/" isActive={isActive("/")} />
            <NavItem
              name="projects"
              link="/projects"
              isActive={isActive("/projects")}
            />
            <NavItem
              name="social"
              link="/social"
              isActive={isActive("/social")}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

const NavItem = ({
  name,
  link,
  isActive,
}: {
  name: string;
  link: string;
  isActive: boolean;
}) => {
  return (
    <Link
      href={link}
      className="mt-2 text-sm sm:text-base relative flex flex-col items-center"
    >
      <motion.span
        initial={{ y: 0 }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className={`${
          isActive ? "opacity-100" : "opacity-50"
        } hover:opacity-70 transition-opacity`}
      >
        {name}
      </motion.span>
      {isActive && (
        <motion.div
          className="absolute -bottom-1 h-[1px] bg-foreground"
          layoutId="navunderline"
          style={{
            width: "2.5rem",
          }}
        />
      )}
    </Link>
  );
};
