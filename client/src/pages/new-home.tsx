import HeroSection from "@/components/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { Itinerary } from "@shared/schema";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import * as React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Landmark, 
  MapPin, 
  Shield, 
  Users, 
  Music, 
  Plane,
  Compass,
  Heart
} from "lucide-react";

export default function Home() {
  const { data: itineraries } = useQuery<Itinerary[]>({
    queryKey: ["/api/itineraries"]
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* About Us Section - First Position */}
        <section id="about-us" className="mb-24">
          <div className="bg-slate-50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* About content - left column */}
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-6 text-brand-navy">About <span className="text-brand-orange">Us</span></h2>
                <div className="space-y-4">
                  <p className="text-lg">
                    At SnowyTop Safaris Ltd, we are redefining tourism to ensure that local communities directly benefit from the industry. Unlike traditional tourism models, we focus on empowering locals by creating experiences that positively impact both the community and travelers.
                  </p>
                  <p>
                    We are dedicated to protecting Kenya's rich cultural heritage and biodiversity by promoting responsible tourism. Our eco-tourism and conservation safaris allow travelers to actively participate in conservation efforts, including anti-poaching programs.
                  </p>
                  <p>
                    As a premier community-based tourism company, we ensure that 10% of our proceeds go back to supporting local communities through partnerships with local NGOs and community organizations.
                  </p>
                </div>
              </div>
              
              {/* About content - right column */}
              <div className="bg-primary/5 p-8 lg:p-12">
                <h3 className="text-2xl font-semibold mb-6 text-brand-navy">Our <span className="text-brand-orange">Mission</span></h3>
                <div className="space-y-4 mb-8">
                  <p>Our mission is to provide authentic and sustainable tourism experiences that showcase the beauty of Kenya while empowering local communities and supporting wildlife conservation efforts.</p>
                  <p>We believe in creating meaningful connections between travelers and local communities, fostering cultural exchange and understanding while ensuring that tourism benefits those who call these magnificent landscapes home.</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link href="/teams">
                    <Button size="lg" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Meet Our Team
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline" className="flex items-center gap-2">
                      <Landmark className="h-4 w-4" />
                      Our Full Story
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Safari Experiences - Second Position */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy relative inline-block">
              Featured <span className="text-brand-orange">Safari</span> Experiences
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-navy via-brand-orange to-brand-navy transform scale-75 opacity-70 rounded-full"></span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our most popular adventures and discover the magic of Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itineraries?.slice(0, 3).map((itinerary, index) => (
              <motion.div
                key={itinerary.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <Card className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl border-none shadow group">
                  <div className="h-48 bg-primary/10 relative overflow-hidden">
                    {/* Use the correct imageUrl property from our schema */}
                    <img 
                      src={itinerary.imageUrl || '/images/placeholder-safari.jpg'} 
                      alt={itinerary.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/images/placeholder-safari.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 bg-brand-orange/90 text-brand-navy text-xs font-semibold px-2 py-1 rounded-full">
                      {itinerary.category || "Safari"}
                    </div>
                  </div>
                  <CardHeader className="pb-2 pt-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <Calendar className="h-3 w-3" />
                      <span>{itinerary.duration} days</span>
                      <span className="text-brand-orange">•</span>
                      <MapPin className="h-3 w-3" />
                      <span>Kenya</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-brand-orange transition-colors duration-300">{itinerary.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4 pt-0 flex-grow">
                    <p className="text-sm line-clamp-2 text-muted-foreground">{itinerary.description}</p>
                  </CardContent>
                  <div className="px-6 pb-6 pt-0">
                    <Link href={`/itineraries/${itinerary.id}`}>
                      <Button size="sm" className="w-full bg-brand-navy hover:bg-brand-navy/90 transition-all duration-300 hover:shadow-md">
                        Explore
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/itineraries">
              <Button variant="outline" className="flex items-center gap-2 group relative overflow-hidden border-brand-navy text-brand-navy px-6 py-2 transition-all duration-300">
                <span className="relative z-10">View All Itineraries</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <span className="absolute inset-0 bg-brand-navy scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"></span>
                <span className="absolute inset-0 bg-brand-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0 opacity-0 group-hover:opacity-20"></span>
              </Button>
            </Link>
          </motion.div>
        </section>
        
        {/* Why Choose Us Section - Third Position */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy relative inline-block">
              Why Choose <span className="text-brand-orange">SnowyTop</span> Safaris
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-navy via-brand-orange to-brand-navy transform scale-75 opacity-70 rounded-full"></span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We combine authentic cultural experiences with unforgettable wildlife encounters, offering sustainable tourism that benefits local communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Card className="border-t-4 border-t-primary h-full transition-all duration-300 hover:border-brand-orange">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors duration-300">
                    <Shield className="h-7 w-7 text-primary group-hover:text-brand-orange transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-orange transition-colors duration-300">Safety Guaranteed</h3>
                  <p className="text-muted-foreground">
                    Experienced guides and well-maintained vehicles ensure your safety throughout your journey.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Card className="border-t-4 border-t-primary h-full transition-all duration-300 hover:border-brand-orange">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors duration-300">
                    <Users className="h-7 w-7 text-primary group-hover:text-brand-orange transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-orange transition-colors duration-300">Local Expertise</h3>
                  <p className="text-muted-foreground">
                    Our local guides provide authentic insights and access to hidden gems off the tourist trail.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Card className="border-t-4 border-t-primary h-full transition-all duration-300 hover:border-brand-orange">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors duration-300">
                    <Heart className="h-7 w-7 text-primary group-hover:text-brand-orange transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-orange transition-colors duration-300">Community Impact</h3>
                  <p className="text-muted-foreground">
                    Your travels directly support local communities and conservation efforts across Kenya.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Card className="border-t-4 border-t-primary h-full transition-all duration-300 hover:border-brand-orange">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors duration-300">
                    <Compass className="h-7 w-7 text-primary group-hover:text-brand-orange transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-orange transition-colors duration-300">Custom Adventures</h3>
                  <p className="text-muted-foreground">
                    Tailor your journey to match your interests, pace, and desired level of adventure.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Wildlife Conservation Section */}
        <section className="mb-24">
          <div className="bg-amber-50 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-4 text-brand-navy">Wildlife <span className="text-brand-orange">Conservation</span></h2>
                <p className="mb-6">
                  Kenya is home to some of the world's most endangered species. Your visit directly contributes to conservation efforts that help protect these magnificent animals for future generations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                      </svg>
                    </div>
                    <span>Support anti-poaching initiatives</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                    </div>
                    <span>Learn about conservation efforts during your safari</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      </svg>
                    </div>
                    <span>Visit protected sanctuaries and conservation areas</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/endangered-species">
                    <Button className="px-8">Discover Endangered Species</Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-amber-500/10 p-8 lg:p-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Kenya's Most Endangered Species</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-1">Mountain Bongo</h4>
                      <p className="text-sm text-muted-foreground">Critically Endangered</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-1">Hirola Antelope</h4>
                      <p className="text-sm text-muted-foreground">Critically Endangered</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-1">Black Rhino</h4>
                      <p className="text-sm text-muted-foreground">Critically Endangered</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-1">Grevy's Zebra</h4>
                      <p className="text-sm text-muted-foreground">Endangered</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    Many of Kenya's iconic species face extinction due to habitat loss, poaching, and human-wildlife conflict. Learn more about these animals and conservation efforts during your visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Community Impact Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-navy">Community <span className="text-brand-orange">Impact</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join us in supporting local communities and sustainable tourism initiatives across Kenya
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center px-6 py-10 border rounded-lg flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M5 22h14"></path>
                  <path d="M5 2h14"></path>
                  <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
                  <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">120+</h3>
              <p className="text-muted-foreground">Community projects funded</p>
            </div>
            
            <div className="text-center px-6 py-10 border rounded-lg flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">$250,000+</h3>
              <p className="text-muted-foreground">Donated to local initiatives</p>
            </div>
            
            <div className="text-center px-6 py-10 border rounded-lg flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">450+</h3>
              <p className="text-muted-foreground">Local jobs created</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-10">
            <Link href="/community">
              <Button size="lg" className="px-8">Get Involved</Button>
            </Link>
          </div>
        </section>
        
        {/* Gallery Highlight Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-navy">Photo <span className="text-brand-orange">Gallery</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore visual memories from our community events, safaris, and conservation initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="relative aspect-video rounded-xl overflow-hidden group">
              <img 
                src="/images/community_event_2.jpg" 
                alt="Binti community event" 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Community Events</p>
                <p className="text-white/80 text-sm">Building schools and supporting local education</p>
              </div>
            </div>
            
            <div className="relative aspect-video rounded-xl overflow-hidden group">
              <img 
                src="/images/conservation_work.jpg" 
                alt="Conservation initiatives" 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Conservation Efforts</p>
                <p className="text-white/80 text-sm">Protecting wildlife and their habitats</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Link href="/gallery">
              <Button variant="outline" className="flex items-center gap-2">
                View Full Gallery
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="mb-24 bg-slate-50 py-16 px-4 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-navy">Trusted by <span className="text-brand-orange">Travelers</span> Worldwide</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what safari enthusiasts are saying about their life-changing experiences with SnowyTop Safaris
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p className="mb-6 italic">
                  "Our safari with SnowyTop Safaris was truly transformative. The emphasis on community involvement and conservation made the experience more meaningful than any other tour we've taken."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-semibold">Emma & James</p>
                    <p className="text-xs text-muted-foreground">United Kingdom</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p className="mb-6 italic">
                  "The local guides were incredible - they knew exactly where to find wildlife and shared so much knowledge about Kenya's culture and conservation efforts. A truly unforgettable experience."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-semibold">Michael T.</p>
                    <p className="text-xs text-muted-foreground">Canada</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p className="mb-6 italic">
                  "As a solo traveler, I felt completely safe and welcomed throughout my journey. The community visit was the highlight - seeing how tourism can positively impact local lives was inspiring."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-semibold">Sarah K.</p>
                    <p className="text-xs text-muted-foreground">Australia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="mb-24">
          <div className="bg-brand-navy rounded-2xl overflow-hidden text-white">
            <div className="flex flex-col items-center text-center px-6 py-16">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your <span className="text-brand-orange">Adventure?</span></h2>
              <p className="mb-8 text-primary-foreground/90 max-w-2xl">
                Book your unforgettable Kenyan safari experience today and embark on a journey that will stay with you for a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white min-w-[150px]">
                    Book Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 min-w-[150px]">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}