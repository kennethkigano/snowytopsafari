import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";

export default function EndangeredSpecies() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Header Section */}
      <div className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Endangered Animal Species in Kenya</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Discover Kenya's most threatened wildlife, their habitats, and conservation efforts to protect these remarkable creatures.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
          <p className="text-lg mb-6">
            Kenya is one of the most biodiverse countries in Africa, home to everything from
            large iconic mammals to elusive forest-dwelling amphibians and birds. However,
            many of these species are threatened or endangered, facing a high risk of
            extinction due to poaching, habitat loss, climate change, and human-wildlife
            conflict.
          </p>
          <p className="text-lg mb-6">
            This guide covers Kenya's most endangered mammals, birds, reptiles, and
            amphibians, where to find them, the threats they face, and what's being done to
            protect them.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-3">What Does "Endangered" Mean?</h3>
            <p>
              According to the IUCN Red List of Threatened Species, an endangered species is
              one that is at high risk of extinction in the wild. Kenya is home to a number of
              animals classified as Endangered, Critically Endangered, or Vulnerable under this
              system.
            </p>
          </div>
        </div>
      </div>

      {/* Endangered Mammals Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Endangered Mammals of Kenya</h2>
          
          <div className="space-y-12">
            {/* Mammal 1 */}
            <Card className="overflow-hidden">
              <div className="bg-primary/10 p-6 border-b">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">1. Hirola Antelope (Hunter's Hartebeest)</h3>
                    <div className="flex items-center mt-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Critically Endangered
                      </span>
                      <span className="mx-2 text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">Fewer than 500 in the wild</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Where Found</h4>
                    <p>Ishaqbini Community Conservancy, Garissa County (along the Kenya–Somalia border)</p>
                    
                    <h4 className="font-semibold mt-4 mb-2">Threats</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Habitat loss</li>
                      <li>Competition with livestock</li>
                      <li>Poaching</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Conservation Efforts</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Community-led sanctuaries (e.g., Ishaqbini Hirola Sanctuary)</li>
                      <li>Intensive monitoring</li>
                      <li>Predator-proof zones</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mammal 2 */}
            <Card className="overflow-hidden">
              <div className="bg-primary/10 p-6 border-b">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">2. Roan Antelope (Hippotragus equinus)</h3>
                    <div className="flex items-center mt-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Endangered
                      </span>
                      <span className="mx-2 text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">Locally rare in Kenya</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Where Found</h4>
                    <p>Ruma National Park (the last viable population in Kenya)</p>
                    
                    <h4 className="font-semibold mt-4 mb-2">Threats</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Habitat fragmentation</li>
                      <li>Human encroachment</li>
                      <li>Limited genetic diversity</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Conservation Efforts</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Kenya Wildlife Service (KWS) roan recovery plan</li>
                      <li>Protected grazing areas</li>
                      <li>Predator control</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mammal 3 */}
            <Card className="overflow-hidden">
              <div className="bg-primary/10 p-6 border-b">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">3. Sable Antelope (Hippotragus niger)</h3>
                    <div className="flex items-center mt-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        Vulnerable
                      </span>
                      <span className="mx-2 text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">Locally rare in Kenya</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Where Found</h4>
                    <p>Shimba Hills National Reserve (Coastal Kenya)</p>
                    
                    <h4 className="font-semibold mt-4 mb-2">Threats</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Habitat degradation</li>
                      <li>Shrinking range</li>
                      <li>Genetic isolation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Conservation Efforts</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Habitat protection in Shimba Hills</li>
                      <li>Anti-poaching patrols</li>
                      <li>Awareness campaigns</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mammal 4 */}
            <Card className="overflow-hidden">
              <div className="bg-primary/10 p-6 border-b">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">4. Mountain Bongo (Tragelaphus eurycerus isaaci)</h3>
                    <div className="flex items-center mt-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Critically Endangered
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Where Found</h4>
                    <p>Aberdare Mountains, Mount Kenya forests, Mau Forest Complex</p>
                    
                    <h4 className="font-semibold mt-4 mb-2">Threats</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Logging</li>
                      <li>Habitat fragmentation</li>
                      <li>Poaching</li>
                      <li>Disease</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Conservation Efforts</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Bongo rewilding projects (e.g., at Mount Kenya Wildlife Conservancy)</li>
                      <li>Captive breeding</li>
                      <li>Camera trap monitoring</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mammal 5 */}
            <Card className="overflow-hidden">
              <div className="bg-primary/10 p-6 border-b">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">5. African Wild Dog (Lycaon pictus)</h3>
                    <div className="flex items-center mt-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Endangered
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Where Found</h4>
                    <p>Laikipia, Samburu, Tsavo, Amboseli, Kajiado</p>
                    
                    <h4 className="font-semibold mt-4 mb-2">Threats</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Disease (rabies, distemper)</li>
                      <li>Roadkill</li>
                      <li>Persecution</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Conservation Efforts</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Collar tracking</li>
                      <li>Vaccination programs</li>
                      <li>Awareness in pastoral communities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* More mammals note */}
            <div className="bg-slate-100 p-6 rounded-lg text-center">
              <p className="text-lg font-medium mb-4">Additional endangered mammals include Black Rhinoceros, Grevy's Zebra, Reticulated Giraffe, Cheetah, African Elephant, and Leopard.</p>
              <Button size="lg" variant="outline">View More Species</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Endangered Birds Section */}
      <div className="container mx-auto px-4 py-12 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Endangered Bird Species in Kenya</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bird 1 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Taita Apalis</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
                  Critically Endangered
                </span>
                <Separator className="my-3" />
                <div className="mt-4">
                  <h4 className="font-semibold mb-1">Where Found</h4>
                  <p className="mb-3">Taita Hills Forests</p>
                  
                  <h4 className="font-semibold mb-1">Threats</h4>
                  <p className="mb-3">Habitat loss from logging and agriculture</p>
                  
                  <h4 className="font-semibold mb-1">Conservation</h4>
                  <p>Indigenous forest regeneration, bird monitoring, community forest programs</p>
                </div>
              </CardContent>
            </Card>

            {/* Bird 2 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Sharpe's Longclaw</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
                  Endangered
                </span>
                <Separator className="my-3" />
                <div className="mt-4">
                  <h4 className="font-semibold mb-1">Where Found</h4>
                  <p className="mb-3">Highland grasslands of Kinangop Plateau and Aberdare ranges</p>
                  
                  <h4 className="font-semibold mb-1">Threats</h4>
                  <p className="mb-3">Agricultural expansion, land-use change</p>
                  
                  <h4 className="font-semibold mb-1">Conservation</h4>
                  <p>Grassland protection, landowner education</p>
                </div>
              </CardContent>
            </Card>

            {/* Bird 3 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Clarke's Weaver</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
                  Critically Endangered
                </span>
                <Separator className="my-3" />
                <div className="mt-4">
                  <h4 className="font-semibold mb-1">Where Found</h4>
                  <p className="mb-3">Arabuko-Sokoke Forest (Coastal Kenya)</p>
                  
                  <h4 className="font-semibold mb-1">Threats</h4>
                  <p className="mb-3">Forest degradation</p>
                  
                  <h4 className="font-semibold mb-1">Conservation</h4>
                  <p>Forest reserves, monitoring by Nature Kenya and BirdLife International</p>
                </div>
              </CardContent>
            </Card>

            {/* Bird 4 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Grey Crowned Crane</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
                  Endangered
                </span>
                <Separator className="my-3" />
                <div className="mt-4">
                  <h4 className="font-semibold mb-1">Where Found</h4>
                  <p className="mb-3">Wetlands in the Rift Valley and western Kenya</p>
                  
                  <h4 className="font-semibold mb-1">Threats</h4>
                  <p className="mb-3">Wetland degradation, illegal trade</p>
                  
                  <h4 className="font-semibold mb-1">Conservation</h4>
                  <p>Wetland restoration, breeding awareness, crane census projects</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Other Notable Species Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Other Notable Endangered Species</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Species 1 */}
            <Card className="bg-gradient-to-br from-amber-50 to-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Pancake Tortoise</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mb-4">
                  Vulnerable
                </span>
                
                <div className="mt-4 space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Habitat</h4>
                    <p>Rocky hills and kopjes in Tsavo and northern Kenya</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">Threats</h4>
                    <p>Illegal pet trade, habitat loss</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">Conservation</h4>
                    <p>CITES trade protection, captive breeding</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Species 2 */}
            <Card className="bg-gradient-to-br from-amber-50 to-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Sagalla Caecilian (Amphibian)</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
                  Critically Endangered
                </span>
                
                <div className="mt-4 space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Habitat</h4>
                    <p>Sagalla Hill near Voi</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">Threats</h4>
                    <p>Agricultural encroachment, loss of moist habitat</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">Conservation</h4>
                    <p>Habitat preservation, environmental education</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Conservation CTA */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-primary/10 p-8 rounded-xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Support Wildlife Conservation in Kenya</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Your visit to Kenya and support for conservation initiatives helps protect these endangered species for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <Button size="lg">Donate to Conservation</Button>
              </Link>
              <Link href="/itineraries">
                <Button variant="outline" size="lg">Explore Wildlife Safaris</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}