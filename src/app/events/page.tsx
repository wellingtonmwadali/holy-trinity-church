import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Clock, MapPin } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { events } from "@/data/events";

export default function Events() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="relative text-white py-32 md:py-40">
        <div className="absolute inset-0 z-0">
          <Image sizes="100vw"  quality={100}  
            src="/images/events-hero.jpg" 
            alt="Events Background" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <FadeIn className="container mx-auto px-4 md:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Upcoming Events</h1>
          <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span>Events</span>
          </div>
        </FadeIn>
      </section>

      <section className="py-20">
        <FadeIn className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="space-y-12">
            {events.map((event, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow border border-gray-100 group relative">
                <Link href={`/events/${event.slug}`} className="absolute inset-0 z-10">
                  <span className="sr-only">View Event Details</span>
                </Link>
                <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                  <Image quality={100}  
                    src={event.image} 
                    alt={event.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary p-3 rounded-xl flex flex-col items-center justify-center shadow-lg">
                    <span className="text-2xl font-extrabold leading-none">{event.date.split(' ')[1].replace(',', '')}</span>
                    <span className="text-sm font-bold uppercase">{event.date.split(' ')[0]}</span>
                  </div>
                </div>
                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                  <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">{event.category}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif group-hover:text-primary transition-colors">{event.title}</h3>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500 font-medium mb-6">
                    <div className="flex items-center gap-1">
                      <Clock size={16} className="text-secondary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} className="text-secondary" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">{event.description}</p>
                  <div className="text-primary font-bold transition-colors flex items-center gap-1 mt-auto group-hover:translate-x-1 duration-300">
                    Event Details <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
