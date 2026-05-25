import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Globe, Users, Home } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import GiveTabs from "@/components/GiveTabs";
import FAQAccordion from "@/components/FAQAccordion";

export default function Give() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Interactive Giving UI */}
      <section className="pt-24 pb-48 relative z-20 text-white text-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image sizes="100vw"  quality={100}  
            src="/images/give-hero.jpg" 
            alt="Give Background" 
            fill 
            className="object-cover"
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif drop-shadow-xl text-white">
              Partner With Us
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-medium drop-shadow-md">
              Your generosity enables us to continue our mission of sharing the Gospel and serving our community.
            </p>
          </div>
        </div>
      </section>

      {/* GiveTabs Overlapping the Image */}
      <section className="relative z-30 -mt-32 pb-12">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <FadeIn>
            <GiveTabs />
          </FadeIn>
        </div>
      </section>

      {/* Why We Give / Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">The Impact of Your Giving</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - <span className="text-secondary font-bold">2 Corinthians 9:7</span>
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn className="bg-gray-50 rounded-3xl p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Globe size={36} />
              </div>
              <h3 className="text-2xl font-bold font-serif text-gray-900 mb-4">Global Missions</h3>
              <p className="text-gray-600">A portion of every tithe supports our missionary partners spreading the Gospel across East Africa and beyond.</p>
            </FadeIn>
            <FadeIn className="bg-gray-50 rounded-3xl p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
                <Users size={36} />
              </div>
              <h3 className="text-2xl font-bold font-serif text-gray-900 mb-4">Community Outreach</h3>
              <p className="text-gray-600">Funding our medical camps, feeding programs, and youth sponsorships to be the hands and feet of Jesus locally.</p>
            </FadeIn>
            <FadeIn className="bg-gray-50 rounded-3xl p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Home size={36} />
              </div>
              <h3 className="text-2xl font-bold font-serif text-gray-900 mb-4">Church Operations</h3>
              <p className="text-gray-600">Maintaining our sanctuary, supporting our pastoral team, and ensuring a safe, welcoming environment for worship.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Have a question about giving? We have answers.</p>
          </FadeIn>
          
          <FadeIn>
            <FAQAccordion />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
