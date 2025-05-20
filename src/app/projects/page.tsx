import Projects from "@/components/projects";

export default function ProjectsPage() {
  return (
    <div className="mt-16 flex flex-col items-center justify-center py-8 sm:py-16 w-full px-4 sm:px-6">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-medium mb-10 sm:mb-16 text-center">
          projects
        </h2>
        <Projects />
      </div>
    </div>
  );
}
