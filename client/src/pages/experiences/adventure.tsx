import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Itinerary } from "@shared/schema";
import { Clock, MapPin, Star } from "lucide-react";
import { formatRating, formatDuration } from "@/lib/format-utils";

const AdventureExperiences = () => {
  const { data: itineraries, isLoading } = useQuery<Itinerary[]>({
    queryKey: ["/api/itineraries"]
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[500px] rounded-xl overflow-hidden mb-12">
        <div className="absolute inset-0">
          <img
            src="/images/adventure-hero.jpg" 
            alt="Adventure Travel"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 to-transparent flex flex-col justify-center p-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Adventure Safaris
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6">
            Push your boundaries with thrilling adventures across East Africa, from mountain trekking and white water rafting to walking safaris and canoe expeditions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/book">
              <Button size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90">
                Plan Your Adventure
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
          <h2 className="text-3xl font-bold mb-4">Active Safari Experiences</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our adventure safaris go beyond the traditional game drive, offering active and immersive experiences in East Africa's most spectacular landscapes. 
            From summiting Mount Kilimanjaro to tracking gorillas on foot, navigating white water rapids on the Nile, 
            or walking among wildlife with expert guides, these journeys create unforgettable memories for the adventurous traveler.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Adventure Highlights</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trek Africa's highest peak on guided Mount Kilimanjaro expeditions</li>
                <li>Track mountain gorillas and chimpanzees through misty forests</li>
                <li>Experience thrilling white water rafting on the Nile River</li>
                <li>Explore on foot with walking safaris led by expert guides</li>
                <li>Join canoe and kayak expeditions in wildlife-rich waterways</li>
                <li>Camp under the stars in remote wilderness locations</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-3">Perfect For</h3>
              <p>
                Our adventure safaris are ideal for active travelers seeking meaningful challenges and authentic wilderness encounters. 
                Whether you're an experienced trekker, a wildlife enthusiast wanting closer encounters, or simply looking to 
                add some excitement to your safari experience, our adventure options offer varying levels of activity to suit different fitness levels and interests.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg h-fit">
          <h3 className="text-xl font-semibold mb-4">Featured Adventures</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-brand-orange text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</div>
              <div>
                <span className="font-medium">Kilimanjaro Trekking</span>
                <p className="text-sm text-gray-600">Summit Africa's highest peak via various routes including Machame and Lemosho</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-brand-orange text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</div>
              <div>
                <span className="font-medium">Gorilla Trekking</span>
                <p className="text-sm text-gray-600">Face-to-face encounters with mountain gorillas in Uganda's Bwindi Forest</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-brand-orange text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</div>
              <div>
                <span className="font-medium">Nile River Rafting</span>
                <p className="text-sm text-gray-600">Exhilarating white water adventures at the source of the Nile in Jinja</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-brand-orange text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</div>
              <div>
                <span className="font-medium">Walking Safaris</span>
                <p className="text-sm text-gray-600">Guided foot safaris in private conservancies for up-close wildlife viewing</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-brand-orange text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">5</div>
              <div>
                <span className="font-medium">Rwenzori Mountain Trek</span>
                <p className="text-sm text-gray-600">Multi-day expedition in Uganda's "Mountains of the Moon"</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Featured Itineraries */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Adventure Itineraries</h2>
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
            {/* Display sample adventure itineraries */}
            {[
              {
                id: "adventure-1",
                title: "Mt. Kilimanjaro Trekking Package",
                location: "Machame Route",
                country: "Tanzania",
                duration: 8,
                description: "A guided 6-day trek to Africa's highest peak with acclimatization-focused itinerary and professional team of guides and porters.",
                imageUrl: "/images/kilimanjaro-trek.jpg"
              },
              {
                id: "adventure-2",
                title: "Gorilla Trekking Safari",
                location: "Bwindi Impenetrable Forest",
                country: "Uganda",
                duration: 4,
                description: "Trek through pristine rainforest to encounter endangered mountain gorillas in their natural habitat with expert local guides.",
                imageUrl: "/images/gorilla-trek.jpg"
              },
              {
                id: "adventure-3",
                title: "Nile Adventure & Wildlife Safari",
                location: "Jinja, Murchison Falls",
                country: "Uganda",
                duration: 6,
                description: "Combine white water rafting adventures on the Nile with wildlife experiences at the dramatic Murchison Falls National Park.",
                imageUrl: "/images/nile-adventure.jpg"
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
            ))}
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Adventure Experience Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative h-72 rounded-xl overflow-hidden">
            <img 
              src="/images/mountain-trekking.jpg" 
              alt="Mountain Trekking" 
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">Mountain Expeditions</h3>
              <p className="text-white/80 mb-4 text-sm">
                From Kilimanjaro to the Rwenzoris, challenge yourself on guided mountain treks
              </p>
              <Link href="/itineraries">
                <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/20 w-full sm:w-auto">
                  Explore Treks
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="group relative h-72 rounded-xl overflow-hidden">
            <img 
              src="/images/primate-trekking.jpg" 
              alt="Primate Trekking" 
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">Primate Encounters</h3>
              <p className="text-white/80 mb-4 text-sm">
                Trek through forests to meet gorillas, chimpanzees and other primates
              </p>
              <Link href="/destinations/uganda">
                <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/20 w-full sm:w-auto">
                  Discover Uganda
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="group relative h-72 rounded-xl overflow-hidden">
            <img 
              src="/images/water-adventures.jpg" 
              alt="Water Adventures" 
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">Water Adventures</h3>
              <p className="text-white/80 mb-4 text-sm">
                Rafting, kayaking and boating in Africa's most spectacular waterways
              </p>
              <Link href="/itineraries">
                <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/20 w-full sm:w-auto">
                  View Activities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-navy text-white rounded-xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Adventure?</h2>
          <p className="text-lg text-white/80 mb-8">
            Let us customize your perfect adventure safari combining thrilling activities with extraordinary wildlife encounters 
            and authentic cultural experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book">
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                Start Planning
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white bg-transparent hover:bg-white/10 text-white">
                Talk to an Adventure Expert
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureExperiences;