import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    return (
      <div className="flex flex-row items-center gap-6 text-center z-10 pt-4 px-6">
        {/* sm:items-start sm:text-left */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo - Mindset Academics"
            width={40}
            height={40}
          />
          <span className="text-blue-400 font-bold text-xl">Mindset Academics</span>
        </Link>
        <Link href="/" className="text-pink-300 hover:underline">
          Home
        </Link>
        <Link href="/pages/about" className="text-orange-300 hover:underline">
          About Us
        </Link>
        <Link href="/pages/subjects" className="text-yellow-300 hover:underline">
          Subjects
        </Link>
        <Link href="/pages/blog" className="text-green-300 hover:underline">
          Blog
        </Link>
        <Link href="/pages/contact" className="text-red-300  hover:underline">
          Contact Us
        </Link>
        <Link href="/pages/testimonials" className="text-blue-300 hover:underline">
          Testimonials
        </Link>
        <Link href="/pages/faq" className="text-purple-300 hover:underline">
          FAQ
        </Link>
      </div>
    )}