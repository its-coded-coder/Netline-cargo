import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";

interface ContactProps {
  onGetQuote: () => void;
}

const Contact = ({ onGetQuote }: ContactProps) => {
  const offices = [
    {
      city: "Nairobi",
      country: "Kenya",
      address: "4th Floor, Suite No.8, Al-Amin Shopping Mall",
      contacts: [
        { name: "Abdinoor", phone: "0729 540 555" },
        { name: "Feisal", phone: "0722 638 006" },
        { name: "Sharif", phone: "0795 689 000" },
        { name: "Abshir", phone: "0705 366 537" },
      ],
      mainPhone: "+254799 999 964 / +254799 999 965",
      email: "netlinedxb2014@gmail.com"
    },
    {
      city: "Dubai",
      country: "UAE",
      address: "Office No.1098, First Floor, Dubai Towers, Baniyas Square, Dubai-UAE",
      contacts: [
        { name: "Sharif", phone: "+971 58 914 3868" }
      ],
      email: "netlinedxb2014@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(var(--brand-navy))] mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to ship? Contact our team for personalized logistics solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Contact */}
          <Card className="lg:col-span-1 border-0 shadow-lg">
            <CardHeader className="text-center bg-gradient-to-br from-[hsl(var(--brand-navy))] to-[hsl(var(--brand-navy))]/80 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Quick Contact</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="text-center space-y-4">
                <Button 
                  onClick={onGetQuote} 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                >
                  Get Instant Quote
                </Button>
                <p className="text-sm text-muted-foreground">
                  Get a competitive quote within 24 hours
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[hsl(var(--brand-orange))]" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-sm text-muted-foreground">+254799 999 964</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[hsl(var(--brand-orange))]" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-sm text-muted-foreground">netlinedxb2014@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[hsl(var(--brand-orange))]" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri: 8AM-6PM EAT</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Office Locations */}
          <div className="lg:col-span-2 space-y-6">
            {offices.map((office, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="bg-muted/50">
                  <CardTitle className="flex items-center gap-2 text-[hsl(var(--brand-navy))]">
                    <MapPin className="h-5 w-5 text-[hsl(var(--brand-orange))]" />
                    {office.city}, {office.country}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-start gap-2 mb-4">
                        <Building className="h-5 w-5 text-[hsl(var(--brand-orange))] mt-1" />
                        <p className="text-sm">{office.address}</p>
                      </div>
                      
                      {office.mainPhone && (
                        <div className="flex items-center gap-2 mb-2">
                          <Phone className="h-4 w-4 text-[hsl(var(--brand-orange))]" />
                          <p className="text-sm font-medium">{office.mainPhone}</p>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-[hsl(var(--brand-orange))]" />
                        <p className="text-sm">{office.email}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-[hsl(var(--brand-navy))]">
                        Direct Contacts
                      </h4>
                      <div className="space-y-2">
                        {office.contacts.map((contact, contactIndex) => (
                          <div key={contactIndex} className="flex justify-between text-sm">
                            <span>{contact.name}:</span>
                            <span className="font-medium">{contact.phone}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-[hsl(var(--brand-navy))] to-[hsl(var(--brand-navy))]/80 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Ship Your Cargo?
          </h3>
          <p className="text-xl mb-8 text-gray-200">
            Join hundreds of satisfied customers who trust us with their China-Kenya logistics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={onGetQuote} variant="hero" size="lg">
              Get Quote Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:#1f1969 text-[hsl(var(--brand-navy))]"
            >
              Call: +254799 999 964
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;