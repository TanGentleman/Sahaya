import Header from "@/components/Header";
// import Logo from "@/components/common/Logo";
import Introduction from "@/components/home/Introduction";

export default function Home() {
  return (
    <main className="bg-[#EDEDED] h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Acknowledgements</h1>
        <p className="text-lg mb-4">
          Special thanks to all my friends for their support in making this project a reality.
        </p>
        <p className="text-lg mb-4">
          Your contributions and encouragement have been invaluable.
        </p>
        <p className="text-lg mb-4">
          I am grateful for your time, expertise, and friendship.
        </p>
      </div>
    </main>
  );
}
