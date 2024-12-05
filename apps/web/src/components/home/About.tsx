import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="container py-16 px-2 md:px-0">
        <p className="text-black text-[17px] sm:text-3xl not-italic font-medium leading-[90.3%] tracking-[-0.75px] text-center font-montserrat pb-2 sm:pb-[18px]">
          About Us
        </p>
        <h3 className="text-black text-3xl sm:text-[57px] not-italic font-medium leading-[90.3%] tracking-[-1.425px] font-montserrat text-center pb-[46px] sm:pb-[87px]">
          Meet the Founders
        </h3>

        <div className="flex flex-col items-center">
          <p className="text-black text-lg sm:text-2xl not-italic font-normal leading-relaxed tracking-[-0.5px] text-center max-w-4xl mb-12">
            We&apos;re Manit and Tanuj, two friends who believe that educators are the backbone of our society. As graduates of Saratoga High School and Carnegie Mellon University, we&apos;re driven to make a positive impact on the world. Through conversations with educators, we discovered a pressing need for innovative technology that supports their important work. That&apos;s why we founded Sahaya, with a mission to empower educators through accessible and cutting-edge tools. We&apos;re passionate about bridging the gap between technology and education, and we&apos;re committed to making a difference in the lives of students and teachers everywhere.
          </p>
          
          <div className="relative w-full max-w-2xl">
            <Image
              src="/images/founders.jpg"
              width={1024}
              height={576}
              alt="Manit and Tanuj, founders of Sahaya"
              className="rounded-[17px] shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
