import NavBar from "@/app/components/NavBar";
import RippleBackground from "@/app/components/RippleBackground";

export default function faq() {
    return (
    <>
          <RippleBackground />

    <div className="relative z-10 flex flex-col flex-1 items-center justify-center font-sans"> 
            <NavBar />
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
                <h1 className="text-4xl font-bold text-center text-black dark:text-zinc-50">
                    FAQ
                </h1>
                <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    Here are some frequently asked questions about our educational resources and support services. If you have any other questions, please don't hesitate to contact us.
                </p>
            </main>
        </div>
        </>
    );
}
                