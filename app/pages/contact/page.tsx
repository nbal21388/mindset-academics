import NavBar from "@/app/components/NavBar";
import RippleBackground from "@/app/components/RippleBackground";

export default function Contact() {
    return (
    <>
          <RippleBackground />

    <div className="relative z-10 flex flex-col flex-1 items-center justify-center font-sans">  
            <NavBar />
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
                <h1 className="text-4xl font-bold text-center text-black dark:text-zinc-50">
                    Contact Us
                </h1>
                <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    If you have any questions, feedback, or inquiries about our educational resources and support services, please don't hesitate to contact us. 
                    You can reach us through the following channels:
                    Email: ---
                    Phone: ---
                    Address: ---
                    We value your input and are here to assist you in any way we can. Whether you're a student, parent, or educator, we look forward to hearing from you and helping you on your academic journey.
                </p>
            </main>
        </div>
        </>
    );
}