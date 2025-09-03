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
              
              {/* 3D Card Effect for Main Heading */}
              <div className="card-3d-parent">
                <div className="card-3d">
                  <div className="card-3d-glass"></div>
                  <div className="card-3d-content">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                      CONNECTING
                      <br />
                      <span className="text-[hsl(var(--brand-orange))]">CHINA AND DUBAI TO KENYA,</span>
                      <br />
                      ONE SHIPMENT AT A TIME
                    </h1>
                  </div>
                  
                  {/* Decorative circles */}
                  <div className="card-3d-logo">
                    <span className="card-3d-circle card-3d-circle1"></span>
                    <span className="card-3d-circle card-3d-circle2"></span>
                    <span className="card-3d-circle card-3d-circle3"></span>
                    <span className="card-3d-circle card-3d-circle4"></span>
                    <span className="card-3d-circle card-3d-circle5">
                      <Globe className="w-5 h-5 text-white" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
              Your trusted partner in international logistics. From Guangzhou to Nairobi, 
              from Shenzhen to Mombasa, Dubai to Kenya — we deliver with speed, safety, and reliability.
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
                className="text-lg px-8 py-4 h-auto bg-[hsl(var(--brand-navy))] text-white hover:border-white hover:text-black"
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

      <style jsx>{`
        .card-3d-parent {
          width: 100%;
          max-width: 800px;
          height: 400px;
          perspective: 1000px;
          margin: 2rem 0;
        }

        .card-3d {
          height: 100%;
          border-radius: 30px;
          background: transparent;
          transition: all 0.5s ease-in-out;
          transform-style: preserve-3d;
          box-shadow: 0 20px 40px -10px rgba(40, 42, 115, 0.3),
                      0 10px 25px -5px rgba(40, 42, 115, 0.2);
          position: relative;
        }

        .card-3d-glass {
          transform-style: preserve-3d;
          position: absolute;
          inset: 0;
          border-radius: 30px;
          background: rgba(40, 42, 115, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transform: translate3d(0px, 0px, 25px);
          transition: all 0.5s ease-in-out;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
                      0 8px 32px rgba(40, 42, 115, 0.2);
        }

        .card-3d-content {
          padding: 50px 40px;
          transform: translate3d(0, 0, 26px);
          position: relative;
          z-index: 2;
        }

        .card-3d-logo {
          position: absolute;
          right: 0;
          top: 0;
          transform-style: preserve-3d;
        }

        .card-3d-circle {
          display: block;
          position: absolute;
          aspect-ratio: 1;
          border-radius: 50%;
          top: 0;
          right: 0;
          box-shadow: 0 8px 25px rgba(40, 42, 115, 0.3);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          background: rgba(40, 42, 115, 0.15);
          transition: all 0.5s ease-in-out;
        }

        .card-3d-circle1 {
          width: 120px;
          transform: translate3d(0, 0, 20px);
          top: 8px;
          right: 8px;
        }

        .card-3d-circle2 {
          width: 100px;
          transform: translate3d(0, 0, 40px);
          top: 18px;
          right: 18px;
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          transition-delay: 0.2s;
        }

        .card-3d-circle3 {
          width: 80px;
          transform: translate3d(0, 0, 60px);
          top: 28px;
          right: 28px;
          transition-delay: 0.4s;
        }

        .card-3d-circle4 {
          width: 60px;
          transform: translate3d(0, 0, 80px);
          top: 38px;
          right: 38px;
          transition-delay: 0.6s;
        }

        .card-3d-circle5 {
          width: 40px;
          transform: translate3d(0, 0, 100px);
          top: 48px;
          right: 48px;
          display: grid;
          place-content: center;
          transition-delay: 0.8s;
          background: rgba(40, 42, 115, 0.3);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
        }

        .card-3d-parent:hover .card-3d {
          transform: rotate3d(1, 1, 0, 15deg);
          box-shadow: 0 30px 60px -20px rgba(40, 42, 115, 0.4),
                      0 15px 35px -5px rgba(40, 42, 115, 0.3);
        }

        .card-3d-parent:hover .card-3d .card-3d-glass {
          background: rgba(40, 42, 115, 0.15);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
        }

        .card-3d-parent:hover .card-3d .card-3d-circle2 {
          transform: translate3d(0, 0, 60px);
        }

        .card-3d-parent:hover .card-3d .card-3d-circle3 {
          transform: translate3d(0, 0, 80px);
        }

        .card-3d-parent:hover .card-3d .card-3d-circle4 {
          transform: translate3d(0, 0, 100px);
        }

        .card-3d-parent:hover .card-3d .card-3d-circle5 {
          transform: translate3d(0, 0, 120px);
          background: rgba(40, 42, 115, 0.4);
        }

        @media (max-width: 768px) {
          .card-3d-parent {
            height: 350px;
          }
          
          .card-3d-content {
            padding: 30px 20px;
          }
          
          .card-3d-circle1 { width: 80px; }
          .card-3d-circle2 { width: 65px; top: 15px; right: 15px; }
          .card-3d-circle3 { width: 50px; top: 22px; right: 22px; }
          .card-3d-circle4 { width: 35px; top: 30px; right: 30px; }
          .card-3d-circle5 { width: 25px; top: 35px; right: 35px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;