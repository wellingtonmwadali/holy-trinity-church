import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Target, Sparkles, BookOpen } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Cinematic Hero */}
      <section className="relative text-white pt-32 pb-48 md:pt-48 md:pb-64">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/about-hero.jpg" 
            alt="Church Background" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-black/50 to-black/30" />
        </div>
        <FadeIn className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif drop-shadow-2xl">Our Story</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-medium drop-shadow-md">
            A century of faith, community, and unyielding grace in the heart of Nairobi.
          </p>
        </FadeIn>
      </section>

      {/* History Section - Overlapping Hero */}
      <section className="relative z-20 -mt-32 pb-20">
        <FadeIn className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm mb-4">
                <BookOpen size={18} /> Our History
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-serif leading-tight">
                Established in 1935, built on a foundation of faith.
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Holy Trinity Church Nairobi has served generations of worshippers in Kenya for nearly a century. What started as a small children's chapel and community outreach center by early Anglican missionaries has blossomed into a beacon of hope for the city.
                </p>
                <p>
                  By 1960, the community had grown substantially, leading to the construction of our main sanctuary. Over the decades, we have expanded our ministries—establishing a vibrant Sunday School, active youth programs, and massive community outreach initiatives.
                </p>
                <p className="font-medium text-gray-800 border-l-4 border-secondary pl-4 italic">
                  Today, we remain committed to our founding vision: to be a beacon of Christ's light, fostering a community rooted in faith, growing in grace, and serving in love.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-auto">
              <Image 
                src="/images/history.jpg" 
                alt="Historic Church" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:block hidden" />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-gray-50">
        <FadeIn className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Where We Are Going</h2>
            <p className="text-xl text-gray-600">Our mandate is clear. We exist to know Him and make Him known in our generation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group border border-gray-100 flex flex-col h-full">
              <div className="h-72 overflow-hidden relative w-full">
                <Image 
                  src="/images/vision.jpg" 
                  alt="Vision" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg transform group-hover:-translate-y-2 transition-transform">
                  <Sparkles size={32} className="text-secondary" />
                </div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed flex-1">
                  To be a vibrant, Christ-centered community that transforms lives and society through the power of the Gospel.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group border border-gray-100 flex flex-col h-full">
              <div className="h-72 overflow-hidden relative w-full">
                <Image 
                  src="/images/mission.jpg" 
                  alt="Mission" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg transform group-hover:-translate-y-2 transition-transform">
                  <Target size={32} className="text-primary" />
                </div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed flex-1">
                  To equip believers for ministry, proclaim the Good News of Jesus Christ, and demonstrate God's love through practical service to our community in Nairobi and beyond.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
