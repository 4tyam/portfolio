import Projects from "@/components/projects";

export default function ProjectsPage() {
  return (
    <div className="mt-4 sm:mt-8 flex flex-col items-center justify-center py-16 sm:py-20 w-full">
      <div className="w-full max-w-3xl px-6">
        <h2 className="text-2xl sm:text-4xl font-medium mb-10 text-center">
          projects
        </h2>
        <Projects />
      </div>
    </div>
  );
}
