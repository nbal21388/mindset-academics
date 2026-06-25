import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/[.08] dark:border-white/[.145] mt-auto py-8 px-6">
      <div className="flex flex-col sm:flex-row justify-between gap-6">
        
        {/* Branding */}
        <div className="flex flex-col gap-2">
          <span className="text-blue-400 font-bold text-lg">Mindset Academics</span>
          <span className="text-sm text-gray-500">Unlocking potential through personalised tutoring.</span>
        </div>

        {/* Links */}
        <div className="flex flex-row gap-6 text-sm">
          <Link href="/reviews" className="text-gray-500 hover:underline">Reviews</Link>
          <Link href="/faq" className="text-gray-500 hover:underline">FAQ</Link>
          <Link href="/blog" className="text-gray-500 hover:underline">Blog</Link>
          <Link href="/safeguarding" className="text-gray-500 hover:underline">Safeguarding</Link>
          <Link href="/contact" className="text-gray-500 hover:underline">Contact</Link>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Mindset Academics. All rights reserved.
      </div>
    </footer>
  );
}