import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

// Using the new background slides for the carousel
const images = [
  {
    url: "/images/carousel/elephant-3093096_1280.jpg",
    caption: "Wildlife - Elephants in Amboseli",
    category: "Wildlife"
  },
  {
    url: "/images/carousel/africa-3409822_640.jpg",
    caption: "Safari Adventure - Kenya",
    category: "Safari"
  },
  {
    url: "/images/carousel/bird-4051412_1280.jpg",
    caption: "Birdwatching - Lake Naivasha",
    category: "Nature"
  },
  {
    url: "/images/carousel/mount-kenya-7377812_1280 (1).jpg",
    caption: "Mountain - Mount Kenya Trek",
    category: "Mountain"
  },
  {
    url: "/images/carousel/rhino-4997858_640.jpg",
    caption: "Wildlife - Rhino Conservation",
    category: "Conservation"
  },
  {
    url: "/images/carousel/_MG_0067.jpg",
    caption: "Safari Experience - Maasai Mara",
    category: "Safari"
  },
  {
    url: "/images/carousel/WhatsApp Image 2025-03-12 at 11.43.38.jpeg",
    caption: "Adventure - Safari Camping",
    category: "Adventure"
  }
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = React.useState(true);
  
  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (autoplayEnabled) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplayEnabled]);
  
  const handleNext = () => {
    setAutoplayEnabled(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const handlePrevious = () => {
    setAutoplayEnabled(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  const handleDotClick = (index: number) => {
    setAutoplayEnabled(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full">
      {/* Images */}
      <div className="w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <motion.div
            key={image.url}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 1.1
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent py-6 px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  y: index === currentIndex ? 0 : 20 
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="inline-block px-2 py-1 sm:px-3 bg-brand-orange/90 text-brand-navy rounded-full text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
                  {image.category}
                </div>
                <p className="text-white text-base sm:text-lg md:text-xl font-medium">{image.caption}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex items-center space-x-1 sm:space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-brand-orange sm:w-4 w-3" : "bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={handlePrevious}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 sm:p-2 transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
          <path d="M15 18l-6-6 6-6"></path>
        </svg>
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 sm:p-2 transition-all duration-300"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
          <path d="M9 18l6-6-6-6"></path>
        </svg>
      </button>
    </div>
  );
}