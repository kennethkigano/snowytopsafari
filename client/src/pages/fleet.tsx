import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { FleetVehicle } from "@shared/schema";
import { Loading } from "@/components/ui/loading";

export default function Fleet() {
  const { data: fleetVehicles, isLoading } = useQuery<FleetVehicle[]>({ 
    queryKey: ['/api/fleet-vehicles']
  });

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-brand-navy">Our <span className="text-brand-orange">Safari Fleet</span></h1>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Explore Kenya's magnificent landscapes in comfort and style with our well-maintained safari vehicles.
              Each vehicle is specially equipped for wildlife viewing and optimized for Kenya's diverse terrains.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <Loading variant="pattern" size="lg" />
            <p className="mt-4 text-brand-navy font-medium">Loading our safari vehicles...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-brand-navy">Our <span className="text-brand-orange">Safari Fleet</span></h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Explore Kenya's magnificent landscapes in comfort and style with our well-maintained safari vehicles.
            Each vehicle is specially equipped for wildlife viewing and optimized for Kenya's diverse terrains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {fleetVehicles?.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="aspect-video w-full overflow-hidden bg-brand-navy/5">
                <img
                  src={vehicle.imageUrl}
                  alt={vehicle.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="border-b border-brand-navy/10">
                <CardTitle className="text-2xl text-brand-navy">{vehicle.name}</CardTitle>
                <p className="text-brand-orange font-medium">{vehicle.capacity}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-5 text-gray-700 leading-relaxed">{vehicle.description}</p>
                <div className="bg-brand-navy/5 p-4 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-3">Key Features:</h3>
                  <ul className="space-y-2 text-gray-700">
                    {vehicle.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-brand-orange text-lg">•</span> 
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-medium">
                  {vehicle.type}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-6 bg-brand-navy/5 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-brand-navy">Ready to <span className="text-brand-orange">Book</span> Your Safari?</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            Our vehicles are regularly serviced and maintained to the highest standards, ensuring your comfort and safety throughout your adventure.
          </p>
          <a href="/book" className="inline-flex items-center justify-center h-10 px-6 font-medium bg-brand-orange text-white hover:bg-brand-orange/90 rounded-md shadow-md transition-colors">
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
}