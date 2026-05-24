import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <section className="relative text-white pt-32 pb-48 md:pt-40 md:pb-56">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/contact-hero.jpg" 
            alt="Contact Background" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-black/60 to-black/30" />
        </div>
        <FadeIn className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif drop-shadow-2xl">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-medium drop-shadow-md">
            We would love to hear from you. Whether you need prayer, have a question, or want to join us.
          </p>
        </FadeIn>
      </section>

      <section className="relative z-20 -mt-24 pb-20">
        <FadeIn className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            
            {/* Sticky Contact Info Sidebar */}
            <div className="lg:w-1/3 w-full lg:sticky lg:top-32 space-y-8">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                
                <h3 className="text-2xl font-bold text-gray-900 mb-8 font-serif relative z-10">Contact Details</h3>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-secondary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-1">Our Location</h4>
                      <p className="text-gray-900 font-medium">Church Road, Westlands<br/>Nairobi, Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-1">Phone</h4>
                      <p className="text-gray-900 font-medium">+254 700 000 000<br/>+254 722 000 000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-1">Email</h4>
                      <p className="text-gray-900 font-medium break-all">info@holytrinitynairobi.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-green-600">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-1">Office Hours</h4>
                      <p className="text-gray-900 font-medium">Mon - Fri: 8:00 AM - 5:00 PM<br/>Sat: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-xl h-64 relative group hidden lg:block border border-gray-100">
                <Image 
                  src="/images/contact-building.jpg" 
                  alt="Church Building" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-6 left-6 right-6 text-white font-bold text-lg drop-shadow-md">
                  We look forward to hosting you.
                </div>
              </div>
            </div>

            {/* Contact Form Area */}
            <div className="lg:w-2/3 w-full">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Send us a Message</h2>
                  <p className="text-gray-500 text-lg">
                    Fill out the form below and our team will get back to you as soon as possible.
                  </p>
                </div>
                
                {/* 
                  Note: Using the existing ContactForm component. 
                  It is beautifully designed with lucide-react icons and loading states.
                */}
                <ContactForm />
              </div>
            </div>

          </div>
        </FadeIn>
      </section>
    </div>
  );
}
