"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "ai playground",
    description: "chat with every ai model",
    link: "https://aipg.vercel.app/",
    image: "/project/aipg.png",
    featured: true,
  },
  {
    title: "ReviewBlocks",
    description:
      "course review website to help you choose your electives better",
    link: "https://reviewblocks.com",
    image: "/project/reviewblocks.png",
    featured: true,
  },
  {
    title: "Xeno Events",
    description:
      "events platform where you can create, manage and register for events. includes a qr based ticketing system",
    link: "https://github.com/4tyam/xeno-events",
    image: "/project/xenoevents.png",
    featured: true,
  },
];

interface ProjectsProps {
  featured?: boolean;
}

const linkFilter = (link: string) => {
  return link.replace(/^https?:\/\/|\/$/g, "");
};

export default function Projects({ featured }: ProjectsProps) {
  const filteredProjects = featured
    ? projects.filter((project) => project.featured)
    : projects;

  return (
    <div className="space-y-24">
      {filteredProjects.map((project) => (
        <div key={project.title} className="group relative">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div className="flex-1 flex flex-col justify-between space-y-4 sm:space-y-0">
              <div className="space-y-1">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-medium hover:text-foreground/70 transition-colors inline-block"
                  initial={{ y: 0 }}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.a>
                <p className="text-foreground/80 max-w-xl text-sm sm:text-base">
                  {project.description}
                </p>
              </div>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={project.link}
                className="text-xs text-gray-500 italic hover:text-foreground/80 transition-colors"
              >
                {linkFilter(project.link)}
              </Link>
            </div>
            {project.image && (
              <div className="relative w-full sm:w-48 h-48 sm:h-32 flex-shrink-0 order-first sm:order-last">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
