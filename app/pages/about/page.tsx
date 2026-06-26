import InfoCard from "@/app/components/InfoCard";
import NavBar from "@/app/components/NavBar";
import RippleBackground from "@/app/components/RippleBackground";



export default function About() {
    return (
    <div className="relative z-10 flex flex-col flex-1 items-center justify-center font-sans">  
            <NavBar /> 
                <h1 className="text-4xl font-bold text-center text-black dark:text-zinc-50 m-6">
                    About Us
                </h1>
            <InfoCard>
                <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    We are a group of 4 tutors
                </p>
            </InfoCard>
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
                <InfoCard>
                    <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 border-green-800 border-2">
                        Nehaal
                    </p>
                </InfoCard>
                <InfoCard>
                    <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400  border-rose-900 border-2">
                        Amaal
                    </p>
                </InfoCard>
                <InfoCard>
                    <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 border-violet-950 border-2">
                        Amber
                    </p>
                </InfoCard>
                <InfoCard>
                    <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 border-sky-900 border-2">
                        Nadia
                    </p>
                </InfoCard>
            </div>
        </div>
    );
}