import Header from "@/components/Header";
import Benefits from "@/components/home/Benefits";
import Footer, { FooterProps } from "@/components/home/Footer";
import FooterHero from "@/components/home/FooterHero";
import Hero, { HeroProps } from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import Testimonials from "@/components/home/Testimonials";
import About from "@/components/home/About";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const heroProps: HeroProps = {
    title: "Accessibility Tools for Educators",
    subtitle: "The sidekick you didn't know you needed.",
    heroImage: "/images/prof.jpg",
    callToAction: "Try Notes",
    callToActionLink: "/notes",
  };
  const footerProps: FooterProps = {
    slogan: "Learning doesn't have to be scary!",
    description: "TextbookAI is here to help you learn better and faster.",
    copyrightNotice: "© 2024 Sahaya LLC",
  };

  return (
    <main>
      <Header />
      <Hero {...heroProps} />
      {/* <Introduction /> */}
      <Benefits />
      {/* <Testimonials /> */}
      <About />
      <FooterHero />
      <Footer {...footerProps} />
    </main>
  );
};

export default Home;