"use client";

import { useState } from "react";
import { User, Mail, Phone, MessageSquare, ChevronDown } from "lucide-react";

export default function JoinForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 text-green-800 p-8 rounded-xl text-center shadow-inner flex flex-col justify-center items-center space-y-4 min-h-[400px] animate-in fade-in duration-500">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-3xl mb-2">
          ✓
        </div>
        <h3 className="text-3xl font-bold font-serif text-green-700">Thank You!</h3>
        <p className="text-green-600 font-medium">Your request has been received. We will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
          <User size={18} />
        </div>
        <input 
          type="text" 
          placeholder="Full Name" 
          required 
          className="w-full bg-white border border-gray-200 text-gray-800 pl-10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all shadow-sm placeholder-gray-400" 
        />
      </div>
      
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
          <Mail size={18} />
        </div>
        <input 
          type="email" 
          placeholder="Email Address" 
          required 
          className="w-full bg-white border border-gray-200 text-gray-800 pl-10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all shadow-sm placeholder-gray-400" 
        />
      </div>
      
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
          <Phone size={18} />
        </div>
        <input 
          type="tel" 
          placeholder="Phone Number" 
          className="w-full bg-white border border-gray-200 text-gray-800 pl-10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all shadow-sm placeholder-gray-400" 
        />
      </div>
      
      <div className="relative group">
        <select defaultValue="" className="w-full bg-white border border-gray-200 text-gray-600 p-3 pl-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all shadow-sm appearance-none cursor-pointer">
          <option value="" disabled>Select Service of Interest</option>
          <option value="swahili">Swahili Service</option>
          <option value="english">English Service</option>
          <option value="youth">Youth Service</option>
        </select>
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
          <ChevronDown size={18} />
        </div>
      </div>
      
      <div className="relative group">
        <div className="absolute top-3 left-0 pl-3 pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
          <MessageSquare size={18} />
        </div>
        <textarea 
          placeholder="How can we help you?" 
          rows={3} 
          className="w-full bg-white border border-gray-200 text-gray-800 pl-10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all shadow-sm placeholder-gray-400 resize-none"
        ></textarea>
      </div>
      
      <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md flex justify-center items-center gap-2">
        <span>JOIN OUR COMMUNITY</span>
      </button>
    </form>
  );
}
