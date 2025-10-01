import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Itinerary } from "@shared/schema";
import { Clock, MapPin, Star } from "lucide-react";
import { formatRating, formatDuration } from "@/lib/format-utils";
import { DestinationHero } from "@/components/destination-hero";

const UgandaDestination = () => {
  const { data: itineraries, isLoading } = useQuery<Itinerary[]>({
    queryKey: ["/api/itineraries", { country: "Uganda" }]
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <DestinationHero
        title="Discover Uganda"
        description="The Pearl of Africa - home to mountain gorillas, chimpanzees, the mighty Nile River, and incredible biodiversity in its dense forests and savannas."
        imageSrc="/images/uganda-hero.jpg"
        imageAlt="Uganda Safari and Adventures"
      />

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">Uganda Wildlife & Adventure</h2>
          <p className="text-lg text-gray-700 mb-8">
            Uganda offers some of Africa's most unique wildlife experiences, from tracking endangered mountain gorillas in misty forests to encountering chimpanzees in their natural habitat. Beyond primates, discover savanna wildlife, the source of the Nile, and warm, welcoming cultures.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Why Visit Uganda?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trek to see endangered mountain gorillas in Bwindi Impenetrable Forest</li>
                <li>Track chimpanzees and other primates in Kibale Forest</li>
                <li>Experience traditional big game safaris in Queen Elizabeth National Park</li>
                <li>Discover the source of the Nile and experience world-class white water rafting</li>
                <li>Hike in the stunning "Mountains of the Moon" (Rwenzori Mountains)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-3">Best Time to Visit</h3>
              <p>
                Uganda can be visited year-round, but the dry seasons (December to February and June to August) 
                offer the best conditions for gorilla trekking and wildlife viewing. The wet seasons bring lush 
                landscapes and are excellent for bird watching, with fewer visitors at popular attractions.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg h-fit">
          <h3 className="text-xl font-semibold mb-4">Popular Destinations</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-brand-orange mr-2 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Bwindi Impenetrable Forest</span>
                <p className="text-sm text-gray-600">Home to over half the world's mountain gorilla population</p>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-brand-orange mr-2 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Queen Elizabeth National Park</span>
                <p className="text-sm text-gray-600">Renowned for tree-climbing lions and diverse wildlife</p>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-brand-orange mr-2 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Kibale Forest National Park</span>
                <p className="text-sm text-gray-600">Primate capital with 13 species including chimpanzees</p>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-brand-orange mr-2 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Murchison Falls National Park</span>
                <p className="text-sm text-gray-600">Dramatic waterfalls and excellent wildlife viewing</p>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-brand-orange mr-2 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Jinja - Source of the Nile</span>
                <p className="text-sm text-gray-600">Adventure activities and historical significance</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Featured Itineraries */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Uganda Itineraries</h2>
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
            {/* Fallback to display sample itineraries if data is not yet available with the new country field */}
            {(itineraries?.filter(it => it.country === "Uganda").length || 0) > 0 ? (
              // Display actual Uganda itineraries
              itineraries?.filter(it => it.country === "Uganda")
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
                        {itinerary.location}
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
              // Display sample itineraries from the package breakdown document
              [
                {
                  id: "uganda-1",
                  title: "Primate Luxury Expedition",
                  location: "Kibale, Queen Elizabeth, Bwindi",
                  duration: 8,
                  description: "Track gorillas and chimpanzees, stay in exclusive forest lodges, and experience game drives in Queen Elizabeth National Park.",
                  imageUrl: "/images/uganda-luxury.jpg"
                },
                {
                  id: "uganda-2",
                  title: "Classic Uganda Highlights",
                  location: "Queen Elizabeth, Bwindi, Lake Mburo",
                  duration: 7,
                  description: "See tree-climbing lions, track gorillas, and enjoy savanna game drives in this comprehensive Uganda safari.",
                  imageUrl: "/images/uganda-classic.jpg"
                },
                {
                  id: "uganda-3",
                  title: "Nile Safari & Murchison Falls",
                  location: "Ziwa Sanctuary, Murchison Falls, Nile River",
                  duration: 6,
                  description: "Experience rhino tracking, private river cruises, and the dramatic Murchison Falls on the Nile.",
                  imageUrl: "/images/uganda-nile.jpg"
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
                      {itinerary.location}
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

      {/* Package Categories */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Uganda Safari Package Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative h-72 rounded-xl overflow-hidden">
            <img 
              src="/images/gorilla-trekking.jpg" 
              alt="Luxury Uganda Packages" 
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent flex flex-col justify-end p-6">
              <div className="bg-brand-orange/90 text-white text-xs font-semibold px-2 py-1 rounded-full w-fit mb-2">
                Premium
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Luxury Packages</h3>
              <p className="text-white/80 mb-4 text-sm">
                Primate Luxury Expeditions and premium Nile Safari experiences
              </p>
              <Link href="/itineraries?type=luxury&country=Uganda">
                <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/20 w-full sm:w-auto">
                  View Luxury Packages
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="group relative h-72 rounded-xl overflow-hidden">
            <img 
              src="/images/nile-adventure.jpg" 
              alt="Budget-Friendly Uganda Packages" 
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent flex flex-col justify-end p-6">
              <div className="bg-green-500/90 text-white text-xs font-semibold px-2 py-1 rounded-full w-fit mb-2">
                Great Value
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Budget-Friendly Packages</h3>
              <p className="text-white/80 mb-4 text-sm">
                Classic Uganda Highlights, Rwenzori Trekking, and Weekend Escapes to Jinja
              </p>
              <Link href="/itineraries?type=budget&country=Uganda">
                <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/20 w-full sm:w-auto">
                  Explore Value Packages
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="group relative h-72 rounded-xl overflow-hidden">
            <img 
              src="/images/cultural-uganda.jpg" 
              alt="Cultural & Community Uganda Packages" 
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent flex flex-col justify-end p-6">
              <div className="bg-yellow-500/90 text-white text-xs font-semibold px-2 py-1 rounded-full w-fit mb-2">
                Immersive
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community & Cultural Packages</h3>
              <p className="text-white/80 mb-4 text-sm">
                Roots & Rhythms Cultural Tours and Volunteer & Safari Combinations
              </p>
              <Link href="/itineraries?type=cultural&country=Uganda">
                <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/20 w-full sm:w-auto">
                  Discover Cultural Tours
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-navy text-white rounded-xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Uganda?</h2>
          <p className="text-lg text-white/80 mb-8">
            Let us create your perfect Ugandan adventure, from intimate wildlife encounters to thrilling adventures 
            and authentic cultural experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book">
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                Start Planning Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white bg-transparent hover:bg-white/10 text-white">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UgandaDestination;