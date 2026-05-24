import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PlayCircle, Clock, Calendar, User, ArrowLeft, Share2, Download, BookOpen } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { sermons } from "@/data/sermons";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return sermons.map((sermon) => ({
    slug: sermon.slug,
  }));
}

export default async function SermonDetail({ params }: Props) {
  const { slug } = await params;
  const sermon = sermons.find((s) => s.slug === slug);

  if (!sermon) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Cinematic Player Section */}
      <section className="bg-black pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <Link href="/sermons" className="inline-flex items-center gap-2 text-sm font-medium hover:text-white text-gray-400 transition-colors uppercase mb-6">
            <ArrowLeft size={16} /> Back to Sermons
          </Link>
          
          {/* Mock Video Player */}
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group cursor-pointer">
            <Image 
              src={sermon.image} 
              alt={sermon.title} 
              fill 
              className="object-cover opacity-60 group-hover:opacity-40 transition-opacity" 
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary/90 text-white p-5 rounded-full backdrop-blur-md transform group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(15,23,42,0.5)]">
                <PlayCircle size={64} />
              </div>
            </div>
            {/* Player Controls Mock */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-4">
              <div className="text-white text-sm font-medium">0:00 / {sermon.duration}</div>
              <div className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                <div className="w-0 h-full bg-secondary"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Details */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10 pb-10 border-b border-gray-100">
              <div>
                <div className="text-sm font-bold text-secondary uppercase tracking-wider mb-4 bg-secondary/10 inline-block px-4 py-2 rounded-full">
                  Series: {sermon.series}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6 leading-tight">
                  {sermon.title}
                </h1>
                <div className="flex flex-wrap gap-6 text-gray-500 font-medium text-sm">
                  <div className="flex items-center gap-2">
                    <User size={18} className="text-primary" />
                    {sermon.preacher}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-primary" />
                    {sermon.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-primary" />
                    {sermon.duration}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-primary transition-colors border border-gray-200 shadow-sm" aria-label="Share">
                  <Share2 size={20} />
                </button>
                <button className="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-primary transition-colors border border-gray-200 shadow-sm" aria-label="Download Audio">
                  <Download size={20} />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold font-serif text-gray-900 mb-4">Sermon Summary</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {sermon.summary}
                </p>
              </div>
              
              <div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-2 mb-4 text-primary font-bold">
                    <BookOpen size={20} />
                    <h3>Key Scriptures</h3>
                  </div>
                  <ul className="space-y-3">
                    {sermon.scriptures.map((scripture, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-secondary mt-1">•</span>
                        <span className="font-medium hover:text-primary cursor-pointer transition-colors">{scripture}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
