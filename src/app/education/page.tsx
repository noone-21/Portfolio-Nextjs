"use client";

import Intro from "@/components/Intro";
import AnimatedSection from "@/components/ui/animated-section";
import Image from "next/image";

// Enable Incremental Static Regeneration with a revalidation period of 60 seconds
// export const revalidate = 60;

export default function EducationPage() {
  const education = [
    {
      degree: "Bachelors of Science",
      major: "Computer Science",
      institution: "University of Management and Technology",
      year: "2019 – 2023",
      logo: "/assets/img/institution/umtLogo.png", // Add your logo path here
    },
    {
      degree: "Intermediate",
      major: "ICS",
      institution: "Punjab Group of Colleges",
      year: "2017 – 2019",
      logo: "/assets/img/institution/punjabLogo.png",
    },
    {
      degree: "Matriculation",
      major: "Computer",
      institution: "Beaconhouse School System",
      year: "2015 – 2017",
      logo: "/assets/img/institution/bssLogo.png",
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

          {/* Education Section */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white dark:bg-black rounded-xl p-6 shadow-md space-y-6">
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-[#FF5500] pl-4 flex items-start space-x-4"
                >
                  <Image
                    src={edu.logo}
                    width={50}
                    height={50}
                    alt={`${edu.institution} logo`}
                    className="w-12 h-12 object-contain rounded"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground">{edu.major}</p>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
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
