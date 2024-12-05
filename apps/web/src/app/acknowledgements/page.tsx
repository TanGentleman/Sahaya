import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="bg-[#EDEDED] h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          We're Manit and Tanuj, two friends who believe that educators are the backbone of our society. As alumni of Saratoga High School and Carnegie Mellon University, we've had the privilege of witnessing the transformative power of education firsthand. We're driven to make a positive impact on the world. Through conversations with educators, we discovered a pressing need for innovative technology that supports their important work. That's why we founded Sahaya, with a mission to empower educators through accessible and cutting-edge tools. We're passionate about bridging the gap between technology and education, and we're committed to making a difference in the lives of students and teachers everywhere.
        </p>
        <div className="flex justify-center my-8">
          <img 
            src="/images/founders.jpg" 
            alt="Manit and Tanuj, founders of Sahaya"
            className="rounded-lg shadow-lg max-w-2xl w-full"
          />
        </div>
      </div>
    </main>
  );
}
