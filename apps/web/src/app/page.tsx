import Header from "@/components/Header";
import Benefits from "@/components/home/Benefits";
import Footer, { FooterProps } from "@/components/home/Footer";
import FooterHero from "@/components/home/FooterHero";
import Hero, { HeroProps } from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import Testimonials from "@/components/home/Testimonials";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const heroProps: HeroProps = {
    title: "Revolutionize Your Studying with AI-Powered Textbooks",
    subtitle: "Get instant, contextualized answers from any textbook. Learning should be friendly!",
    heroImage: "/images/hero.png",
    callToAction: "Try it now",
    callToActionLink: "/notes",
  };
  const footerProps: FooterProps = {
    slogan: "Take more efficient notes with TextbookAI",
    description: "Save countless hours of note-taking and organize your notes easier.",
    copyrightNotice: "2024 TextbookAI. All rights reserved.",
    iconCredit: "Icons by Icons8",
  };

  return (
    <main>
      <Header />
      <Hero {...heroProps} />
      <Introduction />
      <Benefits />
      <Testimonials />
      <FooterHero />
      <Footer {...footerProps} />
    </main>
  );
};

export default Home;