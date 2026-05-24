"use client";

import { useState } from "react";
import { Smartphone, Building, CreditCard, Copy, CheckCircle2, ShieldCheck, ChevronRight } from "lucide-react";

type TabId = "mpesa" | "bank" | "online";

export default function GiveTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("mpesa");
  const [copied, setCopied] = useState("");

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Tabs Header */}
      <div className="flex flex-col sm:flex-row border-b border-gray-100">
        <button 
          onClick={() => setActiveTab("mpesa")}
          className={`flex-1 flex items-center justify-center gap-2 p-6 font-bold text-lg transition-all ${
            activeTab === "mpesa" 
              ? "bg-green-50 text-green-700 border-b-4 border-green-500" 
              : "text-gray-500 hover:bg-gray-50 border-b-4 border-transparent"
          }`}
        >
          <Smartphone size={20} /> M-PESA
        </button>
        <button 
          onClick={() => setActiveTab("bank")}
          className={`flex-1 flex items-center justify-center gap-2 p-6 font-bold text-lg transition-all ${
            activeTab === "bank" 
              ? "bg-primary/10 text-primary border-b-4 border-primary" 
              : "text-gray-500 hover:bg-gray-50 border-b-4 border-transparent"
          }`}
        >
          <Building size={20} /> Bank Transfer
        </button>
        <button 
          onClick={() => setActiveTab("online")}
          className={`flex-1 flex items-center justify-center gap-2 p-6 font-bold text-lg transition-all ${
            activeTab === "online" 
              ? "bg-secondary/10 text-secondary border-b-4 border-secondary" 
              : "text-gray-500 hover:bg-gray-50 border-b-4 border-transparent"
          }`}
        >
          <CreditCard size={20} /> Card / Online
        </button>
      </div>

      {/* Tabs Content */}
      <div className="p-8 md:p-12 min-h-[350px] flex flex-col justify-center">
        
        {/* M-PESA Content */}
        {activeTab === "mpesa" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-lg mx-auto w-full text-center">
            <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">Give via M-PESA Paybill</h3>
            <p className="text-gray-600 mb-8">Secure, instant, and convenient giving directly from your phone.</p>
            
            <div className="space-y-4 text-left">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Paybill Number</div>
                  <div className="text-3xl font-bold text-green-600">888 888</div>
                </div>
                <button 
                  onClick={() => handleCopy("888888", "paybill")}
                  className="p-3 rounded-xl bg-white border border-gray-200 text-gray-500 hover:text-green-600 hover:border-green-300 transition-colors"
                  title="Copy Paybill"
                >
                  {copied === "paybill" ? <CheckCircle2 className="text-green-600" /> : <Copy size={20} />}
                </button>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Account Number</div>
                  <div className="text-xl font-bold text-gray-800">Tithe / Offering</div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500 font-medium bg-green-50 text-green-700 py-3 rounded-full">
              <ShieldCheck size={18} /> Safaricom Secured Transaction
            </div>
          </div>
        )}

        {/* Bank Content */}
        {activeTab === "bank" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-lg mx-auto w-full text-center">
            <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">Direct Bank Transfer</h3>
            <p className="text-gray-600 mb-8">Set up a standing order or do a direct EFT to the church account.</p>
            
            <div className="space-y-4 text-left">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Bank Name</div>
                <div className="text-lg font-bold text-gray-800">Kenya Commercial Bank</div>
                <div className="text-gray-500 text-sm mt-1">Sarit Centre Branch</div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Account Name & Number</div>
                  <div className="text-gray-600 font-medium mb-1">Holy Trinity Church</div>
                  <div className="text-2xl font-bold text-primary">1122 3344 55</div>
                </div>
                <button 
                  onClick={() => handleCopy("1122334455", "bank")}
                  className="p-3 rounded-xl bg-white border border-gray-200 text-gray-500 hover:text-primary hover:border-primary/30 transition-colors"
                  title="Copy Account Number"
                >
                  {copied === "bank" ? <CheckCircle2 className="text-primary" /> : <Copy size={20} />}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Online Content */}
        {activeTab === "online" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-lg mx-auto w-full text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-secondary">
              <CreditCard size={40} />
            </div>
            <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">Secure Online Giving</h3>
            <p className="text-gray-600 mb-8">Give instantly from anywhere in the world using your Debit/Credit card. Supports all major international cards.</p>
            
            <button className="w-full bg-secondary hover:bg-secondary-hover text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg flex justify-center items-center gap-2 text-lg">
              Donate via Portal <ChevronRight size={20} />
            </button>
            
            <div className="mt-8 flex items-center justify-center gap-4 text-gray-400">
              <ShieldCheck size={24} className="text-green-500" />
              <span className="text-sm font-medium">256-bit SSL Encrypted • PCI DSS Compliant</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
