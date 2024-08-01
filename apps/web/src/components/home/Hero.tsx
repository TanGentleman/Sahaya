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
        <div className="flex flex-wrap justify-center items-center mt-16 sm:mt-36">
          <div className="w-full sm:w-1/2 xl:w-1/3 p-6 sm:p-12">
            <h3 className="font-montserrat text-black text-xl sm:text-2xl not-italic font-medium leading-[103.3%] tracking-[-0.5px] sm:tracking-[-0.75px]">
              Effortless question-answering
            </h3>
            <p className="font-montserrat text-black text-lg sm:text-xl not-italic font-normal leading-[103.3%] tracking-[-0.5px] sm:tracking-[-0.75px]">
              Get answers to your questions directly from your textbook
            </p>
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/3 p-6 sm:p-12">
            <h3 className="font-montserrat text-black text-xl sm:text-2xl not-italic font-medium leading-[103.3%] tracking-[-0.5px] sm:tracking-[-0.75px]">
              Automated workflows
            </h3>
            <p className="font-montserrat text-black text-lg sm:text-xl not-italic font-normal leading-[103.3%] tracking-[-0.5px] sm:tracking-[-0.75px]">
              Simplify studying with automated workflows for finding practice problems, summaries, and more
            </p>
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/3 p-6 sm:p-12">
            <h3 className="font-montserrat text-black text-xl sm:text-2xl not-italic font-medium leading-[103.3%] tracking-[-0.5px] sm:tracking-[-0.75px]">
              Personalized learning experience
            </h3>
            <p className="font-montserrat text-black text-lg sm:text-xl not-italic font-normal leading-[103.3%] tracking-[-0.5px] sm:tracking-[-0.75px]">
              Get a tailored learning experience with our AI-powered interface
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;