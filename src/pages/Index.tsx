import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import QuoteModal from "@/components/QuoteModal";

const Index = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleGetQuote = () => {
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onGetQuote={handleGetQuote} />
      <Hero onGetQuote={handleGetQuote} />
      <Services onGetQuote={handleGetQuote} />
      <Contact onGetQuote={handleGetQuote} />
      
      <QuoteModal 
        open={isQuoteModalOpen} 
        onOpenChange={setIsQuoteModalOpen} 
      />
      
      {/* Footer */}
      <footer className="bg-[hsl(var(--brand-navy))] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-[hsl(var(--brand-orange))] text-white px-4 py-2 rounded-lg font-bold text-xl mr-3">
              NCL
            </div>
            <div>
              <div className="font-bold text-lg">NETLINE CARGO LIMITED</div>
            </div>
          </div>
          <p className="text-gray-300 mb-2">
            Connecting China to Kenya, One Shipment at a Time
          </p>
          <p className="text-sm text-gray-400">
            © 2024 Netline Cargo Limited. All rights reserved. | 
            <a href="https://www.netlinecargo.com" className="ml-1 hover:text-[hsl(var(--brand-orange))] transition-colors">
              www.netlinecargo.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
