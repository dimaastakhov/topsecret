import Nav from "../components/nav";
import Container from "../components/container";
import Hero from "./index/hero";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="bg-black flex min-h-screen md:mr-64  xl:mr-96 z-0">
      <div className="absolute top-0 bottom-0 right-0 left-0 overflow-hidden">
        <Image
          alt="background"
          src="/bg.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <Container>
        <Nav />
        <main className="h-full">
          <Hero />
        </main>
        <div className="bg-gray-600 hidden md:block sm:w-64 xl:w-96 fixed top-0 right-0 bottom-0">
          hi
        </div>
      </Container>
    </div>
  );
}
