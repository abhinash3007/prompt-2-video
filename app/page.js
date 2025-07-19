import Image from "next/image";
import Hero from "./_component/Hero";
import Header from "./_component/Header";

export default function Home() {
  return (
    <div className="md:p-16 lg-p-24 xl-36">
      <Header />
      <Hero />
    </div>
  );
}
