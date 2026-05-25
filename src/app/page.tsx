import Image from "next/image";
import Link from "next/link";
import { PlayCircle, CheckCircle2, ChevronRight, MessageCircle, Heart, Users, Music } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import JoinForm from "@/components/JoinForm";
import ServiceCard from "@/components/ServiceCard";
import PastorCard from "@/components/PastorCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <Image 
          src="/images/hero.jpg" 
          alt="Holy Trinity Church Hero" 
          fill 
          priority 
          quality={100}
          sizes="100vw"
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-0" />

        <FadeIn className="relative z-10 container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
            Welcome to Holy Trinity Church Nairobi
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium max-w-2xl">
            A welcoming Anglican community anchored in faith, love, and service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/about"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/50 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              I'm New Here <ChevronRight size={18} />
            </Link>
            <Link
              href="/give"
              className="bg-secondary hover:bg-secondary-hover text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              Give Online <ChevronRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Services Cards */}
      <section className="container mx-auto px-4 md:px-8 -mt-20 relative z-20 mb-16">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-2xl">
            <ServiceCard 
              bgColorClass="bg-primary" 
              imageSrc="/images/communion-new.jpg" 
              imageAlt="Holy Communion"
            >
              <Heart className="mb-4 text-white/90" size={32} />
              <h2 className="text-3xl font-bold mb-2 font-serif">Holy Communion</h2>
              <p className="text-white/90 text-lg mb-8">Every First Sunday</p>
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold tracking-wider hover:text-secondary transition-colors uppercase">
                Plan a Visit <ChevronRight size={16} />
              </Link>
            </ServiceCard>
            <ServiceCard 
              bgColorClass="bg-secondary" 
              imageSrc="/images/children.jpg" 
              imageAlt="Youth"
            >
              <Users className="mb-4 text-white/90" size={32} />
              <h2 className="text-3xl font-bold mb-4 font-serif">Children, Teens & Youths</h2>
              <ul className="space-y-4 text-white/90 mb-8">
                <li>Children Services at 9:30 AM in the main sanctuary</li>
                <li>Saturday service also available</li>
                <li>Youth and Teens service at 9:30 AM in the tent</li>
              </ul>
              <Link href="/ministries" className="inline-flex items-center gap-2 text-sm font-bold tracking-wider hover:text-primary transition-colors uppercase">
                Plan a Visit <ChevronRight size={16} />
              </Link>
            </ServiceCard>
            <ServiceCard 
              bgColorClass="bg-slate-900" 
              imageSrc="/images/community.jpg" 
              imageAlt="Contemporary Service"
              imageOpacityClass="opacity-40"
            >
              <Music className="mb-4 text-white/90" size={32} />
              <h2 className="text-3xl font-bold mb-4 font-serif">Contemporary Service</h2>
              <p className="mb-2 text-lg">Third service: 11.30 AM</p>
              <p className="mb-8 text-white/70">Dynamic worship and Word for all ages.</p>
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold tracking-wider hover:text-secondary transition-colors uppercase">
                Plan a Visit <ChevronRight size={16} />
              </Link>
            </ServiceCard>
          </div>
        </FadeIn>
      </section>

      {/* History Section */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        <Image 
          src="/images/history.jpg" 
          alt="History Background" 
          fill 
          className="object-cover opacity-60 z-0"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeIn className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight font-serif drop-shadow-lg">
                A testimony to God's enduring faithfulness since 1935
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed font-medium">
                Holy Trinity Church Nairobi has served generations of worshippers for nearly a century. From its humble beginnings as a small chapel established by early missionaries, to its present identity as a vibrant urban parish, the church continues to play a significant role in the mission of spreading the Gospel in Kenya.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-white hover:text-secondary font-bold text-lg group transition-colors">
                <span className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center group-hover:bg-secondary-hover transition-colors shadow-lg">
                  <ChevronRight size={20} />
                </span>
                DISCOVER OUR HISTORY
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl relative border-8 border-white/50 dark:border-gray-800/50">
                <Image 
                  src="/images/history.jpg" 
                  alt="Historic Church" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105" 
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Join Community Form Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/worship.jpg" 
            alt="Church Service" 
            fill
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 flex justify-end">
          <FadeIn className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl w-full max-w-md">
            <h3 className="text-2xl font-bold text-primary mb-6 font-serif">Be Part of Our Community</h3>
            <JoinForm />
          </FadeIn>
        </div>
      </section>

      {/* Sermons Section */}
      <section className="bg-primary-dark py-20 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-2 font-serif text-secondary">OUR SERMONS</h2>
            <p className="mb-12 text-gray-300">Latest from our YouTube channel & manually added sermons</p>
            
            <div className="max-w-3xl mx-auto bg-black rounded-2xl overflow-hidden relative shadow-2xl group cursor-pointer h-80 block">
              <Image 
                src="/images/worship.jpg" 
                alt="Sermon Thumbnail" 
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover opacity-70 group-hover:scale-105 duration-700 transition-transform" 
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                  <PlayCircle size={60} className="text-white drop-shadow-md" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-left p-4 bg-black/40 backdrop-blur-sm rounded-xl">
                <h3 className="text-2xl font-bold drop-shadow-md font-serif text-white">Holy Trinity Sunday Service</h3>
                <p className="drop-shadow-md text-gray-200">Sunday Service - 1st Sunday of the Month</p>
              </div>
            </div>
            
            <div className="mt-12">
              <Link href="/sermons" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold px-8 py-3 rounded-full transition-colors inline-block">
                View More &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sunday School Section */}
      <section className="bg-[#1a1a1a] py-20 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h4 className="text-secondary font-bold mb-2 tracking-wider uppercase">Holy Trinity Sunday School</h4>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight font-serif">
                Why Enroll Your Child At Holy Trinity Sunday School?
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-secondary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Rooted in Faith, Growing in Grace</h3>
                    <p className="text-gray-400">We cultivate a deep, personal relationship with God through age-appropriate Bible lessons, prayer, and worship. Children learn to apply biblical principles to their daily lives.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-secondary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Building Character Through Biblical Principles</h3>
                    <p className="text-gray-400">Our curriculum integrates core Christian values: kindness, honesty, forgiveness, and service—into every activity. Through stories, role-playing, and practical lessons.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 w-full h-64 max-w-lg group">
                <Image 
                  src="/images/children.jpg" 
                  alt="Sunday School" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
                  <PlayCircle size={60} className="text-white drop-shadow-lg cursor-pointer hover:scale-110 transition-transform" />
                </div>
              </div>
              <Link href="/contact" className="bg-secondary hover:bg-secondary-hover text-white font-bold py-3 px-8 rounded-md transition-colors inline-block">
                ENROLL YOUR CHILD
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pastoral Team Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary mb-12 font-serif text-center md:text-left">Meet Our Pastoral Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <PastorCard 
                imageSrc="/images/pastor1.jpg" 
                name="Rev. Dr. John Kamau" 
                title="Vicar"
              />
              <PastorCard 
                imageSrc="/images/pastor2.jpg" 
                name="Rev. Grace Wanjiku" 
                title="Curate"
              />
              <PastorCard 
                imageSrc="/images/pastor3.jpg" 
                name="Pastor Peter Ochieng" 
                title="Youth Pastor"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
