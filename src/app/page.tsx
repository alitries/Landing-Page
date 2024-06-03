import { Navbar, LandingPage, Footer } from "./components/index";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white h-[100%]">
      <Navbar />
      {/* <Image src="/images/Star.png" alt="Logo" width={50} height={50} /> */}
      <LandingPage />
      <Footer />
    </main>
  );
}
