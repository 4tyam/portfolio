"use client";

import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  link?: string;
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "HyperEdit",
    description: "edit images like a photoshop pro",
    link: "https://hyperedit.co",
    image: "/project/hyperedit-2.png",
    featured: true,
  },
  {
    title: "ai playground",
    description: "chat with every ai model",
    link: "https://aipg.vercel.app/",
    image: "/project/aipg.png",
    featured: true,
  },
  {
    title: "ReviewBlocks",
    description: "read reviews and choose your electives better",
    link: "https://reviewblocks.com",
    image: "/project/reviewblocks.png",
    featured: false,
  },
  {
    title: "Xeno Events",
    description:
      "events platform where you can create, manage and register for events. Includes a qr based ticketing system",
    image: "/project/xenoevents.png",
    featured: false,
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
    <div className="space-y-32 sm:space-y-40 pb-20">
      {filteredProjects.map((project) => (
        <div key={project.title} className="group relative">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <div className="flex-1 order-2 md:order-1 w-full md:w-auto text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-medium hover:text-foreground/70 transition-colors inline-block">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-foreground/80 max-w-xl mt-0.5 mx-auto px-4 sm:px-0">
                {project.description}
              </p>

              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gray-100 rounded-full text-black text-sm transition-opacity duration-300 mx-auto">
                    View
                  </button>
                </Link>
              )}
            </div>

            <div
              className="relative w-full md:w-[48%] aspect-[2946/1780] overflow-hidden rounded-lg order-1 md:order-2 mb-4 md:mb-0" // crop ratio mac (1473/889)
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
