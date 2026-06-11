import NavBar from "@/app/components/NavBar";
import RippleBackground from "@/app/components/RippleBackground";

 export default function Blog() {
    return (
    <>
          <RippleBackground />

    <div className="relative z-10 flex flex-col flex-1 items-center justify-center font-sans"> 
            <NavBar />
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
                <h1 className="text-4xl font-bold text-center text-black dark:text-zinc-50">
                    Prices
                </h1>
                <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    At Mindset Academics, we offer competitive pricing for our educational resources and support services. 
                    Our pricing structure is designed to provide value to our customers while ensuring that we can continue to deliver high-quality content and assistance. 
                    We offer various subscription plans and one-time purchase options to cater to different needs and budgets.
                    Whether you're looking for study guides, tutoring services, or access to our exclusive content, we have pricing options that can accommodate your requirements.
                    We also offer discounts for students, educators, and bulk purchases. 
                    For more detailed information on our pricing and subscription plans, please visit our website or contact our customer support team.
                </p>
            </main>
        </div>
        </>
    );
}