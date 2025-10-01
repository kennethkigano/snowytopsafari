import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ImageCarousel } from "./image-carousel";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Logo } from "./logo";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-[650px] max-h-[85vh] overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        <ImageCarousel />
        {/* Enhanced overlay with modern gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70" />
        
        {/* Modern diagonal accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-40 transform -skew-y-2 bg-gradient-to-r from-brand-navy/40 via-brand-orange/30 to-brand-navy/40" />
        </div>
      </div>

      {/* Floating translucent elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-brand-orange opacity-5 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-brand-navy opacity-5 blur-xl"></div>

      {/* Content */}
      <div className="relative z-10 min-h-[650px] max-h-[85vh] w-full flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto px-4 text-center text-white pt-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full blur-md bg-gradient-to-r from-brand-orange/30 to-brand-navy/30"></div>
              <div className="relative">
                <Logo height={120} width={400} />
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Your Gateway to <span className="relative inline-block">
              <span className="relative z-10 text-brand-orange">Global Adventures</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-orange/20 rounded-full transform -rotate-1"></span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light text-white/90 leading-relaxed"
          >
            Snowytop Safaris – Travel with Purpose. Explore with Heart.

Nanyuki, Kenya | Est. for the Wild & the Community
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/itineraries">
              <Button 
                size="lg" 
                className="relative overflow-hidden group bg-gradient-to-r from-brand-navy to-brand-navy/90 text-white min-w-[200px] h-14 rounded-xl shadow-lg hover:shadow-xl border border-white/10 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
                  Explore Itineraries
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 to-brand-orange/0 w-full scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
              </Button>
            </Link>
            <Link href="/book">
              <Button 
                size="lg" 
                className="relative overflow-hidden group bg-gradient-to-r from-brand-orange to-brand-orange/90 text-brand-navy min-w-[200px] h-14 rounded-xl shadow-lg hover:shadow-xl font-medium"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Now
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 w-full scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/70 text-sm mb-2">Scroll to discover</span>
        <ChevronDown className="w-6 h-6 text-white/70 animate-bounce" />
      </motion.div>
      
      {/* Modern decorative accent at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy via-brand-orange to-brand-navy"></div>
    </div>
  );
};

export default HeroSection;