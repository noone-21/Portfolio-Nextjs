"use client";

import Intro from "@/components/Intro";
import AnimatedSection from "@/components/ui/animated-section";
import Image from "next/image";
import Link from "next/link";

// Enable ISR
// export const revalidate = 60;

export default function ExperiencePage() {
  const experience = [
    {
      role: "MERN Stack Developer",
      company: "Upvave",
      duration: "March 2025 – Present",
      description:
        "Learned new technologies like Docker and Graphql. Worked on fixing errors in a real-world Next Js project. Nextjs, MERN Stack, Docker, Graphql, Web Sockets.",
      logo: "/assets/img/company/upvave.png",
      href: "https://upvave.com",
    },
    {
      role: "React Js Intern",
      company: "Techscale",
      duration: "March 2024 – May 2024",
      description:
        "Reported to my team lead. Worked on a Danish/Norwegian site, Dansk Tandforsikring, adding new features and tackling site issues. Learned technologies like NextJs and VueJs.",
      logo: "/assets/img/company/techScaleLogo.jpg",
      href: "https://techscale.io",
    },
    {
      role: "Frontend Developer Intern",
      company: "Hawk Logix",
      duration: "July 2022 – August 2022",
      description:
        "Reported to my team lead. Worked on ReactJs projects and developed web apps using the MERN Stack. Learned ReactJs-NodeJs integration and completed my first freelance project with a 5-star review.",
      logo: "/assets/img/company/hawklogixLogo.png",
      href: "https://hawklogix.com",
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
                <div
                  key={idx}
                  className="border-l-4 border-[#FF5500] pl-4 flex items-start space-x-4"
                >
                  <Link href={exp.href} className="block">
                    <div className="w-12 h-12">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain rounded"
                      />
                    </div>
                  </Link>
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {exp.duration}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
