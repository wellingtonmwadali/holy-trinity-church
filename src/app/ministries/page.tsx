import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Users, Heart, Music, BookOpen } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { ministries } from "@/data/ministries";

const iconMap: Record<string, any> = {
  Users: <Users size={40} className="text-primary mb-4" />,
  Heart: <Heart size={40} className="text-pink-500 mb-4" />,
  Music: <Music size={40} className="text-purple-500 mb-4" />,
  BookOpen: <BookOpen size={40} className="text-secondary mb-4" />
};

export default function Ministries() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="relative text-white py-32 md:py-40">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/ministries-hero.jpg" 
            alt="Ministries Background" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <FadeIn className="container mx-auto px-4 md:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Our Ministries</h1>
          <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span>Ministries</span>
          </div>
        </FadeIn>
      </section>

      <section className="py-20">
        <FadeIn className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {ministries.map((ministry, idx) => (
              <Link href={`/ministries/${ministry.slug}`} key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col sm:flex-row group cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all border border-gray-100 h-full">
                <div className="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden">
                  <Image 
                    src={ministry.image} 
                    alt={ministry.title} 
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                  <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform origin-left">
                    {iconMap[ministry.icon]}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif group-hover:text-primary transition-colors">{ministry.title}</h3>
                  <p className="text-gray-600 mb-6 flex-1 line-clamp-3">{ministry.description}</p>
                  <div className="text-primary font-bold flex items-center gap-1 group-hover:gap-3 transition-all mt-auto uppercase text-sm tracking-wider">
                    Explore Ministry <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
