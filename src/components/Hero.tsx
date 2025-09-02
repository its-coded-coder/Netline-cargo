import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Truck, Clock } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

interface HeroProps {
  onGetQuote: () => void;
}

const Hero = ({ onGetQuote }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Logistics and cargo transportation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--brand-navy))]/90 via-[hsl(var(--brand-navy))]/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="space-y-2">
              <p className="text-[hsl(var(--brand-orange))] font-semibold text-lg tracking-wide">
                INTERNATIONAL LOGISTICS SOLUTIONS
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                CONNECTING
                <br />
                <span className="text-[hsl(var(--brand-orange))]">CHINA TO KENYA,</span>
                <br />
                ONE SHIPMENT AT A TIME
              </h1>
            </div>
            
            <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
              Your trusted partner in international logistics. From Guangzhou to Nairobi, 
              from Shenzhen to Mombasa — we deliver with speed, safety, and reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onGetQuote} 
                variant="hero" 
                size="lg"
                className="text-lg px-8 py-4 h-auto"
              >
                Get Instant Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-[hsl(var(--brand-navy))]"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Globe className="h-8 w-8 text-[hsl(var(--brand-orange))] mx-auto mb-2" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-gray-300">Successful Shipments</div>
              </div>
              <div className="text-center">
                <Truck className="h-8 w-8 text-[hsl(var(--brand-orange))] mx-auto mb-2" />
                <div className="text-2xl font-bold">99.8%</div>
                <div className="text-sm text-gray-300">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-[hsl(var(--brand-orange))] mx-auto mb-2" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-gray-300">Customer Support</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--brand-orange))]">
                Express Air Freight
              </h3>
              <p className="text-gray-200">
                Fast delivery from major Chinese cities to Nairobi and Mombasa within 3-5 business days.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--brand-orange))]">
                Economic Sea Freight
              </h3>
              <p className="text-gray-200">
                Cost-effective ocean shipping solutions with full container load (FCL) and less than container load (LCL) options.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--brand-orange))]">
                Door-to-Door Service
              </h3>
              <p className="text-gray-200">
                Complete logistics solution including pickup, customs clearance, and final delivery to your destination.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;