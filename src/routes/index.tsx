import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Technologies } from "@/components/site/Technologies";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Inquiry } from "@/components/site/Inquiry";
import { Footer } from "@/components/site/Footer";

const title = "RootStack — Websites, Apps & AI Automation Studio";
const description =
  "RootStack is a product studio building fast websites, polished web and mobile apps, and AI automations for teams that care about the details.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "RootStack Digital Solutions",
          description,
          areaServed: "Worldwide",
          serviceType: ["Website Development", "App Development", "AI Automation"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen w-full overflow-x-hidden bg-canvas"
    >
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-ink/80"
      />

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <Process />
        <WhyUs />
        <Testimonials />
        <Technologies />
        <Faq />
        <FinalCta />
        <Inquiry />
      </main>

      <Footer />
    </motion.div>
  );
}
