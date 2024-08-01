import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg_image">
      <div className="container py-16 sm:py-36 px-6 sm:px-0">
        <div className="flex sm:flex-nowrap flex-wrap justify-between items-center max-h-[690px] h-full">
          <div className="">
            <h2 className="font-montserrat pb-7 sm:pb-[26px] text-black text-[44px] sm:text-[75px] not-italic font-medium leading-[111.3%] tracking-[-1.1px] sm:tracking-[-1.875px]">
              Unlock the full potential of your textbooks
            </h2>
            <p className="font-montserrat sm:pb-16 max-w-[680px] text-black text-xl sm:text-3xl not-italic font-normal leading-[103.3%] tracking-[-0.5px] sm:tracking-[-0.75px] pb-11">
              Ask questions, get answers, and simplify studying with our AI-powered interface
            </p>
            <Link href={"/upload-textbook"}>
              <button className="button gap-2.5 px-8 py-4 font-montserrat text-white text-xl sm:text-3xl not-italic font-semibold leading-[90.3%] tracking-[-0.5px] sm:tracking-[-0.75px]">
                Try it now
              </button>
            </Link>
          </div>
          <div className="max-w-[570px] w-full h-full">
            <div className="relative max-w-[570px] w-full h-[380px] sm:h-[680px]">
              <div className="absolute z-10 inset-0 flex justify-center items-center bg-[#0983DF99] opacity-40 blur-[102px] rounded-[673px]">
                <Image
                  src={"/images/hero_image_bg.svg"}
                  width={541}
                  height={673}
                  alt="hero"
                  className="w-[344px] sm:w-[541px] "
                />
              </div>
              <div className=" absolute z-50 inset-0 flex justify-center items-center">
                <Image
                  src={"/images/hero.png"}
                  width={561}
                  height={456}
                  alt="hero"
                  className="w-[357px] sm:w-[561px]"
                />
              </div>
            </div>
          </div>
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