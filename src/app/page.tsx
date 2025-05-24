"use client";

import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="mt-32 sm:mt-20 flex flex-col items-center justify-center py-8 sm:py-16 w-full px-4 sm:px-6">
      <div className="w-full max-w-5xl">
        <div className="mb-12 sm:mb-20">
          <h1 className="text-4xl sm:text-6xl font-medium text-center">
            Aditya Atyam
          </h1>
          <p className="text-sm sm:text-xl text-foreground/80 mt-4 text-center mb-32">
            I study electronics and finance at bits pilani and build stuff in my free time
          </p>
        </div>

        <div>
          {/* <h2 className="text-2xl sm:text-4xl font-medium mb-16 text-center">
            stuff
          </h2> */}
          <Projects featured={true} />
        </div>
      </div>
    </div>
  );
}
