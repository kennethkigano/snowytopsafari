import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface DestinationHeroProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const DestinationHero = ({ title, description, imageSrc, imageAlt }: DestinationHeroProps) => {
  return (
    <div className="relative h-[500px] rounded-xl overflow-hidden mb-12">
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 to-transparent flex flex-col justify-center p-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mb-6">
          {description}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/book">
            <Button size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90">
              Plan Your Journey
            </Button>
          </Link>
          <Link href="/itineraries">
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
              View All Itineraries
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};