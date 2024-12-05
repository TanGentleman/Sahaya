import Header from "@/components/Header";
import Footer, { FooterProps } from "@/components/home/Footer";
import type { NextPage } from "next";

const Acknowledgements: NextPage = () => {
  const footerProps: FooterProps = {
    slogan: "Learning doesn't have to be scary!",
    description: "TextbookAI is here to help you learn better and faster.",
    copyrightNotice: "© 2024 Sahaya LLC",
  };

  return (
    <main>
      <Header />
      <section className="container py-16">
        <h1 className="text-4xl font-medium mb-8">Acknowledgements</h1>
        <div className="prose max-w-none">
          {/* Content will go here */}
        </div>
      </section>
      <Footer {...footerProps} />
    </main>
  );
};

export default Acknowledgements;
