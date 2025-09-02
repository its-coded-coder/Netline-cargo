import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Ship, 
  Plane, 
  Truck, 
  Package, 
  Shield, 
  Clock, 
  Globe, 
  FileText,
  MapPin,
  DollarSign
} from "lucide-react";
import servicesImage from "@/assets/services-bg.jpg";

interface ServicesProps {
  onGetQuote: () => void;
}

const Services = ({ onGetQuote }: ServicesProps) => {
  const services = [
    {
      icon: Ship,
      title: "Sea Freight",
      description: "Cost-effective ocean shipping with FCL and LCL options from major Chinese ports to Mombasa.",
      features: ["20ft & 40ft Containers", "Door-to-Port Service", "Customs Clearance", "15-25 Days Transit"]
    },
    {
      icon: Plane,
      title: "Air Freight",
      description: "Fast and reliable air cargo services connecting China's major cities to Nairobi.",
      features: ["Express Delivery", "Temperature Control", "Dangerous Goods", "3-5 Days Transit"]
    },
    {
      icon: Truck,
      title: "Road Transport",
      description: "Last-mile delivery and domestic distribution throughout Kenya from our Nairobi office.",
      features: ["Door-to-Door", "Same Day Delivery", "Cargo Tracking", "Secure Transport"]
    },
    {
      icon: Package,
      title: "Warehousing",
      description: "Secure storage facilities in both China and Kenya with inventory management.",
      features: ["Climate Control", "24/7 Security", "Inventory Management", "Pick & Pack"]
    },
    {
      icon: FileText,
      title: "Customs Clearance",
      description: "Expert handling of all import/export documentation and customs procedures.",
      features: ["Documentation", "Tax Optimization", "Compliance", "Fast Processing"]
    },
    {
      icon: Shield,
      title: "Cargo Insurance",
      description: "Comprehensive insurance coverage to protect your valuable shipments.",
      features: ["Full Coverage", "Claims Support", "Risk Assessment", "Peace of Mind"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Established partnerships in China and Kenya for seamless logistics"
    },
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "Optimized routes and processes for faster delivery times"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Competitive pricing without compromising on service quality"
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Deep understanding of both Chinese and Kenyan markets"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(var(--brand-navy))] mb-4">
            Our Logistics Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive shipping and logistics solutions tailored for China-Kenya trade routes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[hsl(var(--brand-orange))] to-[hsl(var(--brand-orange-light))] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[hsl(var(--brand-navy))]">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-[hsl(var(--brand-orange))] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img 
              src={servicesImage} 
              alt="Modern logistics operations" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[hsl(var(--brand-navy))]/85"></div>
          </div>
          
          <div className="relative z-10 p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Why Choose Netline Cargo?</h3>
              <p className="text-xl text-gray-200">
                Your trusted logistics partner with proven expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[hsl(var(--brand-orange))] rounded-full flex items-center justify-center">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button onClick={onGetQuote} variant="hero" size="lg">
                Get Your Quote Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;