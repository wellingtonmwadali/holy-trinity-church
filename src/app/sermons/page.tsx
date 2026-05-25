import Link from "next/link";
import Image from "next/image";
import { ChevronRight, PlayCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { sermons } from "@/data/sermons";

export default function Sermons() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="relative text-white py-32 md:py-40">
        <div className="absolute inset-0 z-0">
          <Image sizes="100vw"  quality={100}  
            src="/images/sermons-hero.jpg" 
            alt="Sermons Background" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <FadeIn className="container mx-auto px-4 md:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Sermons</h1>
          <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span>Sermons</span>
          </div>
        </FadeIn>
      </section>

      <section className="py-20">
        <FadeIn className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((sermon, idx) => (
              <Link href={`/sermons/${sermon.slug}`} key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all group border border-gray-100 flex flex-col h-full">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image quality={100}  
                    src={sermon.image} 
                    alt={sermon.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    <div className="bg-white/20 p-4 rounded-full transform group-hover:scale-110 transition-transform">
                      <PlayCircle size={48} className="text-white drop-shadow-xl" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">{sermon.series}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif group-hover:text-primary transition-colors">{sermon.title}</h3>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500 font-medium">
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span>{sermon.preacher}</span>
                    <span>{sermon.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-primary text-white px-10 py-4 rounded-full hover:bg-primary-dark transition-all font-bold shadow-lg hover:shadow-xl hover:-translate-y-1">
              Load More Sermons
            </button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
