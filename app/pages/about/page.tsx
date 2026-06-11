import NavBar from "@/app/components/NavBar";
import RippleBackground from "@/app/components/RippleBackground";



export default function About() {
    return (
    <>
          <RippleBackground />

    <div className="relative z-10 flex flex-col flex-1 items-center justify-center font-sans">  
            <NavBar /> 
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
                <h1 className="text-4xl font-bold text-center text-black dark:text-zinc-50">
                    About Us
                </h1>
                <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    At Mindset Academics, we are dedicated to providing high-quality educational resources and support to students of all ages. 
                    Our mission is to empower learners with the knowledge and skills they need to succeed academically and beyond. 
                    We believe in fostering a growth mindset, encouraging curiosity, and promoting lifelong learning. 
                    Whether you're a student looking for study tips, a parent seeking guidance, or an educator searching for innovative teaching strategies, 
                    Mindset Academics is here to help you achieve your goals.
                </p>
            </main>
        </div>
        </>
    );
}