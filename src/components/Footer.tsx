import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex gap-6 mb-8">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
            aria-label="Visit our Facebook page"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
            aria-label="Visit our Twitter profile"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
            aria-label="Visit our Instagram profile"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
            aria-label="Visit our YouTube channel"
          >
            <FaYoutube size={20} />
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base font-medium mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="/about" className="hover:text-white transition-colors">
            About Us
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="/ministries" className="hover:text-white transition-colors">
            Ministries
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="/sermons" className="hover:text-white transition-colors">
            Sermons
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="/events" className="hover:text-white transition-colors">
            Events
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="/give" className="hover:text-white transition-colors">
            Give
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500 text-center">
          <p>
            Copyright &copy; {new Date().getFullYear()} Holy Trinity Church
            Nairobi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
