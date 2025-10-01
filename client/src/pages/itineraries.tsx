import { useQuery } from "@tanstack/react-query";
import type { Itinerary } from "@shared/schema";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loading } from "@/components/ui/loading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  SearchIcon, 
  StarIcon, 
  MapPinIcon, 
  CalendarIcon,
  Clock, 
  DollarSign,
  Mountain,
  Waves,
  Compass,
  Sparkles,
  Heart,
  Zap,
  Info,
  Leaf,
  ChevronRight
} from "lucide-react";

// Package types based on the document
const packageTypes = ["All", "Luxury", "Budget-Friendly", "Community & Cultural"];
const countries = ["All", "Kenya", "Tanzania", "Uganda", "Dubai"];
const difficultyLevels = ["Easy", "Moderate", "Challenging"];

const getPackageTypeIcon = (packageType: string) => {
  switch (packageType.toLowerCase()) {
    case 'luxury':
      return <Sparkles className="h-5 w-5" />;
    case 'budget-friendly':
      return <DollarSign className="h-5 w-5" />;
    case 'community & cultural':
      return <Heart className="h-5 w-5" />;
    case 'adventure':
      return <Zap className="h-5 w-5" />;
    case 'wildlife':
      return <Leaf className="h-5 w-5" />;
    case 'nature':
      return <Mountain className="h-5 w-5" />;
    case 'beach':
      return <Waves className="h-5 w-5" />;
    case 'mountain':
      return <Mountain className="h-5 w-5" />;
    default:
      return <Compass className="h-5 w-5" />;
  }
};

export default function Itineraries() {
  const [searchQuery, setSearchQuery] = useState("");
  const [packageType, setPackageType] = useState<string>("all");
  const [country, setCountry] = useState<string>("all");
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Get URL query parameters
  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const typeParam = searchParams.get('type');
  const countryParam = searchParams.get('country');

  // Set initial filters based on URL parameters
  useEffect(() => {
    if (typeParam) {
      setPackageType(typeParam.toLowerCase());
      setActiveTab(typeParam.toLowerCase());
    }
    if (countryParam) {
      setCountry(countryParam);
    }
  }, [typeParam, countryParam]);

  const { data: itineraries, isLoading } = useQuery<Itinerary[]>({
    queryKey: ["/api/itineraries", searchQuery, packageType, country, difficulty],
    queryFn: async () => {
      const params = new URLSearchParams({
        ...(searchQuery && { query: searchQuery }),
        ...(packageType && packageType !== "all" && { packageType }),
        ...(country && country !== "all" && { country }),
        ...(difficulty && difficulty !== "all" && { difficultyLevel: difficulty })
      });
      const response = await fetch(`/api/itineraries?${params}`);
      return response.json();
    }
  });

  const filteredItineraries = itineraries?.filter(itinerary => {
    if (activeTab === "all") return true;
    // Check if the packageType property exists, otherwise fallback to category for backward compatibility
    const itemType = (itinerary.packageType || itinerary.category || "").toLowerCase();
    return itemType === activeTab.toLowerCase();
  });

  // Prepare tabs based on our package types
  const packageTypeTabs = ["all", ...packageTypes.map(type => type.toLowerCase())].filter(t => t !== "all");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 to-brand-navy/40 z-10"></div>
        <div className="h-[300px] md:h-[400px] w-full overflow-hidden">
          <img 
            src="/images/itineraries/_MG_1463.jpg" 
            alt="Safari Adventures" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">Discover Global <span className="text-brand-orange">Destinations</span></h1>
          <p className="text-xl max-w-3xl text-center">Your gateway to adventures across Kenya, Tanzania, Uganda, and beyond</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Search Bar */}
        <div className="bg-white -mt-16 rounded-xl shadow-xl p-6 max-w-4xl mx-auto relative z-30 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-brand-navy/50" />
              <Input
                placeholder="Search destinations, activities, or experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-brand-navy/20 focus-visible:ring-brand-orange"
              />
            </div>
            <Button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:w-auto bg-brand-orange hover:bg-brand-orange/90"
            >
              {showFilters ? "Hide Filters" : "More Filters"}
            </Button>
          </div>

          {/* Filters - Country First, then Package Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Select value={country || "all"} onValueChange={setCountry}>
              <SelectTrigger className="border-brand-navy/20 focus:ring-brand-orange">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                {countries.filter(c => c.toLowerCase() !== "all").map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={packageType || "all"} onValueChange={setPackageType}>
              <SelectTrigger className="border-brand-navy/20 focus:ring-brand-orange">
                <SelectValue placeholder="Select Package Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Package Types</SelectItem>
                {packageTypes.filter(type => type.toLowerCase() !== "all").map((type) => (
                  <SelectItem key={type} value={type.toLowerCase()}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Expanded Additional Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">

              <Select value={difficulty || ""} onValueChange={setDifficulty}>
                <SelectTrigger className="border-brand-navy/20 focus:ring-brand-orange">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Difficulty</SelectItem>
                  {difficultyLevels.map((level) => (
                    <SelectItem key={level} value={level.toLowerCase()}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        {/* Package Type Tabs */}
        <div className="mt-12 mb-8">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b border-gray-200 overflow-x-auto scrollbar-hide">
              <TabsList className="bg-transparent h-auto p-0 w-full justify-start">
                <TabsTrigger
                  key="all"
                  value="all"
                  className={`px-4 py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-brand-orange data-[state=active]:border-b-2 data-[state=active]:border-brand-orange rounded-none capitalize whitespace-nowrap`}
                >
                  All Packages
                </TabsTrigger>
                {packageTypes.map((type) => type.toLowerCase() !== "all" && (
                  <TabsTrigger
                    key={type.toLowerCase()}
                    value={type.toLowerCase()}
                    className={`px-4 py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-brand-orange data-[state=active]:border-b-2 data-[state=active]:border-brand-orange rounded-none capitalize whitespace-nowrap`}
                  >
                    {type}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent key="all" value="all" className="mt-6">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center min-h-[400px]">
                  <Loading variant="pattern" size="lg" />
                  <p className="mt-4 text-brand-navy font-medium">Discovering amazing adventures...</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItineraries?.map((itinerary) => (
                      <Card key={itinerary.id} className="group overflow-hidden border-none hover:shadow-xl transition-all duration-300 bg-white rounded-xl shadow">
                        {itinerary.imageUrl && (
                          <div className="aspect-[4/3] w-full overflow-hidden relative">
                            <img
                              src={itinerary.imageUrl}
                              alt={itinerary.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-0 right-0 m-4">
                              <Badge className="bg-white text-brand-navy font-semibold py-1">
                                {itinerary.difficultyLevel || "Easy"}
                              </Badge>
                            </div>
                            <div className="absolute bottom-0 left-0 m-4">
                              <Badge className="bg-brand-orange text-white px-3 py-1 flex items-center gap-1">
                                {getPackageTypeIcon(itinerary.packageType || itinerary.category || "")}
                                {itinerary.packageType || itinerary.category || "Adventure"}
                              </Badge>
                            </div>
                          </div>
                        )}
                        <CardHeader className="pt-5 pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl text-brand-navy">{itinerary.title}</CardTitle>
                          </div>
                          {itinerary.averageRating ? (
                            <div className="flex items-center gap-1 mt-1">
                              <StarIcon className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              <span>{(+itinerary.averageRating).toFixed(1)}</span>
                              <span className="text-gray-500">
                                ({itinerary.totalReviews} reviews)
                              </span>
                            </div>
                          ) : null}
                        </CardHeader>
                        <CardContent className="pb-3">
                          <p className="text-gray-600 line-clamp-2 mb-3">{itinerary.description}</p>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="flex items-center gap-1 text-gray-700">
                              <CalendarIcon className="h-4 w-4 text-brand-navy/70" />
                              <span>{itinerary.duration} day{itinerary.duration !== 1 ? 's' : ''}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-700">
                              <MapPinIcon className="h-4 w-4 text-brand-navy/70" />
                              <span>{itinerary.location}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Link href={`/itineraries/${itinerary.id}`} className="w-full">
                            <Button className="w-full border-2 border-brand-orange text-brand-orange hover:text-white bg-white hover:bg-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors flex items-center justify-center gap-2">
                              <span>View Details</span>
                              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>

                  {filteredItineraries?.length === 0 && (
                    <div className="text-center py-12 bg-brand-navy/5 rounded-lg border border-brand-navy/10">
                      <h3 className="text-xl font-bold text-brand-navy mb-2">No Safaris Found</h3>
                      <p className="text-gray-700 mb-4">Try adjusting your search filters to find the perfect adventure.</p>
                      <Button 
                        onClick={() => {
                          setSearchQuery("");
                          setPackageType("all");
                          setCountry("all");
                          setDifficulty(null);
                          setActiveTab("all");
                        }}
                        className="bg-brand-orange hover:bg-brand-orange/90 text-white"
                      >
                        Reset Filters
                      </Button>
                    </div>
                  )}
                </>
              )}
            </TabsContent>

            {packageTypes.map((type) => type.toLowerCase() !== "all" && (
              <TabsContent key={type.toLowerCase()} value={type.toLowerCase()} className="mt-6">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center min-h-[400px]">
                    <Loading variant="pattern" size="lg" />
                    <p className="mt-4 text-brand-navy font-medium">Discovering {type} packages...</p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredItineraries?.map((itinerary) => (
                        <Card key={itinerary.id} className="group overflow-hidden border-none hover:shadow-xl transition-all duration-300 bg-white rounded-xl shadow">
                          {itinerary.imageUrl && (
                            <div className="aspect-[4/3] w-full overflow-hidden relative">
                              <img
                                src={itinerary.imageUrl}
                                alt={itinerary.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute top-0 right-0 m-4">
                                <Badge className="bg-white text-brand-navy font-semibold py-1">
                                  {itinerary.difficultyLevel || "Easy"}
                                </Badge>
                              </div>
                              <div className="absolute bottom-0 left-0 m-4">
                                <Badge className="bg-brand-orange text-white px-3 py-1 flex items-center gap-1">
                                  {getPackageTypeIcon(itinerary.packageType || itinerary.category || "")}
                                  {itinerary.packageType || itinerary.category || "Adventure"}
                                </Badge>
                              </div>
                            </div>
                          )}
                          <CardHeader className="pt-5 pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-xl text-brand-navy">{itinerary.title}</CardTitle>
                            </div>
                            {itinerary.averageRating ? (
                              <div className="flex items-center gap-1 mt-1">
                                <StarIcon className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                                <span>{(+itinerary.averageRating).toFixed(1)}</span>
                                <span className="text-gray-500">
                                  ({itinerary.totalReviews} reviews)
                                </span>
                              </div>
                            ) : null}
                          </CardHeader>
                          <CardContent className="pb-3">
                            <p className="text-gray-600 line-clamp-2 mb-3">{itinerary.description}</p>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div className="flex items-center gap-1 text-gray-700">
                                <CalendarIcon className="h-4 w-4 text-brand-navy/70" />
                                <span>{itinerary.duration} day{itinerary.duration !== 1 ? 's' : ''}</span>
                              </div>
                              <div className="flex items-center gap-1 text-gray-700">
                                <MapPinIcon className="h-4 w-4 text-brand-navy/70" />
                                <span>{itinerary.location}</span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="pt-0">
                            <Link href={`/itineraries/${itinerary.id}`} className="w-full">
                              <Button className="w-full border-2 border-brand-orange text-brand-orange hover:text-white bg-white hover:bg-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors flex items-center justify-center gap-2">
                                <span>View Details</span>
                                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>

                    {filteredItineraries?.length === 0 && (
                      <div className="text-center py-12 bg-brand-navy/5 rounded-lg border border-brand-navy/10">
                        <h3 className="text-xl font-bold text-brand-navy mb-2">No {type} Packages Found</h3>
                        <p className="text-gray-700 mb-4">Try adjusting your search filters to find the perfect adventure.</p>
                        <Button 
                          onClick={() => {
                            setSearchQuery("");
                            setPackageType("all");
                            setCountry("all");
                            setDifficulty(null);
                            setActiveTab("all");
                          }}
                          className="bg-brand-orange hover:bg-brand-orange/90 text-white"
                        >
                          Reset Filters
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Featured Experiences */}
        <section className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-navy">Why Choose <span className="text-brand-orange">SnowyTop Safaris</span></h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              We create authentic and meaningful safari experiences that connect you with East Africa's wildlife, culture, and natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="h-12 w-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-navy">Personalized Experiences</h3>
              <p className="text-gray-600">
                Every journey is customized to your interests, pace, and comfort level, ensuring an unforgettable adventure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="h-12 w-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-navy">Expert Local Guides</h3>
              <p className="text-gray-600">
                Our knowledgeable guides share insider insights and ensure authentic cultural connections.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="h-12 w-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
                <Info className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-navy">Community Support</h3>
              <p className="text-gray-600">
                10% of our proceeds go directly to local communities and conservation efforts across East Africa.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}