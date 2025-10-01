import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Camera, Share2, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  PinterestShareButton,
  PinterestIcon
} from "react-share";
import type { Itinerary } from "@shared/schema";
import { cn } from "@/lib/utils";

// Constants for brand colors
const BRAND_COLORS = {
  orange: "#ffa500",
  navy: "#052044", 
  white: "#FFFFFF"
};

interface SafariMomentShareProps {
  itinerary: Itinerary;
  className?: string;
}

export function SafariMomentShare({ itinerary, className }: SafariMomentShareProps) {
  const [open, setOpen] = useState(false);
  const [momentText, setMomentText] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const baseShareUrl = `${window.location.origin}/itineraries/${itinerary.id}`;
  
  const defaultHashtags = ["SnowyTopSafaris", "SafariMoment", "KenyaWildlife", "ExploreKenya"];
  
  const shareTitle = momentText 
    ? `${momentText} - Experience at ${itinerary.title} with SnowyTop Safaris`
    : `My amazing Safari Moment at ${itinerary.title} with SnowyTop Safaris!`;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className={cn(
            "gap-2 text-white border-0 bg-[#ffa500] hover:bg-[#ffa500]/90",
            className
          )}
        >
          <Camera className="h-4 w-4" />
          Share Safari Moment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-white rounded-xl border-none shadow-xl">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-xl text-center font-bold text-[#052044]">
            Share Your Safari Moment
          </DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-2">
          <p className="text-sm text-muted-foreground mb-4 text-center">
            Capture and share your favorite memory from {itinerary.title}
          </p>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="moment-text" className="font-medium text-[#052044]">
                Describe your safari moment
              </Label>
              <Textarea
                id="moment-text"
                placeholder="What made this safari special? Share your experience..."
                className="mt-1.5 focus-visible:ring-[#ffa500] border-gray-200"
                value={momentText}
                onChange={(e) => setMomentText(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="moment-image" className="block mb-1.5 font-medium text-[#052044]">
                Add a photo (optional)
              </Label>
              {!previewUrl ? (
                <div className="border-2 border-dashed border-gray-300 hover:border-[#ffa500]/50 rounded-lg p-6 text-center transition-colors duration-200">
                  <Input
                    id="moment-image"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label 
                    htmlFor="moment-image" 
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <div className="p-3 rounded-full bg-[#ffa500]/10 mb-2">
                      <Camera className="h-8 w-8 text-[#ffa500]" />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">Click to upload a safari photo</span>
                    <span className="text-xs text-gray-500 mt-1">Share your best wildlife moment</span>
                  </label>
                </div>
              ) : (
                <div className="relative rounded-lg overflow-hidden shadow-md border border-gray-100">
                  <img 
                    src={previewUrl} 
                    alt="Safari moment preview" 
                    className="w-full max-h-[200px] object-cover"
                  />
                  <button 
                    onClick={clearImage}
                    className="absolute top-2 right-2 rounded-full bg-[#052044]/80 p-1.5 text-white transition-all hover:bg-[#052044]"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex items-center justify-center mb-3">
                <Share2 className="h-4 w-4 text-[#052044] mr-2" />
                <p className="text-sm font-medium text-center text-[#052044]">
                  Share Your Safari Moment
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-4 flex-wrap bg-gray-50 p-4 rounded-xl">
                <FacebookShareButton 
                  url={baseShareUrl} 
                  title={shareTitle} 
                  hashtag="#SafariMoment"
                >
                  <FacebookIcon size={48} round />
                </FacebookShareButton>
                
                <TwitterShareButton 
                  url={baseShareUrl} 
                  title={shareTitle} 
                  hashtags={defaultHashtags}
                >
                  <TwitterIcon size={48} round />
                </TwitterShareButton>
                
                <WhatsappShareButton 
                  url={baseShareUrl} 
                  title={shareTitle}
                >
                  <WhatsappIcon size={48} round />
                </WhatsappShareButton>
                
                <PinterestShareButton
                  url={baseShareUrl}
                  media={previewUrl || itinerary.imageUrl || ''}
                  description={shareTitle}
                >
                  <PinterestIcon size={48} round />
                </PinterestShareButton>
                
                <EmailShareButton
                  url={baseShareUrl}
                  subject={`My Safari Experience with SnowyTop Safaris`}
                  body={`${shareTitle}\n\nCheck out this amazing safari experience: `}
                >
                  <EmailIcon size={48} round />
                </EmailShareButton>
              </div>
              
              <p className="text-xs text-gray-500 mt-3 text-center italic">
                Help spread the beauty of Kenya's wildlife conservation efforts
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}