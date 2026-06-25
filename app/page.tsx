import Image from "next/image";
import NavBar from "./components/NavBar";
import InfoCard from "./components/InfoCard";
import Footer from "./components/Footer";
import RippleBackground from "./components/RippleBackground";

export default function Home() {
  return (
    <div className="relative z-10 flex flex-col flex-1 items-center font-sans">
      <NavBar />
      <main className="flex flex-1 w-full flex-col items-center justify-center py-32 px-16">
        <Image
          src="/logoText.png"
          alt="Logo - Mindset Academics"
          width={250}
          height={20}
          className = "mb-8"
        />
        {/* <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          WELCOME TO MINDSET ACADEMICS!
        </h1> */}
      <InfoCard>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <p className="max-w-md text-lg leading-8 text-darkgrey-600 dark:text-darkgrey-400">
            Tutors with a mission to empower learners with the knowledge and skills they need to succeed academically and beyond. 
          </p>
        </div>
        <div>
          {/* className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]" */}
          <a
            className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="./pages/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="flex"
              src="/binoculars.png"
              alt="Explore"
              width={16}
              height={16}
            />
            Explore
          </a>
        </div>
      </InfoCard>
      </main>
      <Footer/>
    </div>
  );
}
