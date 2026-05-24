import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Calendar, ArrowLeft, CalendarPlus, User } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { events } from "@/data/events";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetail({ params }: Props) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Immersive Hero */}
      <section className="relative text-white h-[60vh] min-h-[400px]">
        <div className="absolute inset-0 z-0">
          <Image 
            src={event.image} 
            alt={event.title} 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      <section className="py-12 -mt-32 relative z-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <Link href="/events" className="inline-flex items-center gap-2 text-sm font-bold tracking-wider hover:text-primary transition-colors uppercase mb-6 text-white drop-shadow-md">
            <ArrowLeft size={16} /> Back to Events
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Content Area */}
            <div className="lg:w-2/3 bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-sm font-bold text-secondary uppercase tracking-wider mb-4 bg-secondary/10 inline-block px-4 py-2 rounded-full">
                {event.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-gray-900 leading-tight">
                {event.title}
              </h1>
              
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p className="text-xl font-medium text-gray-800 leading-relaxed">
                  {event.description}
                </p>
                <div className="w-16 h-1 bg-primary rounded-full my-8"></div>
                <p className="leading-relaxed whitespace-pre-wrap">
                  {event.longDescription}
                </p>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:w-1/3 w-full sticky top-32">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-primary p-6 text-white text-center">
                  <h3 className="text-2xl font-bold font-serif">Event Details</h3>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-50 p-3 rounded-xl text-primary">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Date</div>
                      <div className="font-medium text-gray-900">{event.date}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-50 p-3 rounded-xl text-primary">
                      <Clock size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Time</div>
                      <div className="font-medium text-gray-900">{event.time}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-50 p-3 rounded-xl text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Location</div>
                      <div className="font-medium text-gray-900">{event.location}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-50 p-3 rounded-xl text-primary">
                      <User size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Organizer</div>
                      <div className="font-medium text-gray-900">{event.organizer}</div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 space-y-4">
                    <Link href="/contact" className="w-full bg-secondary hover:bg-secondary-hover text-white py-4 rounded-xl font-bold transition-all hover:scale-[1.02] shadow-md flex justify-center items-center gap-2">
                      Register Now
                    </Link>
                    <button className="w-full bg-white border-2 border-gray-200 hover:border-primary hover:text-primary text-gray-600 py-4 rounded-xl font-bold transition-all flex justify-center items-center gap-2">
                      <CalendarPlus size={18} /> Add to Calendar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
