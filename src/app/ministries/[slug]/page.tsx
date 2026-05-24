import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User, Mail, ChevronRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { ministries } from "@/data/ministries";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ministries.map((ministry) => ({
    slug: ministry.slug,
  }));
}

export default async function MinistryDetail({ params }: Props) {
  const { slug } = await params;
  const ministry = ministries.find((m) => m.slug === slug);

  if (!ministry) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <section className="relative text-white py-32 md:py-48">
        <div className="absolute inset-0 z-0">
          <Image 
            src={ministry.image} 
            alt={ministry.title} 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </div>
        <FadeIn className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">
          <Link href="/ministries" className="inline-flex items-center gap-2 text-sm font-bold tracking-wider hover:text-secondary transition-colors uppercase mb-8 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/20 shadow-lg">
            <ArrowLeft size={16} /> All Ministries
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif drop-shadow-xl">{ministry.title}</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl font-medium drop-shadow-md">
            {ministry.description}
          </p>
        </FadeIn>
      </section>

      <section className="py-20 -mt-24 relative z-20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <FadeIn className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="lg:w-2/3 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Ministry Vision & Purpose</h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p className="leading-relaxed text-lg whitespace-pre-wrap">
                  {ministry.longDescription}
                </p>
              </div>

              <div className="mt-12 pt-10 border-t border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Get Involved</h3>
                <p className="text-gray-600 mb-8">
                  We are always looking for passionate individuals to join our community. Whether you want to attend a meeting, serve as a volunteer, or just learn more, we would love to connect with you.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-md">
                  Join This Ministry <ChevronRight size={18} />
                </Link>
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="lg:w-1/3 space-y-8">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif border-b border-gray-100 pb-4">Meeting Details</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                      <Clock size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">When We Meet</div>
                      <div className="font-semibold text-gray-800">{ministry.meetingTime}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-3xl shadow-xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <h3 className="text-xl font-bold mb-6 font-serif border-b border-white/20 pb-4 relative z-10">Ministry Leadership</h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <User size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/60 uppercase tracking-wider mb-1">Ministry Leader</div>
                      <div className="font-semibold text-lg">{ministry.leader}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/60 uppercase tracking-wider mb-1">Contact Email</div>
                      <a href={`mailto:${ministry.contactEmail}`} className="font-semibold text-white hover:text-secondary transition-colors break-all">
                        {ministry.contactEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </FadeIn>
        </div>
      </section>
    </div>
  );
}
