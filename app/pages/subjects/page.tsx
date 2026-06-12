
import InfoCard from "@/app/components/InfoCard";
import NavBar from "@/app/components/NavBar";
import RippleBackground from "@/app/components/RippleBackground";

export default function Subjects() {
    return (
    <div className="relative z-10 flex flex-col flex-1 items-center justify-center font-sans">  
            <NavBar />
                <h1 className="text-4xl font-bold text-center text-black dark:text-zinc-50 m-6">
                    Subjects
                </h1>
            <InfoCard>
                <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    We offer a wide range of subjects to cater to the diverse interests and academic needs of our students. 
                    Our subjects include Mathematics, Science, English, History, Geography, and more. 
                    Each subject is designed to provide comprehensive coverage of the curriculum while also fostering critical thinking and problem-solving skills. 
                    Whether you're looking for help with homework, preparing for exams, or seeking enrichment opportunities, our subject resources are here to support your learning journey.
                </p>
            </InfoCard>
        </div>
    );
}