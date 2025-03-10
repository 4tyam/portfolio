"use client";

import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 sm:py-28">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-6xl font-medium">Aditya Atyam</h1>

        <p className="text-sm sm:text-lg text-foreground/80">
          i study electronics and finance at bits pilani and like to build stuff
          in my free time.
        </p>

        <div className="pt-8">
          <h2 className="text-2xl sm:text-4xl font-medium mb-10">projects</h2>
          <Projects featured={true} />
        </div>
      </div>
    </div>
  );
}
