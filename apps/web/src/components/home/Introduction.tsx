import Image from "next/image";

const Introduction = () => {
  return (
    <section id="Introduction" className="relative py-16 px-2 md:px-0">
      <div className="container">
        <h2 className="text-black text-3xl sm:text-[57px] not-italic font-medium leading-[90.3%] tracking-[-1.425px] font-montserrat text-center pb-[46px] sm:pb-[87px]">
          Welcome to YourTextbook
        </h2>
        <p className="font-montserrat pb-2 text-black text-[17px] sm:text-3xl not-italic font-normal leading-[90.3%] tracking-[-0.75px] text-center">
          Revolutionize your studying with AI-powered textbooks. Get instant answers, personalized learning, and a smarter way to study.
        </p>
        <Image
          src={"/images/logo.png"}
          width={103}
          height={131}
          alt="textbook"
          className="mx-auto"
        />
        <p className="text-center text-gray-500 text-sm mt-2">Image of a textbook</p>
      </div>
    </section>
  );
};

export default Introduction;