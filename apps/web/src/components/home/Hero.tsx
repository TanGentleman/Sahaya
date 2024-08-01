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
    <div className="relative max-w-[570px] w-full h-[380px] sm:h-[680px]">
      <div className="absolute inset-0 flex justify-center items-center bg-blue-300 rounded-[13px]">
        <Image src={src} width={541} height={673} alt="hero" loading="lazy" />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
          <p className="text-sm">Placeholder</p>
        </div>
      </div>
    </div>
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

const Hero: FC<HeroProps> = ({ title, subtitle, heroImage, callToAction, callToActionLink }) => {
  return (
    <section className="bg-gray-100 py-16 sm:py-36">
      <div className="container flex flex-wrap justify-between items-center">
        <div className="flex-1 mb-16 sm:mb-0">
          <h2 className="text-4xl sm:text-7xl font-medium leading-tight tracking-tight mb-8">
            {title}
          </h2>
          <p className="text-xl sm:text-3xl font-normal leading-relaxed mb-10">
            {subtitle}
          </p>
          <HeroCTA text={callToAction} link={callToActionLink} />
        </div>
        <div className="max-w-[570px] w-full h-full">
          <HeroImage src={heroImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;