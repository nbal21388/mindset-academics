import InfoCard from "@/app/components/InfoCard";
import NavBar from "@/app/components/NavBar";
import RippleBackground from "@/app/components/RippleBackground";

export default function prices() {
    return (
    <div className="relative z-10 flex flex-col flex-1 items-center justify-center font-sans"> 
            <NavBar />
                <h1 className="text-4xl font-bold text-center text-black dark:text-zinc-50 m-6">
                    Our prices
                </h1>
            <InfoCard>
                <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    Here are our prices. If you have any questions, please don't hesitate to contact us.
                </p>
            </InfoCard>
        </div>
    );
}
                