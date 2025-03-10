"use client";

import { motion } from "motion/react";
import Image from "next/image";

const ProjectTitle = ({ title, link }: { title: string; link: string }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xl sm:text-2xl hover:text-foreground/70 transition-colors inline-flex items-center gap-2 font-medium"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {title}
      <motion.svg
        className="w-5 h-5 inline-block text-foreground/60 group-hover:text-foreground/70"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </motion.svg>
    </motion.a>
  );
};

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
    title: "Review Blocks",
    description:
      "course review website to help you choose your electives better",
    link: "https://reviewblocks.com",
    image: "/project/reviewblocks.png",
    featured: true,
  },
  {
    title: "Xeno Events",
    description:
      "events platform where you can create, manage and register for events",
    link: "https://github.com/4tyam/xeno-events",
    image: "/project/xenoevents.png",
    featured: true,
  },
];

interface ProjectsProps {
  featured?: boolean;
}

export default function Projects({ featured }: ProjectsProps) {
  const filteredProjects = featured
    ? projects.filter((project) => project.featured)
    : projects;

  return (
    <div className="space-y-24">
      {filteredProjects.map((project) => (
        <div key={project.title} className="group relative">
          <div className="flex justify-between items-start gap-8">
            <div className="space-y-0.5">
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
            {project.image && (
              <div className="relative w-48 h-32 flex-shrink-0">
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
