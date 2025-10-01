import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Star, Camera, Building, Utensils, Car } from "lucide-react";
import { formatRating, formatDuration } from "@/lib/format-utils";
import { Link } from "wouter";
import { motion } from "framer-motion";
import type { Itinerary } from "@shared/schema";

const DubaiExperiences = () => {
  const { data: itineraries, isLoading } = useQuery<Itinerary[]>({
    queryKey: ["/api/itineraries"]
  });

  const dubaiItineraries = itineraries?.filter(itinerary => 
    itinerary.location.toLowerCase().includes('dubai') || 
    itinerary.location.toLowerCase().includes('uae') ||
    itinerary.location.toLowerCase().includes('emirates') ||
    itinerary.country.toLowerCase().includes('emirates')
  ) || [];

  const experienceImages = [
    {
      src: "/images/dubai/dubai-calligraphy-art.jpg",
      alt: "Dubai Modern Art & Culture",
      title: "Modern Art & Culture",
      description: "Explore stunning contemporary art installations and cultural landmarks"
    },
    {
      src: "/images/dubai/burj-al-arab.jpg", 
      alt: "Burj Al Arab Luxury",
      title: "Iconic Architecture",
      description: "Experience the sail-shaped marvel and luxury hospitality"
    },
    {
      src: "/images/dubai/dubai-marina-skyline.jpg",
      alt: "Dubai Marina Skyline",
      title: "Urban Waterfront", 
      description: "Cruise through Dubai's stunning marina and modern skyline"
    },
    {
      src: "/images/dubai/luxury-resort-aerial.jpg",
      alt: "Luxury Resort Experience",
      title: "Premium Accommodation",
      description: "Stay at world-class resorts with exceptional amenities"
    },
    {
      src: "/images/dubai/beachfront-luxury.jpg",
      alt: "Beachfront Luxury",
      title: "Coastal Paradise",
      description: "Relax at pristine beaches with luxury beach club experiences"
    },
    {
      src: "/images/dubai/tropical-beach.jpg",
      alt: "Tropical Beach Experience",
      title: "Beach Adventures",
      description: "Enjoy crystal-clear waters and tropical beach activities"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-brand-navy to-brand-navy/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/dubai/dubai-marina-skyline.jpg')`,
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Dubai <span className="text-brand-orange">Luxury</span> Experiences
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Where modern luxury meets Arabian tradition. Experience the jewel of the Middle East with our curated Dubai adventures.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/book">
                  <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                    Plan Your Dubai Trip
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white bg-transparent hover:bg-white/10 text-white">
                    Speak to Expert
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Creative Image Gallery Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
              Dubai <span className="text-brand-orange">Experience</span> Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Immerse yourself in the spectacular sights and experiences that make Dubai a world-class destination
            </p>
          </div>

          {/* Featured Hero Gallery */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/dubai/dubai-calligraphy-art.jpg"
                alt="Dubai Modern Art"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                    Modern Art & Cultural Heritage
                  </h3>
                  <p className="text-white/90 text-lg">
                    Discover Dubai's fusion of contemporary art and traditional Arabic culture
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dynamic Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {experienceImages.slice(1).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-white/80 text-sm">{image.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-brand-orange text-white">
                      <Camera className="w-3 h-3 mr-1" />
                      Experience
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-brand-navy">Dubai Experience Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-navy">Iconic Architecture</h3>
              <p className="text-gray-600">
                Visit world-famous landmarks including Burj Khalifa, Burj Al Arab, and Palm Jumeirah
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-navy">Desert Adventures</h3>
              <p className="text-gray-600">
                Experience thrilling desert safaris, dune bashing, and traditional Bedouin culture
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
                <Utensils className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-navy">Culinary Excellence</h3>
              <p className="text-gray-600">
                Savor world-class dining from Michelin-starred restaurants to authentic street food
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-navy">Luxury Shopping</h3>
              <p className="text-gray-600">
                Shop at Dubai Mall, Mall of Emirates, and traditional souks for unique experiences
              </p>
            </div>
          </div>
        </section>

        {/* Available Itineraries */}
        {dubaiItineraries.length > 0 && (
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Dubai Itineraries</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our carefully crafted Dubai experiences designed to showcase the best of this magnificent city
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dubaiItineraries.map((itinerary) => (
                <motion.div
                  key={itinerary.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-none shadow">
                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                      <img
                        src={itinerary.imageUrl || '/images/dubai-default.jpg'}
                        alt={itinerary.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-brand-orange text-white">
                          {itinerary.packageType}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <MapPin className="h-3 w-3" />
                        <span>{itinerary.location}</span>
                        <span className="text-brand-orange">•</span>
                        <Clock className="h-3 w-3" />
                        <span>{formatDuration(itinerary.duration)}</span>
                      </div>
                      <CardTitle className="text-xl group-hover:text-brand-orange transition-colors">
                        {itinerary.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 pb-6">
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {itinerary.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>Small Groups</span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">From</p>
                          <p className="text-xl font-bold text-brand-navy">
                            {itinerary.price}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link href={`/itineraries/${itinerary.id}`}>
                          <Button className="w-full bg-brand-navy hover:bg-brand-navy/90">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-brand-navy to-brand-navy/90 text-white rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Your Dubai <span className="text-brand-orange">Adventure</span>?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let our Dubai specialists create a personalized luxury experience that combines modern marvels with authentic Arabian culture. From iconic skyscrapers to desert adventures, we'll craft your perfect Dubai journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                  Plan Your Dubai Experience
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white bg-transparent hover:bg-white/10 text-white">
                  Speak to Dubai Expert
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DubaiExperiences;