import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Clock, MapPin } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { services } from "@/data/services";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="relative text-white py-32 md:py-40">
        <div className="absolute inset-0 z-0">
          <Image sizes="100vw"  quality={100}  
            src="/images/services-hero.jpg" 
            alt="Services Background" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <FadeIn className="container mx-auto px-4 md:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Service Schedule</h1>
          <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span>Services</span>
          </div>
        </FadeIn>
      </section>

      <section className="py-20">
        <FadeIn className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-serif">Join Us This Sunday</h2>
            <p className="text-gray-600 text-lg">We have multiple services to accommodate your schedule and preferences. You are welcome to join any of our gatherings.</p>
          </div>

          <div className="space-y-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row items-stretch border-l-8 hover:shadow-xl transition-shadow group" style={{ borderLeftColor: 'var(--color-primary)' }}>
                <div className="md:w-1/4 h-48 md:h-auto relative overflow-hidden">
                  <Image quality={100}  
                    src={service.image} 
                    alt={service.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500 font-medium">
                    <div className="flex items-center gap-1">
                      <Clock size={16} className="text-primary" />
                      {service.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} className="text-secondary" />
                      {service.location}
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 md:w-1/4 flex items-center justify-start md:justify-end border-t md:border-t-0 md:border-l border-gray-100 bg-gray-50/50">
                  <Link href={`/services/${service.slug}`} className={`${service.color} hover:opacity-90 text-white px-6 py-2 rounded-full font-semibold transition-all group-hover:scale-105 duration-300 w-full md:w-auto text-center inline-block`}>
                    Plan a Visit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
