import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Itinerary } from "@shared/schema";
import { Clock, MapPin, Star } from "lucide-react";
import { formatRating, formatDuration } from "@/lib/format-utils";
import { DestinationHero } from "@/components/destination-hero";

const TanzaniaDestination = () => {
  const { data: itineraries, isLoading } = useQuery<Itinerary[]>({
    queryKey: ["/api/itineraries", { country: "Tanzania" }]
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <DestinationHero
        title="Discover Tanzania"
        description="From the vast plains of Serengeti to the stunning crater of Ngorongoro and the pristine beaches of Zanzibar - experience Tanzania's unmatched natural beauty."
        imageSrc="/images/tanzania-hero.jpg"
        imageAlt="Tanzania Safari"
      />

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">Tanzania Safari Experiences</h2>
          <p className="text-lg text-gray-700 mb-8">
            Tanzania offers some of Africa's most iconic safari experiences, from witnessing the Great Migration across the Serengeti to exploring the UNESCO-listed Ngorongoro Crater. The country combines incredible wildlife viewing with natural wonders, cultural encounters, and the tropical paradise of Zanzibar.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Why Visit Tanzania?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Experience the Great Migration across the endless plains of Serengeti</li>
                <li>Explore the Ngorongoro Crater, the world's largest intact volcanic caldera</li>
                <li>Climb Mt. Kilimanjaro, Africa's highest peak</li>
                <li>Combine safari adventures with beach relaxation in Zanzibar</li>
                <li>Encounter authentic cultures from the Maasai to the Hadzabe</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-3">Best Time to Visit</h3>
              <p>
                The dry seasons (June to October and December to February) provide the best wildlife viewing conditions. For the Serengeti migration, visit the northern Serengeti from July to October for river crossings, or the southern plains from December to March for calving season. Zanzibar is pleasant year-round, but April and May see the heaviest rains.
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
                <span className="font-medium">Serengeti National Park</span>
                <p className="text-sm text-gray-600">Home to the Great Migration and extraordinary year-round wildlife</p>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-brand-orange mr-2 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Ngorongoro Crater</span>
                <p className="text-sm text-gray-600">UNESCO World Heritage site with incredible wildlife density</p>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-brand-orange mr-2 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Mount Kilimanjaro</span>
                <p className="text-sm text-gray-600">Africa's highest peak and a bucket-list trekking destination</p>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-brand-orange mr-2 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Zanzibar</span>
                <p className="text-sm text-gray-600">Idyllic beaches, historic Stone Town, and cultural heritage</p>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-brand-orange mr-2 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Tarangire National Park</span>
                <p className="text-sm text-gray-600">Famous for large elephant herds and baobab trees</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Featured Itineraries */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Tanzania Itineraries</h2>
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
            {(itineraries?.filter(it => it.country === "Tanzania").length || 0) > 0 ? (
              // Display actual Tanzania itineraries
              itineraries?.filter(it => it.country === "Tanzania")
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
                  id: "tanzania-1",
                  title: "Classic Tanzania Safari",
                  location: "Tarangire, Serengeti, Ngorongoro",
                  duration: 7,
                  description: "Experience Tanzania's iconic parks with comfortable mid-range lodges & tented camps, private safari vehicle and expert guide.",
                  imageUrl: "/images/tanzania-classic.jpg"
                },
                {
                  id: "tanzania-2",
                  title: "Luxury Tanzania Escape",
                  location: "Tarangire, Serengeti, Ngorongoro, Zanzibar",
                  duration: 10,
                  description: "The ultimate luxury safari featuring premium lodges, fly-in experiences, and the white sand beaches of Zanzibar.",
                  imageUrl: "/images/tanzania-luxury.jpg"
                },
                {
                  id: "tanzania-3",
                  title: "Great Migration Adventure",
                  location: "Serengeti, Ngorongoro",
                  duration: 8,
                  description: "Witness the spectacular wildebeest migration with expert guides, migration-focused game drives, and optional balloon safari.",
                  imageUrl: "/images/tanzania-migration.jpg"
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
        <h2 className="text-3xl font-bold mb-8">Tanzania Safari Package Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative h-72 rounded-xl overflow-hidden">
            <img 
              src="/images/luxury-safari.jpg" 
              alt="Luxury Tanzania Packages" 
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent flex flex-col justify-end p-6">
              <div className="bg-brand-orange/90 text-white text-xs font-semibold px-2 py-1 rounded-full w-fit mb-2">
                Premium
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Luxury Packages</h3>
              <p className="text-white/80 mb-4 text-sm">
                Premium fly-in safaris, private guides, and exclusive experiences
              </p>
              <Link href="/itineraries?type=luxury&country=Tanzania">
                <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/20 w-full sm:w-auto">
                  View Luxury Packages
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="group relative h-72 rounded-xl overflow-hidden">
            <img 
              src="/images/budget-safari.jpg" 
              alt="Budget-Friendly Tanzania Packages" 
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent flex flex-col justify-end p-6">
              <div className="bg-green-500/90 text-white text-xs font-semibold px-2 py-1 rounded-full w-fit mb-2">
                Great Value
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Budget-Friendly Packages</h3>
              <p className="text-white/80 mb-4 text-sm">
                Classic safaris, family experiences, and Kilimanjaro trekking
              </p>
              <Link href="/itineraries?type=budget&country=Tanzania">
                <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/20 w-full sm:w-auto">
                  Explore Value Packages
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="group relative h-72 rounded-xl overflow-hidden">
            <img 
              src="/images/cultural-tanzania.jpg" 
              alt="Cultural & Community Tanzania Packages" 
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent flex flex-col justify-end p-6">
              <div className="bg-yellow-500/90 text-white text-xs font-semibold px-2 py-1 rounded-full w-fit mb-2">
                Immersive
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community & Cultural Packages</h3>
              <p className="text-white/80 mb-4 text-sm">
                Homestays, Maasai and Hadzabe village visits, and volunteer opportunities
              </p>
              <Link href="/itineraries?type=cultural&country=Tanzania">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Tanzania?</h2>
          <p className="text-lg text-white/80 mb-8">
            Let us help you create the perfect Tanzanian adventure, whether you're seeking thrilling wildlife encounters, 
            breathtaking landscapes, cultural immersion, or a combination of experiences.
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

export default TanzaniaDestination;