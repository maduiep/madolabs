import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Capabilities from "@/components/home/Capabilities";
import FeaturedWork from "@/components/home/FeaturedWork";
import CTA from "@/components/ui/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Capabilities />
      <FeaturedWork />
      <CTA />
    </>
  );
}
