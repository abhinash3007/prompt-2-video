import Image from "next/image";
import Hero from "./_component/Hero";
import Header from "./_component/Header";

export default function Home() {
  return (
    <div className="md:px-16 lg:px-24 xl:px-36">
      <Header />
      <Hero />
    </div>
  );
}
