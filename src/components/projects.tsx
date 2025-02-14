"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const LinkIcon = () => (
  <motion.svg
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -10 }}
    className="w-5 h-5 inline-block ml-2"
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
);

const ProjectTitle = ({ title, link }: { title: string; link: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xl sm:text-2xl hover:text-foreground/70 transition-colors inline-flex items-center font-medium"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {title}
      <AnimatePresence>{isHovered && <LinkIcon />}</AnimatePresence>
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
      "course review platform to help you choose your electives better",
    link: "https://reviewblocks.com",
    image: "/project/reviewblocks.png",
    featured: true,
  },
  {
    title: "Xeno Events",
    description:
      "event management platform where you can create, manage and register for events",
    link: "https://github.com/4tyam/project-three",
    image: "/project/xenoevents.png",
    featured: true,
  },
];

interface ProjectsProps {
  featuredOnly?: boolean;
}

export default function Projects({ featuredOnly = false }: ProjectsProps) {
  const filteredProjects = featuredOnly
    ? projects.filter((project) => project.featured)
    : projects;

  return (
    <div className="flex flex-col">
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.2 * index,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className={`${
            index === filteredProjects.length - 1
              ? ""
              : "border-b border-b-slate-300"
          } py-32`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center px-6 sm:px-20 max-w-7xl mx-auto">
            <div className="flex flex-col">
              <div className="inline-block">
                <ProjectTitle title={project.title} link={project.link} />
              </div>
              <p className="text-foreground/60 text-base sm:text-lg">
                {project.description}
              </p>
            </div>
            <motion.div
              className="relative h-[200px] sm:h-[300px] rounded-lg overflow-hidden bg-foreground/5"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
