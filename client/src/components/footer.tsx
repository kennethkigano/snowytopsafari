import { Link } from "wouter";
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { BrandTiktok } from "./tiktok-icon";
import { Logo } from "./logo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-brand-navy to-brand-navy/95 text-white mt-auto relative">
      {/* Modern diagonal divide at top */}
      <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 transform -skew-y-2 bg-white"></div>
      </div>

      {/* Accent border line */}
      <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy via-brand-orange to-brand-navy"></div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-safari-texture pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-16 pt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-6">
            <div className="mb-4 w-48">
              <img 
                src="/images/snowytop-logo.png" 
                alt="SnowyTop Safaris Logo" 
                className="object-contain w-full h-auto"
              />
            </div>
            <p className="text-white/80 leading-relaxed max-w-md">
              Experience authentic Kenyan adventures with our curated tours and community-driven experiences. 
              Creating unforgettable memories while supporting local communities and conservation efforts.
            </p>
            <div className="flex space-x-6 pt-2">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-orange transition-colors duration-300 transform hover:scale-110">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/snowytopsafaris/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-orange transition-colors duration-300 transform hover:scale-110">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@snowytop.safaris?_t=8fmsr9xc0r_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-orange transition-colors duration-300 transform hover:scale-110">
                <BrandTiktok className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-6 text-lg text-brand-orange">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/itineraries" className="text-white/80 hover:text-brand-orange transition-colors duration-300 flex items-center">
                  <span>Itineraries</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-70" />
                </Link>
              </li>
              <li>
                <Link href="/endangered-species" className="text-white/80 hover:text-brand-orange transition-colors duration-300 flex items-center">
                  <span>Wildlife</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-70" />
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-white/80 hover:text-brand-orange transition-colors duration-300 flex items-center">
                  <span>Community</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-70" />
                </Link>
              </li>
              <li>
                <Link href="/volunteers" className="text-white/80 hover:text-brand-orange transition-colors duration-300 flex items-center">
                  <span>Volunteer</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-70" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-6 text-lg text-brand-orange">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-white/80 hover:text-brand-orange transition-colors duration-300 flex items-center">
                  <span>About Us</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-70" />
                </Link>
              </li>
              <li>
                <Link href="/teams" className="text-white/80 hover:text-brand-orange transition-colors duration-300 flex items-center">
                  <span>Our Team</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-70" />
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="text-white/80 hover:text-brand-orange transition-colors duration-300 flex items-center">
                  <span>Safari Fleet</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-70" />
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-white/80 hover:text-brand-orange transition-colors duration-300 flex items-center">
                  <span>Book With Us</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-70" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-6 text-lg text-brand-orange">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-white/80">+254 723 619669</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-brand-orange shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-white/80">reservations@snowytopsafari.com</span>
                  <span className="text-white/80">sales@snowytopsafari.com</span>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-white/80">P.O Box 734, Nanyuki, 10400</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} SnowyTop Safaris Ltd. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-brand-orange">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-orange">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
