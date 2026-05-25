import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Calendar, ArrowLeft } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { services } from "@/data/services";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="relative text-white py-32 md:py-48">
        <div className="absolute inset-0 z-0">
          <Image sizes="100vw"  quality={100}  
            src={service.image} 
            alt={service.name} 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </div>
        <FadeIn className="container mx-auto px-4 md:px-8 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold tracking-wider hover:text-secondary transition-colors uppercase mb-8 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/20">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 font-serif drop-shadow-lg">{service.name}</h1>
          
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg border border-white/20 shadow-lg">
              <Clock size={20} className="text-secondary" />
              {service.time}
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg border border-white/20 shadow-lg">
              <MapPin size={20} className="text-secondary" />
              {service.location}
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg border border-white/20 shadow-lg">
              <Calendar size={20} className="text-secondary" />
              Every Sunday
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn>
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 -mt-32 relative z-20 border-t-8" style={{ borderTopColor: 'var(--color-secondary)' }}>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 font-serif">About This Service</h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
                <p className="text-xl font-medium text-gray-800 leading-relaxed border-l-4 border-primary pl-6 bg-gray-50 py-4 pr-4 rounded-r-lg">
                  {service.description}
                </p>
                <p className="leading-relaxed text-lg">
                  {service.longDescription}
                </p>
              </div>

              <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row gap-6 items-center justify-between bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">Ready to join us?</h3>
                  <p className="text-gray-600">We can't wait to welcome you this Sunday. Let us know you're coming!</p>
                </div>
                <Link href="/contact" className={`${service.color} hover:opacity-90 text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl flex-shrink-0 text-lg`}>
                  Plan Your Visit
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
