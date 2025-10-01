import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Itinerary } from "@shared/schema";
import { Clock, MapPin, Star } from "lucide-react";
import { formatRating, formatDuration } from "@/lib/format-utils";
import { DestinationHero } from "@/components/destination-hero";

const KenyaDestination = () => {
  const { data: itineraries, isLoading } = useQuery<Itinerary[]>({
    queryKey: ["/api/itineraries", { country: "Kenya" }]
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <DestinationHero
        title="Discover Kenya"
        description="Experience the magic of Kenya - from the iconic Masai Mara to pristine beaches, rich cultures, and extraordinary wildlife encounters."
        imageSrc="/images/kenya-hero.jpg"
        imageAlt="Kenya Safari"
      />

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">Kenya Safari Experiences</h2>
          <p className="text-lg text-gray-700 mb-8">
            Kenya offers an unparalleled safari experience, home to the world-famous Masai Mara, diverse landscapes, 
            and the annual Great Migration. Whether you're seeking luxury tented camps under starlit skies, 
            authentic cultural encounters with the Maasai, or thrilling wildlife adventures, 
            Kenya delivers unforgettable moments at every turn.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Why Visit Kenya?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Witness the spectacular Great Migration in the Masai Mara</li>
                <li>Encounter the "Big Five" in world-renowned national parks and reserves</li>
                <li>Experience authentic cultural exchanges with Maasai, Samburu, and other communities</li>
                <li>Explore diverse landscapes from savannas to mountains, forests, and beaches</li>
                <li>Discover conservation success stories and contribute to wildlife protection</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-3">Best Time to Visit</h3>
              <p>
                The dry seasons (June to October and January to February) offer the best wildlife viewing, with July to October 
                being ideal for witnessing the Great Migration in the Masai Mara. The wet seasons (March to May and November to December) 
                bring lush landscapes and fewer tourists, perfect for bird watching and photography.
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
                <span className="font-medium">Masai Mara National Reserve</span>
                <p className="text-sm text-gray-600">Home to the Great Migration and extraordinary year-round wildlife</p>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-brand-orange mr-2 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Amboseli National Park</span>
                <p className="text-sm text-gray-600">Iconic views of Mt. Kilimanjaro with large elephant herds</p>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-brand-orange mr-2 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Tsavo National Parks</span>
                <p className="text-sm text-gray-600">Kenya's largest protected wilderness area</p>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-brand-orange mr-2 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Lake Nakuru</span>
                <p className="text-sm text-gray-600">Famous for flamingos and rhino sanctuary</p>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-brand-orange mr-2 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Diani Beach</span>
                <p className="text-sm text-gray-600">Pristine white sand beaches and marine life</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Featured Itineraries */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Kenya Itineraries</h2>
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
            {itineraries?.filter(it => it.country === "Kenya")
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
                      {/* Show "Request Quote" instead of price */}
                      <Link href="/book">
                        <Button size="sm" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                          Book Now
                        </Button>
                      </Link>
                    </span>
                  </CardFooter>
                </Card>
              ))}
          </div>
        )}
      </div>

      {/* Package Categories */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Kenya Safari Package Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative h-72 rounded-xl overflow-hidden">
            <img 
              src="/images/luxury-kenya.jpg" 
              alt="Luxury Kenya Packages" 
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent flex flex-col justify-end p-6">
              <div className="bg-brand-orange/90 text-white text-xs font-semibold px-2 py-1 rounded-full w-fit mb-2">
                Premium
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Luxury Packages</h3>
              <p className="text-white/80 mb-4 text-sm">
                Exclusive lodges, private aircraft transfers, and personalized service
              </p>
              <Link href="/itineraries?type=luxury&country=Kenya">
                <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/20 w-full sm:w-auto">
                  View Luxury Packages
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="group relative h-72 rounded-xl overflow-hidden">
            <img 
              src="/images/budget-safari.jpg" 
              alt="Budget-Friendly Kenya Packages" 
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent flex flex-col justify-end p-6">
              <div className="bg-green-500/90 text-white text-xs font-semibold px-2 py-1 rounded-full w-fit mb-2">
                Great Value
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Budget-Friendly Packages</h3>
              <p className="text-white/80 mb-4 text-sm">
                Affordable safaris with comfortable accommodations and expert guides
              </p>
              <Link href="/itineraries?type=budget&country=Kenya">
                <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/20 w-full sm:w-auto">
                  Explore Value Packages
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="group relative h-72 rounded-xl overflow-hidden">
            <img 
              src="/images/cultural-kenya.jpg" 
              alt="Cultural & Community Kenya Packages" 
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent flex flex-col justify-end p-6">
              <div className="bg-yellow-500/90 text-white text-xs font-semibold px-2 py-1 rounded-full w-fit mb-2">
                Immersive
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community & Cultural Packages</h3>
              <p className="text-white/80 mb-4 text-sm">
                Authentic community interactions and cultural immersion experiences
              </p>
              <Link href="/itineraries?type=cultural&country=Kenya">
                <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/20 w-full sm:w-auto">
                  Explore Cultural Experiences
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-navy text-white rounded-xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Kenya?</h2>
          <p className="text-lg text-white/80 mb-8">
            Let us plan your perfect Kenyan adventure, tailored to your interests, 
            timeframe, and preferences. Our expert guides and personalized service ensure 
            an unforgettable safari experience.
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

export default KenyaDestination;