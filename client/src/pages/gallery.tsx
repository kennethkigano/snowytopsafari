import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Handle closing the dialog
  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const communityImages = [
    {
      src: "/images/gallery_community/_MG_1463.jpg",
      alt: "Binti Mwangaza community certificate presentation"
    },
    {
      src: "/images/gallery_community/_MG_1570.jpg",
      alt: "Binti 6th Annual Run charity event"
    },
    {
      src: "/images/gallery_community/_MG_1572.jpg",
      alt: "Binti community run participants with certificate"
    },
    {
      src: "/images/gallery_community/_MG_1615 (1).jpg",
      alt: "Binti Mwangaza community team members"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-[#052044] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Community <span className="text-[#ffa500]">Photo Gallery</span></h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h3 className="text-xl font-bold mb-4 text-[#052044]">Community <span className="text-[#ffa500]">Events</span></h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {communityImages.map((image, index) => (
            <div 
              key={index}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImageIndex(index)}
            >
              <div className="aspect-video bg-gray-200">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 bg-gray-50">
                <p className="text-sm text-gray-700">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <Dialog 
          open={selectedImageIndex !== null} 
          onOpenChange={(open) => !open && handleClose()}
        >
          <DialogContent className="max-w-4xl p-2">
            {selectedImageIndex !== null && (
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={communityImages[selectedImageIndex].src}
                  alt={communityImages[selectedImageIndex].alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <p className="text-sm text-gray-600 mt-2 p-2">{communityImages[selectedImageIndex].alt}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}