import Header from "@/components/Header";
import Footer, { FooterProps } from "@/components/home/Footer";
import type { NextPage } from "next";
import Image from "next/image";

const Events: NextPage = () => {
  const footerProps: FooterProps = {
    slogan: "Join us!",
    description: "We're always looking for new opportunities to connect with educators.",
    copyrightNotice: "© 2024 Sahaya LLC",
  };

  return (
    <main>
      <Header />
      <section className="container py-16">
        <h1 className="text-4xl font-medium mb-8">Events</h1>
        <div className="prose max-w-none">
          <div className="relative w-full max-w-2xl">
            <Image
              src="/images/poster.jpg"
              width={1024}
              height={576}
              alt="Events poster"
              className="rounded-[17px] shadow-xl"
            />
          </div>
        </div>
      </section>
      <Footer {...footerProps} />
    </main>
  );
};

export default Events;