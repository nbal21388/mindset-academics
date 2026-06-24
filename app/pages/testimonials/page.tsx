import InfoCard from "@/app/components/InfoCard";
import NavBar from "@/app/components/NavBar";
import RippleBackground from "@/app/components/RippleBackground";

export default function Testimonials() {
    return (
    <div className="relative z-10 flex flex-col flex-1 items-center justify-center font-sans"> 
            <NavBar />
            <h1 className="text-4xl font-bold text-center text-black dark:text-zinc-50 m-6">
                Testimonials
            </h1>
            <InfoCard>
                <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    Hear from our students and parents about their experiences with our educational resources and support services. Our testimonials showcase the positive impact we've had on our students' academic journeys and the satisfaction of their families.
                </p>
            </InfoCard>
        </div>
    );
}