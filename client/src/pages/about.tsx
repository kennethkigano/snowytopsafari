import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Landmark, Heart, Leaf, Users, ShieldCheck, Globe } from "lucide-react";

export default function About() {
  // Community partners with logo info
  const partners = [
    { name: "Binti Mwangaza", logo: "/images/partners/binti-mwangaza.jpg" },
    { name: "NeoWood Studios", logo: "/images/partners/neowood-studios.png" },
    { name: "Imara Rescue Centre", logo: null, noLogo: true },
    { name: "Spreader and Sprayer Testing Ltd", logo: "/images/partners/spread-and-sprayer.png" },
    { name: "Daraja Academy", logo: null, noLogo: true }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Header Section */}
      <div className="bg-brand-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About <span className="text-brand-orange">SnowyTop Safaris</span></h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Redefining tourism to benefit local communities and create meaningful travel experiences
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-brand-navy">About <span className="text-brand-orange">Us</span> – SnowyTop Safaris Ltd</h2>
          <p className="text-lg mb-6">
            SnowyTop Safaris Ltd is a premier community-based tourism company in Kenya, dedicated to sustainable, ethical, and regenerative travel across Africa. We're redefining what it means to go on safari—shifting away from mass tourism toward responsible travel that uplifts local communities, preserves the environment, and respects cultural heritage.
          </p>
          <p className="text-lg mb-6">
            We believe tourism should be a force for good. That's why we design experiences that directly benefit local people—empowering them through employment, cultural exchange, and community-driven development. Our travelers go beyond sightseeing to engage meaningfully with the people and places they visit, forming real connections while leaving a positive footprint.
          </p>
          <p className="text-lg mb-6">
            Our eco-tourism and conservation-focused safaris give guests the opportunity to actively support wildlife protection, including anti-poaching efforts and habitat preservation. By integrating eco-friendly practices into all aspects of our operations, we aim to reduce human-wildlife conflict and protect Kenya's rich biodiversity for future generations.
          </p>
          <p className="text-lg mb-6">
            We partner with grassroots organizations such as Binti Mwangaza, Imara Rescue Centre, and Daraja Academy, investing 10% of our proceeds back into community projects focused on education, conservation, and empowerment. We also support local guides, artisans, and eco-lodges, ensuring that tourism dollars stay within the communities we serve.
          </p>
          <p className="text-lg mb-6">
            Our programs include volunteer placements, cultural immersions, homestays, and hands-on conservation activities. Whether you're helping in a community garden, joining a cultural celebration, or shadowing anti-poaching rangers, you'll be part of something meaningful.
          </p>
          <p className="text-lg mb-6">
            We collaborate with trusted industry partners and are proudly listed on travel platforms such as <a href="https://www.safaribookings.com/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">SafariBookings.com</a>, where you can learn more about our tours, accommodations, and values.
          </p>
          <p className="text-lg mb-6">
            Thank you for choosing SnowyTop Safaris Ltd. With us, your journey becomes part of a larger story—one of purpose, connection, and lasting impact.
          </p>
          <p className="text-xl font-medium text-center italic mb-6">
            Travel with purpose. Explore with heart.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/community">
              <Button className="px-8 bg-brand-orange hover:bg-brand-orange/90">Learn About Our Community Impact</Button>
            </Link>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-navy">OUR <span className="text-brand-orange">VALUES</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-brand-navy/10 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-brand-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-navy">Sustainability</h3>
                <p>
                  We are committed to eco-friendly travel practices that minimize environmental impact and protect natural habitats. 
                  Our tours are designed to support conservation efforts and promote responsible tourism across Kenya.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-orange">Community Empowerment</h3>
                <p>
                  We believe in giving back to the communities that make our journeys meaningful. 
                  That's why 10% of our profits go directly into community-driven initiatives that create 
                  long-term impact and opportunity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-brand-navy/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-brand-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-navy">Authenticity</h3>
                <p>
                  Our experiences are rooted in real stories, cultures, and traditions. 
                  We connect travelers with local communities for meaningful, immersive adventures 
                  that celebrate Kenya's diverse heritage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-orange">Education & Youth Development</h3>
                <p>
                  We invest in the next generation through school support, mentorship programs, and scholarships. 
                  By empowering youth with knowledge and opportunity, we help build a stronger, brighter future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Giving Back Section */}
        <div className="bg-brand-navy/5 p-8 rounded-xl mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-navy">Giving <span className="text-brand-orange">Back</span></h2>
            <p className="text-lg mb-8 text-center">
              SnowyTop Safaris Ltd is committed to sustainable and ethical travel experiences in Kenya and Africa. 
              We ensure that 10% of our proceeds go back to supporting local communities through partnerships with 
              trusted organizations including Binti Mwangaza, NeoWood Studios, Imara Rescue Centre, Spreader and Sprayer Testing Ltd, and Daraja Academy.
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-center text-brand-navy">Our Community <span className="text-brand-orange">Partners</span></h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
                {partners.map((partner, index) => (
                  <div key={index} className="text-center w-full">
                    <div className="bg-white border border-slate-100 shadow-sm p-4 rounded-lg mb-2 h-32 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:border-brand-orange/20">
                      {partner.logo && !partner.noLogo ? (
                        <div className="h-20 flex items-center justify-center mb-2">
                          <img 
                            src={partner.logo} 
                            alt={`${partner.name} logo`} 
                            className="max-h-16 max-w-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-brand-navy/10 flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-brand-navy">{partner.name.charAt(0)}</span>
                        </div>
                      )}
                      <span className="text-sm font-medium text-center mt-2">{partner.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-navy">Our <span className="text-brand-orange">Approach</span></h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 h-16 w-16 rounded-full bg-brand-navy/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-brand-navy">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-brand-navy">Community-Centered Tourism</h3>
                <p className="text-lg">
                  We work closely with villages, community groups, and conservation organizations to create tourism 
                  experiences that benefit local people directly. Every safari we organize supports eco-lodges, 
                  local guides, and artisans.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 h-16 w-16 rounded-full bg-brand-orange/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-brand-orange">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-brand-orange">Meaningful Engagement</h3>
                <p className="text-lg">
                  Our tours offer opportunities for travelers to get involved in community-driven initiatives, 
                  cultural activities, and conservation projects. These hands-on experiences foster cultural 
                  appreciation and understanding.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 h-16 w-16 rounded-full bg-brand-navy/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-brand-navy">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-brand-navy">Eco-Friendly Practices</h3>
                <p className="text-lg">
                  By implementing eco-friendly tourism models, we aim to reduce human-wildlife conflict and preserve 
                  both the natural and cultural resources of Africa. Our goal is to provide experiences that support 
                  long-term conservation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/itineraries">
              <Button 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white"
                size="lg"
              >
                Explore Our Safaris
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="border-brand-navy text-brand-navy hover:bg-brand-navy/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}