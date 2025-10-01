import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";
import "@/components/ui/navigation-menu.css";
import { Logo } from "./logo";

const NavBar = () => {
  const isMobile = useIsMobile();
  const [location] = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const MobileNav = () => (
    <div className="flex flex-col gap-5">
      <Link href="/">
        <Button 
          variant="ghost" 
          className={`w-full justify-start rounded-lg text-base transition-all duration-300 ${
            location === "/" 
              ? "bg-gradient-to-r from-brand-orange/20 to-brand-navy/10 text-brand-navy font-medium border-l-4 border-brand-orange pl-3" 
              : "hover:bg-white/5 hover:translate-x-1"
          }`}
        >
          Home
        </Button>
      </Link>
      
      <div className="px-3 py-1 text-xs uppercase tracking-wider font-semibold text-brand-navy/70 border-b border-brand-navy/10">Destinations</div>
      <Link href="/destinations/kenya">
        <Button 
          variant="ghost" 
          className={`w-full justify-start rounded-lg text-base transition-all duration-300 ${
            location.startsWith("/destinations/kenya") 
              ? "bg-gradient-to-r from-brand-orange/20 to-brand-navy/10 text-brand-navy font-medium border-l-4 border-brand-orange pl-3" 
              : "hover:bg-white/5 hover:translate-x-1"
          }`}
        >
          Kenya
        </Button>
      </Link>
      <Link href="/destinations/tanzania">
        <Button 
          variant="ghost" 
          className={`w-full justify-start rounded-lg text-base transition-all duration-300 ${
            location.startsWith("/destinations/tanzania") 
              ? "bg-gradient-to-r from-brand-orange/20 to-brand-navy/10 text-brand-navy font-medium border-l-4 border-brand-orange pl-3" 
              : "hover:bg-white/5 hover:translate-x-1"
          }`}
        >
          Tanzania
        </Button>
      </Link>
      <Link href="/destinations/uganda">
        <Button 
          variant="ghost" 
          className={`w-full justify-start rounded-lg text-base transition-all duration-300 ${
            location.startsWith("/destinations/uganda") 
              ? "bg-gradient-to-r from-brand-orange/20 to-brand-navy/10 text-brand-navy font-medium border-l-4 border-brand-orange pl-3" 
              : "hover:bg-white/5 hover:translate-x-1"
          }`}
        >
          Uganda
        </Button>
      </Link>
      <Link href="/itineraries">
        <Button 
          variant="ghost" 
          className={`w-full justify-start rounded-lg text-base transition-all duration-300 ${
            location.startsWith("/itineraries") 
              ? "bg-gradient-to-r from-brand-orange/20 to-brand-navy/10 text-brand-navy font-medium border-l-4 border-brand-orange pl-3" 
              : "hover:bg-white/5 hover:translate-x-1"
          }`}
        >
          All Itineraries
        </Button>
      </Link>
      
      <div className="px-3 py-1 text-xs uppercase tracking-wider font-semibold text-brand-navy/70 border-b border-brand-navy/10 mt-2">About Us</div>
      <Link href="/about">
        <Button 
          variant="ghost" 
          className={`w-full justify-start rounded-lg text-base transition-all duration-300 ${
            location === "/about" 
              ? "bg-gradient-to-r from-brand-orange/20 to-brand-navy/10 text-brand-navy font-medium border-l-4 border-brand-orange pl-3" 
              : "hover:bg-white/5 hover:translate-x-1"
          }`}
        >
          Our Story
        </Button>
      </Link>
      <Link href="/teams">
        <Button 
          variant="ghost" 
          className={`w-full justify-start rounded-lg text-base transition-all duration-300 ${
            location === "/teams" 
              ? "bg-gradient-to-r from-brand-orange/20 to-brand-navy/10 text-brand-navy font-medium border-l-4 border-brand-orange pl-3" 
              : "hover:bg-white/5 hover:translate-x-1"
          }`}
        >
          Meet The Team
        </Button>
      </Link>
      <Link href="/fleet">
        <Button 
          variant="ghost" 
          className={`w-full justify-start rounded-lg text-base transition-all duration-300 ${
            location === "/fleet" 
              ? "bg-gradient-to-r from-brand-orange/20 to-brand-navy/10 text-brand-navy font-medium border-l-4 border-brand-orange pl-3" 
              : "hover:bg-white/5 hover:translate-x-1"
          }`}
        >
          Our Safari Fleet
        </Button>
      </Link>
      
      <div className="px-3 py-1 text-xs uppercase tracking-wider font-semibold text-brand-navy/70 border-b border-brand-navy/10 mt-2">Community & Support</div>
      <Link href="/community-engagement">
        <Button 
          variant="ghost" 
          className={`w-full justify-start rounded-lg text-base transition-all duration-300 ${
            location === "/community-engagement" 
              ? "bg-gradient-to-r from-brand-orange/20 to-brand-navy/10 text-brand-navy font-medium border-l-4 border-brand-orange pl-3" 
              : "hover:bg-white/5 hover:translate-x-1"
          }`}
        >
          Community Engagement
        </Button>
      </Link>
      <Link href="/community">
        <Button 
          variant="ghost" 
          className={`w-full justify-start rounded-lg text-base transition-all duration-300 ${
            location === "/community" 
              ? "bg-gradient-to-r from-brand-orange/20 to-brand-navy/10 text-brand-navy font-medium border-l-4 border-brand-orange pl-3" 
              : "hover:bg-white/5 hover:translate-x-1"
          }`}
        >
          Community Activities
        </Button>
      </Link>
      <Link href="/volunteers">
        <Button 
          variant="ghost" 
          className={`w-full justify-start rounded-lg text-base transition-all duration-300 ${
            location === "/volunteers" 
              ? "bg-gradient-to-r from-brand-orange/20 to-brand-navy/10 text-brand-navy font-medium border-l-4 border-brand-orange pl-3" 
              : "hover:bg-white/5 hover:translate-x-1"
          }`}
        >
          Volunteer With Us
        </Button>
      </Link>
      <Link href="/contact">
        <Button 
          variant="ghost" 
          className={`w-full justify-start rounded-lg text-base transition-all duration-300 ${
            location === "/contact" 
              ? "bg-gradient-to-r from-brand-orange/20 to-brand-navy/10 text-brand-navy font-medium border-l-4 border-brand-orange pl-3" 
              : "hover:bg-white/5 hover:translate-x-1"
          }`}
        >
          Contact Us
        </Button>
      </Link>
      
      <div className="mt-4 pt-4 border-t border-brand-navy/10">
        <Link href="/book">
          <Button className="w-full py-6 bg-brand-orange text-brand-navy hover:bg-brand-orange/90 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-base">
            Book Your Safari
          </Button>
        </Link>
      </div>
    </div>
  );

  const DesktopNav = () => (
    <NavigationMenu.Root className="relative">
      <NavigationMenu.List className="flex items-center space-x-2">
        <NavigationMenu.Item>
          <Link href="/">
            <Button 
              variant="ghost" 
              className={`text-white hover:text-brand-orange hover:bg-white/10 rounded-lg transition-all duration-300 ${
                location === "/" ? "bg-white/10 text-brand-orange border-b-2 border-brand-orange" : ""
              }`}
            >
              Home
            </Button>
          </Link>
        </NavigationMenu.Item>
        
        {/* Destinations dropdown */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={cn(
            "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
            "bg-transparent text-white",
            "hover:bg-brand-navy/80 hover:text-brand-orange",
            "focus:bg-brand-navy/80 focus:text-brand-orange focus:outline-none",
            "data-[state=open]:bg-brand-navy/80 data-[state=open]:text-brand-orange",
            isActive("/itineraries") || isActive("/destinations") ? "bg-brand-navy/80 text-brand-orange" : ""
          )}>
            Destinations
            <ChevronDown
              className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto z-50">
            <div className="w-[400px] p-4 md:w-[800px] bg-white shadow-md rounded-md border">
              <div className="grid gap-4 md:grid-cols-3">
                <Link href="/destinations/kenya" className="block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-brand-navy/10 focus:bg-brand-navy/10">
                  <div className="text-sm font-medium leading-normal text-brand-navy">Kenya</div>
                  <p className="text-sm leading-relaxed text-muted-foreground whitespace-normal">
                    Wildlife safaris, Maasai experiences & coastal retreats
                  </p>
                </Link>
                <Link href="/destinations/tanzania" className="block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-brand-navy/10 focus:bg-brand-navy/10">
                  <div className="text-sm font-medium leading-normal text-brand-navy">Tanzania</div>
                  <p className="text-sm leading-relaxed text-muted-foreground whitespace-normal">
                    Serengeti, Ngorongoro & Zanzibar adventures
                  </p>
                </Link>
                <Link href="/destinations/uganda" className="block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-brand-navy/10 focus:bg-brand-navy/10">
                  <div className="text-sm font-medium leading-normal text-brand-navy">Uganda</div>
                  <p className="text-sm leading-relaxed text-muted-foreground whitespace-normal">
                    Gorilla trekking, primate safaris & Nile expeditions
                  </p>
                </Link>
                <Link href="/experiences/dubai" className="block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-brand-navy/10 focus:bg-brand-navy/10">
                  <div className="text-sm font-medium leading-normal text-brand-navy">Dubai</div>
                  <p className="text-sm leading-relaxed text-muted-foreground whitespace-normal">
                    Modern luxury, iconic architecture & desert adventures
                  </p>
                </Link>
                <Link href="/experiences/luxury" className="block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-brand-navy/10 focus:bg-brand-navy/10">
                  <div className="text-sm font-medium leading-normal text-brand-navy">Luxury Experiences</div>
                  <p className="text-sm leading-relaxed text-muted-foreground whitespace-normal">
                    Premium safari lodges, exclusive experiences & VIP services
                  </p>
                </Link>
                <Link href="/experiences/adventure" className="block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-brand-navy/10 focus:bg-brand-navy/10">
                  <div className="text-sm font-medium leading-normal text-brand-navy">Adventure Travel</div>
                  <p className="text-sm leading-relaxed text-muted-foreground whitespace-normal">
                    Kilimanjaro treks, Nile rafting & active adventures
                  </p>
                </Link>
                <Link href="/itineraries" className="block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-brand-navy/10 focus:bg-brand-navy/10">
                  <div className="text-sm font-medium leading-normal text-brand-navy">All Itineraries</div>
                  <p className="text-sm leading-relaxed text-muted-foreground whitespace-normal">
                    Browse our complete collection of East African adventures
                  </p>
                </Link>
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        
        {/* About Us dropdown */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={cn(
            "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
            "bg-transparent text-white",
            "hover:bg-brand-navy/80 hover:text-brand-orange",
            "focus:bg-brand-navy/80 focus:text-brand-orange focus:outline-none",
            "data-[state=open]:bg-brand-navy/80 data-[state=open]:text-brand-orange",
            isActive("/teams") || isActive("/fleet") || isActive("/about") ? "bg-brand-navy/80 text-brand-orange" : ""
          )}>
            About Us
            <ChevronDown
              className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto z-50">
            <div className="w-[300px] p-4 md:w-[400px] bg-white shadow-md rounded-md border">
              <div className="grid gap-3">
                <Link href="/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-navy/10 focus:bg-brand-navy/10">
                  <div className="text-sm font-medium leading-none text-brand-navy">Our Story</div>
                  <p className="text-sm leading-snug text-muted-foreground">
                    Learn about our mission and commitment to sustainable tourism
                  </p>
                </Link>
                <Link href="/teams" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-navy/10 focus:bg-brand-navy/10">
                  <div className="text-sm font-medium leading-none text-brand-navy">Meet The Team</div>
                  <p className="text-sm leading-snug text-muted-foreground">
                    Get to know our experienced guides and staff
                  </p>
                </Link>
                <Link href="/fleet" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-navy/10 focus:bg-brand-navy/10">
                  <div className="text-sm font-medium leading-none text-brand-navy">Our Safari Fleet</div>
                  <p className="text-sm leading-snug text-muted-foreground">
                    View our comfortable and reliable safari vehicles
                  </p>
                </Link>
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        
        {/* Community dropdown */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={cn(
            "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
            "bg-transparent text-white",
            "hover:bg-brand-navy/80 hover:text-brand-orange",
            "focus:bg-brand-navy/80 focus:text-brand-orange focus:outline-none",
            "data-[state=open]:bg-brand-navy/80 data-[state=open]:text-brand-orange", 
            isActive("/community") || isActive("/volunteers") || isActive("/contact") || isActive("/community-engagement") ? "bg-brand-navy/80 text-brand-orange" : ""
          )}>
            Community
            <ChevronDown
              className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto z-50">
            <div className="w-[300px] p-4 md:w-[400px] bg-white shadow-md rounded-md border">
              <div className="grid gap-3">
                <Link href="/community-engagement" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-navy/10 focus:bg-brand-navy/10">
                  <div className="text-sm font-medium leading-none text-brand-navy">Community Engagement</div>
                  <p className="text-sm leading-snug text-muted-foreground">
                    Explore our impactful community projects and initiatives
                  </p>
                </Link>
                <Link href="/community" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-navy/10 focus:bg-brand-navy/10">
                  <div className="text-sm font-medium leading-none text-brand-navy">Community Activities</div>
                  <p className="text-sm leading-snug text-muted-foreground">
                    Discover how we support local initiatives and conservation
                  </p>
                </Link>
                <Link href="/volunteers" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-navy/10 focus:bg-brand-navy/10">
                  <div className="text-sm font-medium leading-none text-brand-navy">Volunteer With Us</div>
                  <p className="text-sm leading-snug text-muted-foreground">
                    Join our volunteer programs and make a difference
                  </p>
                </Link>
                <Link href="/contact" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-navy/10 focus:bg-brand-navy/10">
                  <div className="text-sm font-medium leading-none text-brand-navy">Contact Us</div>
                  <p className="text-sm leading-snug text-muted-foreground">
                    Get in touch with our team for inquiries and assistance
                  </p>
                </Link>
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        
        <NavigationMenu.Item>
          <Link href="/book">
            <Button className="bg-brand-orange text-brand-navy hover:bg-brand-orange/90 font-medium">
              Book Now
            </Button>
          </Link>
        </NavigationMenu.Item>
        
        <NavigationMenu.Indicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>
      
      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center z-50">
        <NavigationMenu.Viewport className="relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-md bg-brand-navy/95 text-white shadow-lg">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="overflow-hidden">
              <Logo 
                variant="default" 
                width={180} 
                height={50} 
                className="transform transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </Link>
        </div>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10 hover:text-brand-orange rounded-full transition-all duration-300"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l-brand-orange/30">
              <div className="py-6">
                <div className="mb-8 flex items-center justify-center w-full py-3">
                  <Logo width={200} height={70} className="fade-in" />
                </div>
                <div className="slide-in-right">
                  <MobileNav />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="fade-in">
            <DesktopNav />
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;