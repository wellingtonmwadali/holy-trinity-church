"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 text-green-800 p-8 rounded-2xl text-center shadow-inner h-full flex flex-col justify-center items-center space-y-4 min-h-[400px] border border-green-100">
        <div className="text-5xl mb-4">✨</div>
        <h3 className="text-3xl font-bold font-serif mb-2">Message Sent</h3>
        <p className="text-lg">Thank you for reaching out to Holy Trinity Church.<br/>Our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
          <input type="text" required className="w-full bg-background border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
          <input type="text" required className="w-full bg-background border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <input type="email" required className="w-full bg-background border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
        <input type="text" required className="w-full bg-background border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea rows={6} required className="w-full bg-background border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"></textarea>
      </div>
      <button type="submit" className="bg-secondary hover:bg-secondary-hover text-white font-bold py-4 px-10 rounded-xl transition-colors w-full md:w-auto shadow-md">
        Send Message
      </button>
    </form>
  );
}
