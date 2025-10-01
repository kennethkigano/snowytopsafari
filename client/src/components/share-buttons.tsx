import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import type { Itinerary } from "@shared/schema";

interface ShareButtonsProps {
  itinerary: Itinerary;
}

export function ShareButtons({ itinerary }: ShareButtonsProps) {
  const shareUrl = `${window.location.origin}/itineraries/${itinerary.id}`;
  const title = `Check out this amazing Kenya tour: ${itinerary.title}`;
  const hashtags = ["KenyaTourism", "TravelKenya", "ExploreAfrica"];

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground">Share:</span>
      <FacebookShareButton url={shareUrl} quote={title} hashtag="#KenyaTourism">
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      
      <TwitterShareButton url={shareUrl} title={title} hashtags={hashtags}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      
      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
}
