import { useQuery } from "@tanstack/react-query";
import type { Itinerary, Review } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { ReviewForm } from "@/components/review-form";
import { 
  StarIcon, 
  MapPinIcon, 
  CalendarIcon, 
  Clock, 
  CheckCircle2, 
  UserCircle, 
  ChevronLeft, 
  Share2,
  ArrowRight,
  Camera,
  Users,
  Shield,
  Utensils,
  Car,
  LucideIcon,
  ImageIcon
} from "lucide-react";
import { ShareButtons } from "@/components/share-buttons";
import { SafariMomentShare } from "@/components/safari-moment-share";
import { Loading } from "@/components/ui/loading";
import { Badge } from "@/components/ui/badge";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { useState } from "react";
import { LocationGallery } from "@/components/location-gallery";

interface DayByDayItem {
  day: number;
  description: string;
}

interface Amenity {
  icon: LucideIcon;
  name: string;
  description: string;
}

export default function ItineraryDetail() {
  const { id } = useParams();
  const parsedId = id ? parseInt(id) : 0;
  const [activeTab, setActiveTab] = useState("overview");

  const { data: itinerary, isLoading: isLoadingItinerary } = useQuery<Itinerary | undefined>({
    queryKey: [`/api/itineraries/${parsedId}`],
    enabled: !!parsedId
  });

  const { data: reviews, isLoading: isLoadingReviews } = useQuery<Review[]>({
    queryKey: [`/api/itineraries/${parsedId}/reviews`],
    enabled: !!parsedId
  });

  // Example amenities - these would typically come from the database
  const amenities: Amenity[] = [
    { icon: Car, name: "Transportation", description: "Comfortable 4x4 safari vehicles" },
    { icon: Utensils, name: "Meals", description: "All meals and drinks included" },
    { icon: Users, name: "Expert Guides", description: "Professional English-speaking guides" },
    { icon: Shield, name: "Safety", description: "Comprehensive safety measures" },
    { icon: Camera, name: "Activities", description: "Game drives and cultural visits" },
  ];

  if (isLoadingItinerary || isLoadingReviews) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <Link href="/itineraries">
            <Button variant="outline" className="mb-6 flex items-center gap-1 border-brand-navy/20 text-brand-navy hover:bg-brand-navy/5">
              <ChevronLeft className="h-4 w-4" />
              <span>Back to Itineraries</span>
            </Button>
          </Link>
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <Loading variant="pattern" size="lg" />
            <p className="mt-4 text-brand-navy font-medium">Loading safari adventure details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!itinerary) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h2 className="text-brand-navy text-2xl font-bold mb-2">Itinerary not found</h2>
            <p className="text-gray-700 mb-4">We couldn't find the safari experience you're looking for.</p>
            <Link href="/itineraries">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">Browse All Safaris</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const dayByDay = itinerary.dayByDay as DayByDayItem[];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 to-brand-navy/40 z-10"></div>
        <div className="h-[300px] lg:h-[500px] w-full overflow-hidden">
          <img 
            src={itinerary.imageUrl || '/images/itineraries/_MG_1463.jpg'}
            alt={itinerary.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 z-20 p-4 md:p-6">
          <Link href="/itineraries">
            <Button variant="outline" className="bg-white/80 backdrop-blur-sm hover:bg-white flex items-center gap-1 text-xs sm:text-sm">
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">Back to Itineraries</span>
              <span className="xs:hidden">Back</span>
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-20 p-6 md:p-10">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
              <div>
                <Badge className="bg-brand-orange text-white font-medium mb-4 px-3 py-1.5">
                  {itinerary.category}
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{itinerary.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-white/90">
                  <div className="flex items-center gap-1 text-sm">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{itinerary.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{itinerary.duration} days</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Badge variant="outline" className="bg-white/20 text-white border-white/20">
                      {itinerary.difficultyLevel || "Easy"}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col md:items-end">
                <Link href={`/book?itinerary=${itinerary.id}`}>
                  <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                    Request for Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Quick Quote Request Card - Mobile Only */}
        <div className="md:hidden mb-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-xl font-bold text-brand-navy">
                  {itinerary.duration} Days
                </p>
                <Badge variant="outline" className="border-brand-orange text-brand-orange">
                  {itinerary.difficultyLevel || "Easy"}
                </Badge>
              </div>
              <Link href={`/book?itinerary=${itinerary.id}`} className="w-full">
                <Button size="lg" className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white flex items-center justify-center gap-2">
                  Request for Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <div className="flex flex-col items-center gap-4 mt-4">
                <ShareButtons itinerary={itinerary} />
                <SafariMomentShare itinerary={itinerary} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabbed Navigation */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full mb-6 md:mb-10">
          <div className="border-b border-gray-200 overflow-x-auto scrollbar-hide">
            <TabsList className="bg-transparent h-auto p-0 w-full justify-start">
              <TabsTrigger
                value="overview"
                className="px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-brand-orange data-[state=active]:border-b-2 data-[state=active]:border-brand-orange rounded-none"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="itinerary"
                className="px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-brand-orange data-[state=active]:border-b-2 data-[state=active]:border-brand-orange rounded-none"
              >
                Day by Day
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-brand-orange data-[state=active]:border-b-2 data-[state=active]:border-brand-orange rounded-none"
              >
                Reviews
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <TabsContent value="overview" className="mt-0">
                <div className="space-y-8">
                  {/* Description */}
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-brand-navy">About <span className="text-brand-orange">This Safari</span></h2>
                    <p className="text-gray-700 leading-relaxed">{itinerary.description}</p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-brand-navy">Experience <span className="text-brand-orange">Highlights</span></h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {itinerary.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-1 bg-brand-orange/10 rounded-full p-1">
                            <CheckCircle2 className="h-5 w-5 text-brand-orange" />
                          </div>
                          <p className="text-gray-700">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-brand-navy">What's <span className="text-brand-orange">Included</span></h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {amenities.map((amenity, index) => {
                        const Icon = amenity.icon;
                        return (
                          <div key={index} className="flex items-start gap-3">
                            <div className="mt-1 bg-brand-orange/10 p-2 rounded-full">
                              <Icon className="h-5 w-5 text-brand-orange" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-brand-navy">{amenity.name}</h4>
                              <p className="text-sm text-gray-600">{amenity.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Gallery */}
                  <LocationGallery 
                    images={[
                      { src: `/images/${itinerary.title.toLowerCase().replace(/\s+/g, '-')}-1.jpg`, alt: `${itinerary.title} - Image 1` },
                      { src: `/images/${itinerary.title.toLowerCase().replace(/\s+/g, '-')}-2.jpg`, alt: `${itinerary.title} - Image 2` },
                      { src: `/images/${itinerary.title.toLowerCase().replace(/\s+/g, '-')}-3.jpg`, alt: `${itinerary.title} - Image 3` },
                      { src: `/images/${itinerary.title.toLowerCase().replace(/\s+/g, '-')}-4.jpg`, alt: `${itinerary.title} - Image 4` }
                    ]}
                    title={`${itinerary.title} Gallery`}
                  />
                </div>
              </TabsContent>

              <TabsContent value="itinerary" className="mt-0">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-brand-navy">Day by <span className="text-brand-orange">Day</span> Itinerary</h2>
                <div className="space-y-4 sm:space-y-6">
                  {itinerary?.dayByDay && typeof itinerary.dayByDay === 'object' && 
                    Object.entries(itinerary.dayByDay).map(([key, value], index) => (
                      <div key={index} className="relative pl-6 sm:pl-8 pb-6 sm:pb-8 border-l-2 border-brand-orange/20 last:border-l-0 last:pb-0">
                        <div className="absolute left-[-8px] sm:left-[-10px] top-0 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-brand-orange"></div>
                        <div className="bg-white rounded-lg sm:rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100">
                          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-brand-orange">Day {key.replace('day', '')}</h3>
                          <p className="text-sm sm:text-base text-gray-700">{value}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-0">
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-brand-navy">Guest <span className="text-brand-orange">Reviews</span></h2>
                    
                    {itinerary.averageRating ? (
                      <div className="flex items-center gap-2 mb-4 sm:mb-6 bg-brand-navy/5 p-3 sm:p-4 rounded-lg">
                        <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-brand-orange flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                          {Number(itinerary.averageRating).toFixed(1)}
                        </div>
                        <div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <StarIcon
                                key={star}
                                className={`h-4 w-4 sm:h-5 sm:w-5 ${
                                  star <= Number(itinerary.averageRating)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-sm sm:text-base text-gray-700 mt-1">Based on {itinerary.totalReviews || 0} reviews</p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">No ratings yet. Be the first to review!</p>
                    )}

                    <div className="space-y-4 mb-10">
                      {reviews && reviews.length > 0 ? (
                        reviews.map((review) => (
                          <div key={review.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                            <div className="flex gap-4 items-start">
                              <div className="bg-brand-navy/10 rounded-full p-3">
                                <UserCircle className="h-8 w-8 text-brand-navy/70" />
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <h4 className="font-bold text-brand-navy">{review.userName}</h4>
                                  <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <StarIcon
                                        key={star}
                                        className={`h-4 w-4 ${
                                          star <= review.rating
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-gray-300"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-gray-700 mt-2">{review.comment}</p>
                                <p className="text-sm text-gray-500 mt-2">
                                  {new Date(review.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8 bg-brand-navy/5 rounded-lg">
                          <p className="text-gray-700">No reviews yet for this safari.</p>
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 text-brand-navy">Write a <span className="text-brand-orange">Review</span></h3>
                      <Card className="border-none shadow-md">
                        <CardContent className="p-6">
                          <ReviewForm itineraryId={parsedId} onSuccess={() => setActiveTab("reviews")} />
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>

            {/* Right Sidebar with Quote Request */}
            <div className="lg:col-span-1 hidden md:block">
              <Card className="sticky top-8 border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-brand-navy">Safari Details</h3>
                    <Badge variant="outline" className="border-brand-orange text-brand-orange">
                      {itinerary.difficultyLevel || "Easy"}
                    </Badge>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-700">
                        <CalendarIcon className="h-4 w-4 text-brand-navy/70" />
                        <span>Duration:</span>
                      </div>
                      <span className="font-medium">{itinerary.duration} days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPinIcon className="h-4 w-4 text-brand-navy/70" />
                        <span>Location:</span>
                      </div>
                      <span className="font-medium">{itinerary.location}</span>
                    </div>
                  </div>

                  <Link href={`/book?itinerary=${itinerary.id}`} className="w-full">
                    <Button size="lg" className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white flex items-center justify-center gap-2">
                      Request for Quote
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>

                  <div className="mt-6 flex flex-col items-center gap-4">
                    <ShareButtons itinerary={itinerary} />
                    <SafariMomentShare itinerary={itinerary} />
                  </div>

                  <div className="border-t border-gray-200 mt-6 pt-6">
                    <h4 className="font-medium mb-4 text-center text-brand-navy">Why Travel With Us</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Customized itineraries to fit your needs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Customer care available 24/7</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Hand-picked Tours & Activities</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Community-focused tourism initiatives</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}