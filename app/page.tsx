import Image from "next/image";
import NavBar from "./components/NavBar";
import InfoCard from "./components/InfoCard";
import RippleBackground from "./components/RippleBackground";

export default function Home() {
  return (
    <div className="relative z-10 flex flex-col flex-1 items-center font-sans">
      <NavBar />
      <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 align-center item-center m-6">

        WELCOME TO MINDSET ACADEMICS!
      </h1>
      <InfoCard>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          [insert image etc.]
        </p>
      </InfoCard>
      <InfoCard>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          other info about us
        </div>
      </InfoCard>
    </div>
  );
}