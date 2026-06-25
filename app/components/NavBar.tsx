import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    return (
      <div className="flex flex-row items-center justify-between z-10 pt-4 px-6">
        {/* sm:items-start sm:text-left */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo - Mindset Academics"
            width={60}
            height={60}
          />
          <span className="text-blue-400 font-bold text-xl">Mindset Academics</span>
        </Link>
        <div className="flex flex-row items-center gap-6">
          <Link href="/" className="text-pink-300 hover:underline">
            Home
          </Link>
          <Link href="/pages/about" className="text-orange-300 hover:underline">
            About Us
          </Link>
          <Link href="/pages/subjects" className="text-yellow-300 hover:underline">
            Subjects
          </Link>
          <Link href="/pages/tutor" className="text-green-300 hover:underline">
            Find a Tutor
          </Link>
          <Link href="/pages/prices" className="text-green-300 hover:underline">
            Prices
          </Link>
          <Link href="/pages/contact" className="text-red-300  hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    )}