import Image from "next/image";

const benefits = [
  {
    title: "Effortless Questioning",
    description: "Ask questions and get instant answers from your textbook",
    image: "/images/star.svg",
  },
  {
    title: "Personalized Learning",
    description: "Get tailored learning recommendations based on your studying style",
    image: "/images/star.svg",
  },
  {
    title: "AI-Powered Insights",
    description: "Gain valuable insights from your textbook with AI-powered analytics",
    image: "/images/star.svg",
  },
  {
    title: "Seamless Accessibility",
    description: "Access your textbook from anywhere, on any device",
    image: "/images/star.svg",
  },
];

const Benefits = () => {
  return (
    <section id="Benefits" className="relative pointer-events-none">
      <Image
        src={"/images/blue-circle.svg"}
        width={503}
        height={531}
        alt=""
        className="absolute hidden sm:block -left-40 -top-48 h-[531px]"
      />
      <div className="container py-16 px-2 md:px-0">
        <p className="text-black text-[17px] sm:text-3xl not-italic font-medium leading-[90.3%] tracking-[-0.75px] text-center font-montserrat pb-2 sm:pb-[18px]">
          Benefits
        </p>
        <h3 className=" text-black text-3xl sm:text-[57px] not-italic font-medium leading-[90.3%] tracking-[-1.425px] font-montserrat text-center pb-[46px] sm:pb-[87px]">
          Why Choose YourTextbook
        </h3>

        <div className="relative">
          <div className="hidden sm:flex justify-between items-center absolute inset-0 -z-10">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <Image
                  src="/images/cricle.svg"
                  width={183}
                  height={193}
                  alt="line"
                  key={index}
                />
              ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 z-10 ">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-2 sm:gap-7 bg-white items-center border rounded-[17px] py-4 px-2 sm:py-12 sm:px-6 border-solid border-[#B8B5B5] shadow-xl"
              >
                <div className=" min-w-16 sm:min-w-28">
                  <Image
                    src={benefit.image}
                    width={100}
                    height={100}
                    alt="benefit"
                    className="sm:w-[100px] w-[58px]"
                  />
                  <p className="text-center text-gray-500 text-sm mt-2">Placeholder</p>
                </div>
                <div className="">
                  <h4 className="text-black text-[24px] sm:text-[42px] not-italic font-medium leading-[90.3%] tracking-[-1.05px] pb-2 sm:pb-6 font-montserrat">
                    {benefit.title}
                  </h4>
                  <p className="font-montserrat pb-2 text-black text-[17px] sm:text-3xl not-italic font-normal leading-[90.3%] tracking-[-0.75px]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;