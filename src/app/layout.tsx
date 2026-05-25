import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Holy Trinity Church Nairobi | A Welcoming Anglican Community",
  description: "Join Holy Trinity Church Nairobi, a vibrant Anglican community in Kenya anchored in faith, love, and service. Discover our ministries, sermons, and events.",
  keywords: "Church, Nairobi, Anglican, Holy Trinity, Kenya, Worship, Sunday Service, Christian, Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110" aria-label="Contact us on WhatsApp">
            <MessageCircle size={30} />
          </a>
        </div>
      </body>
    </html>
  );
}
