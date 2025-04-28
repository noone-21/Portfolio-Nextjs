'use client';

import Intro from "@/components/Intro";
import AnimatedSection from "@/components/ui/animated-section";

// Enable ISR
// export const revalidate = 60;

export default function ExperiencePage() {
  const experience = [
    {
      role: "MERN Stack Developer",
      company: "Upvave",
      duration: "March 2025 – Present",
      description:
        "Learned new technologies like Dockerand Graphql. Worked on fixing errors in a real world Next Js project. Nextjs, MERN Stack, Docker, Graphql, Web Sockets.",
    },
    {
      role: "React Js Intern",
      company: "Techscale",
      duration: "March 2024 – May 2024",
      description:
        "Reported to My team lead. Worked on a Danish/Norwegian site, Dansk Tandforsikring, worked on adding some new features and tackling some issues with the site. Worked on learning some new Technologies like NextJs and VueJs." 
    },
    {
      role: "Frontend Developer Intern",
      company: "Hawk Logix",
      duration: "July 2022 – August 2022",
      description:
        "Reported to my team lead. I worked on different ReactJs projects and developed several Web apps using the MERN Stack. The most important thing that I learnt was to work on ReactJs and to integrate my ReactJs Frontend with my NodeJs Backend. I got my first Freelance project there and the employer loved my work, left a good review with 5 stars.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
          {/* Intro Section */}
          <div>
            <Intro />
          </div>

          {/* Experience Section */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white dark:bg-black rounded-xl p-6 shadow-md space-y-6">
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              {experience.map((exp, idx) => (
                <div key={idx} className="border-l-4 border-[#FF5500] pl-4 space-y-1">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.duration}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
