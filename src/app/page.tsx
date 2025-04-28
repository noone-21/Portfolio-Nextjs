"use client";

import ContactMarquee from "@/components/ContactMarquee";
import ExpertArea from "@/components/ExpertArea";
import Intro from "@/components/Intro";
import AnimatedSection from "@/components/ui/animated-section";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-screen-2xl justify-between flex-col gap-2 p-2 lg:gap-3 lg:p-3">
      <main className="grid grid-cols-1 gap-2 lg:grid-cols-[2fr_3fr] lg:gap-3">
        {/* Intro Section */}
        <div id="intro-container">
          <AnimatedSection className="mb-0">
            <Intro />
          </AnimatedSection>
        </div>

        {/* Expert Area Section */}
        <div>
          <AnimatedSection delay={0.4}>
            <ExpertArea />
          </AnimatedSection>
        </div>

        {/* Contact Section with Marquee */}
        <div className="col-span-full">
          <AnimatedSection delay={0.8}>
            <ContactMarquee />
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
}
