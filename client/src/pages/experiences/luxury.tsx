import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Itinerary } from "@shared/schema";
import { Clock, MapPin, Star } from "lucide-react";
import { formatRating, formatDuration } from "@/lib/format-utils";

const LuxuryExperiences = () => {
  const { data: itineraries, isLoading } = useQuery<Itinerary[]>({
    queryKey: ["/api/itineraries", { packageType: "Luxury" }]
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[500px] rounded-xl overflow-hidden mb-12">
        <div className="absolute inset-0">
          <img
            src="/images/luxury-safari-hero.jpg" 
            alt="Luxury Safari"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 to-transparent flex flex-col justify-center p-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Luxury Safaris
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6">
            Indulge in exclusive camps, premium services, and extraordinary wildlife encounters across East Africa's most spectacular wilderness.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/book">
              <Button size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90">
                Plan Your Luxury Journey
              </Button>
            </Link>
            <Link href="/itineraries">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
                View All Experiences
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">Exceptional Safari Experiences</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our luxury safaris go beyond the ordinary, offering unparalleled comfort in the heart of the wilderness. 
            From exclusive tented camps and elegant lodges to personalized service and private guides, these journeys combine 
            authentic wildlife encounters with sophisticated amenities and extraordinary attention to detail.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3">The Luxury Safari Experience</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Intimate, exclusive lodges and camps in prime wildlife locations</li>
                <li>Private vehicles and expert guides dedicated to your safari</li>
                <li>Gourmet dining experiences featuring local and international cuisine</li>
                <li>Fly-in options between destinations to maximize time and comfort</li>
                <li>Champagne sundowners and special bush dining experiences</li>
                <li>Exceptional service and personalized attention throughout</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-3">Luxury Destinations</h3>
              <p>
                Experience luxury across East Africa's most iconic destinations. In Kenya, exclusive conservancies around the Masai Mara offer 
                private wildlife viewing away from crowds. Tanzania's Serengeti hosts elegant camps following the Great Migration, while 
                exclusive beach resorts in Zanzibar provide the perfect safari finale. In Uganda, premium forest lodges offer gorilla trekking 
                experiences with maximum comfort and outstanding service.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg h-fit">
          <h3 className="text-xl font-semibold mb-4">Luxury Highlights</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-brand-orange text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</div>
              <div>
                <span className="font-medium">Private Safari Experiences</span>
                <p className="text-sm text-gray-600">Exclusive vehicles, guides, and personalized service throughout your journey</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-brand-orange text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</div>
              <div>
                <span className="font-medium">Exceptional Accommodations</span>
                <p className="text-sm text-gray-600">Luxury lodges, exclusive tented camps, and premium amenities</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-brand-orange text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</div>
              <div>
                <span className="font-medium">Curated Experiences</span>
                <p className="text-sm text-gray-600">Helicopter tours, hot air balloon safaris, and exclusive cultural interactions</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-brand-orange text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</div>
              <div>
                <span className="font-medium">Gourmet Dining</span>
                <p className="text-sm text-gray-600">Fine cuisine with local ingredients, bush breakfasts, and sundowner cocktails</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-brand-orange text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">5</div>
              <div>
                <span className="font-medium">Seamless Transfers</span>
                <p className="text-sm text-gray-600">Luxury vehicles, scheduled flights, and private charters between destinations</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Featured Itineraries */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Luxury Itineraries</h2>
          <Link href="/itineraries">
            <Button variant="ghost" className="text-brand-navy hover:text-brand-orange">
              View All <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-orange"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Display luxury itineraries or fallback to sample data */}
            {(itineraries?.filter(it => it.packageType === "Luxury").length || 0) > 0 ? (
              // Display actual luxury itineraries
              itineraries?.filter(it => it.packageType === "Luxury")
                .slice(0, 3)
                .map((itinerary) => (
                  <Card key={itinerary.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={itinerary.imageUrl || "/images/placeholder-safari.jpg"}
                        alt={itinerary.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{itinerary.title}</CardTitle>
                        {itinerary.averageRating && (
                          <span className="flex items-center text-sm font-medium">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                            {formatRating(itinerary.averageRating)}
                          </span>
                        )}
                      </div>
                      <CardDescription className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {itinerary.location}, {itinerary.country}
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-1" />
                        {formatDuration(itinerary.duration)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm line-clamp-3">{itinerary.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Link href={`/itineraries/${itinerary.id}`}>
                        <Button variant="outline">View Details</Button>
                      </Link>
                      <span className="text-lg font-semibold">
                        <Link href="/book">
                          <Button size="sm" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                            Book Now
                          </Button>
                        </Link>
                      </span>
                    </CardFooter>
                  </Card>
                ))
            ) : (
              // Display sample luxury itineraries
              [
                {
                  id: "luxury-1",
                  title: "Luxury Tanzania Escape",
                  location: "Tarangire, Serengeti, Ngorongoro",
                  country: "Tanzania",
                  duration: 10,
                  description: "Experience Tanzania in style with fly-in safari experiences, intimate luxury lodges, and exclusive wildlife encounters in prime areas.",
                  imageUrl: "/images/luxury-tanzania.jpg"
                },
                {
                  id: "luxury-2",
                  title: "Kenya Premier Safari",
                  location: "Amboseli, Ol Pejeta, Masai Mara",
                  country: "Kenya",
                  duration: 9,
                  description: "Discover Kenya's iconic destinations with private guides, luxury accommodation, and exclusive experiences like hot air balloon safaris.",
                  imageUrl: "/images/luxury-kenya.jpg"
                },
                {
                  id: "luxury-3",
                  title: "Primate Luxury Expedition",
                  location: "Entebbe, Kibale, Bwindi",
                  country: "Uganda",
                  duration: 8,
                  description: "Combine gorilla trekking and chimpanzee tracking with stays at exclusive forest lodges and personalized wildlife experiences.",
                  imageUrl: "/images/luxury-uganda.jpg"
                }
              ].map((itinerary) => (
                <Card key={itinerary.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={itinerary.imageUrl || "/images/placeholder-safari.jpg"}
                      alt={itinerary.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{itinerary.title}</CardTitle>
                    </div>
                    <CardDescription className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {itinerary.location}, {itinerary.country}
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      {formatDuration(itinerary.duration)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm line-clamp-3">{itinerary.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link href="/itineraries">
                      <Button variant="outline">View Details</Button>
                    </Link>
                    <span className="text-lg font-semibold">
                      <Link href="/book">
                        <Button size="sm" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                          Book Now
                        </Button>
                      </Link>
                    </span>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">The Luxury Safari Difference</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-brand-orange">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Exceptional Accommodations</h3>
            <p className="text-gray-700">
              Stay in handpicked luxury lodges and intimate tented camps with premium amenities, exceptional service, and stunning locations in prime wildlife areas.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-brand-orange">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Exclusive Experiences</h3>
            <p className="text-gray-700">
              Enjoy private game drives, helicopter tours, hot air balloon safaris, and special bush dining experiences in secluded, scenic locations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-brand-orange">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Personal Service</h3>
            <p className="text-gray-700">
              Benefit from dedicated guides, personalized itineraries, and attention to detail that ensures every moment of your safari exceeds expectations.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-navy text-white rounded-xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Safari Luxury</h2>
          <p className="text-lg text-white/80 mb-8">
            Let us curate your perfect luxury safari adventure, combining East Africa's most spectacular wildlife experiences 
            with exceptional comfort, service, and attention to detail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book">
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                Plan Your Luxury Safari
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white bg-transparent hover:bg-white/10 text-white">
                Speak to a Luxury Safari Expert
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryExperiences;