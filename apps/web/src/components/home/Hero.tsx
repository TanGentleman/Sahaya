import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

export interface HeroProps {
  title: string;
  subtitle: string;
  heroImage: string;
  callToAction: string;
  callToActionLink: string;
}

const HeroImage: FC<{ src: string }> = ({ src }) => {
  return (
    <Image 
      src={src} 
      width={541} 
      height={673} 
      alt="hero" 
      loading="lazy"
      className="rounded-[13px] bg-blue-300" 
    />
  );
};

const HeroCTA: FC<{ text: string; link: string }> = ({ text, link }) => {
  return (
    <Link href={link}>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg">
        {text}
      </button>
    </Link>
  );
};

const HeroFeature: FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="w-full sm:w-1/2 xl:w-1/3 p-6 sm:p-12">
      <h3 className="font-montserrat text-black text-xl sm:text-2xl not-italic font-medium leading-[103.3%] tracking-[-0.5px] sm:tracking-[-0.75px]">
        {title}
      </h3>
      <p className="font-montserrat text-black text-lg sm:text-xl not-italic font-normal leading-[103.3%] tracking-[-0.5px] sm:tracking-[-0.75px]">
        {description}
      </p>
    </div>
  );
};

const HeroContent: FC<{ title: string; subtitle: string; callToAction: string; callToActionLink: string }> = ({
  title,
  subtitle,
  callToAction,
  callToActionLink,
}) => {
  return (
    <div className="flex-1 mb-16 sm:mb-0">
      <h2 className="text-4xl sm:text-7xl font-medium leading-tight tracking-tight mb-8">
        {title}
      </h2>
      <p className="text-xl sm:text-3xl font-normal leading-relaxed mb-10">
        {subtitle}
      </p>
      <HeroCTA text={callToAction} link={callToActionLink} />
    </div>
  );
};

const HeroFeatures: FC = () => {
  const features = [
    {
      title: "Automate time-consuming research",
      description: "Less time searching and more time teaching—let us handle the heavy lifting.",
    },
    {
      title: "Build a real-time knowledge base",
      description: "Everything you need at your fingertips, organized and updated in real-time.",
    },
    {
      title: "Create lectures, assignments, and review materials on the fly.",
      description: "Transform ideas into ready-to-use material in moments, not hours.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center mt-16 sm:mt-36">
      {features.map((feature, index) => (
        <HeroFeature key={index} {...feature} />
      ))}
    </div>
  );
};

const Hero: FC<HeroProps> = ({ title, subtitle, heroImage, callToAction, callToActionLink }) => {
  return (
    <section className="bg-gray-100 py-16 sm:py-36">
      <div className="container flex flex-wrap justify-between items-center">
        <HeroContent
          title={title}
          subtitle={subtitle}
          callToAction={callToAction}
          callToActionLink={callToActionLink}
        />
        <div className="max-w-[570px] w-full h-full">
          <HeroImage src={heroImage} />
        </div>
        <HeroFeatures />
      </div>
    </section>
  );
};

export default Hero;