import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CommunityProject {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnailImage: string;
  galleryImages: string[];
}

const communityProjects: CommunityProject[] = [
  {
    id: 1,
    title: "Daraja Academy Partnership",
    shortDescription:
      "Providing educational opportunities for bright, disadvantaged girls from rural communities across Kenya.",
    fullDescription: `
      <p>SnowyTop Safaris is proud to partner with Daraja Academy, a transformative boarding school that provides full scholarships to academically talented girls from impoverished backgrounds who would otherwise be unable to continue their education beyond primary school.</p>
      
      <p>Through this partnership, we support young women to receive not only quality academic education but also leadership training, environmental stewardship, and personal development skills that prepare them for future success.</p>
      
      <p>The Daraja Academy has an exceptional track record with a 100% graduation rate, with most graduates continuing to university or vocational training. Alumni have gone on to become community health workers, teachers, conservation officers, and entrepreneurs.</p>
      
      <p>Our support includes sponsoring scholarships, organizing cultural exchange activities between Daraja students and our guests, and providing internship opportunities in sustainable tourism for graduates of the program.</p>
      
      <p>When you travel with SnowyTop Safaris, a portion of your tour cost goes directly to supporting these educational initiatives, creating lasting positive impact in Kenya's communities.</p>
    `,
    thumbnailImage: "/images/projects/daraja-1.jpeg",
    galleryImages: [
      "/images/projects/daraja-1.jpeg",
      "/images/projects/daraja-2.jpeg",
      "/images/projects/daraja-3.jpeg",
      "/images/projects/daraja-4.jpeg",
      "/images/projects/daraja-5.jpeg",
    ],
  },
  {
    id: 2,
    title: "Queens Star Children's Home",
    shortDescription:
      "Supporting orphaned and vulnerable children with care, education, and a loving environment",
    fullDescription: `
      <p>SnowyTop Safaris is proud to partner with Queens Star Children's Home, a vital institution dedicated to providing care, education, and a loving environment for orphaned and vulnerable children in the community.</p>
      
      <p>In collaboration with Binti Mwangaza, we regularly visit the children's home to provide food supplies, educational materials, and essential items that support the children's well-being and development.</p>
      
      <p>This ongoing partnership reflects our dedication to community welfare and child support. By working together, we strive to create a nurturing environment where vulnerable children have access to necessities, education, love, and dignity they deserve.</p>
      
      <p>The Queens Star Children's Home not only provides shelter and basic needs but also focuses on education, personal development, and creating a family-like environment where children can thrive despite challenging circumstances.</p>
      
      <p>When you travel with SnowyTop Safaris, a portion of your tour cost directly supports these children, contributing to positive, sustainable change in the community.</p>
    `,
    thumbnailImage: "/images/projects/queenstar-1.jpg",
    galleryImages: [
      "/images/projects/queenstar-1.jpg",
      "/images/projects/queenstar-2.jpg",
      "/images/projects/queenstar-3.jpg",
      "/images/projects/queenstar-4.jpg",
      "/images/projects/queenstar-5.jpg",
      "/images/projects/queenstar-6.jpg"
    ],
  },
  {
    id: 3,
    title: "Binti Mwangaza Women's Empowerment",
    shortDescription:
      "Supporting women-led initiatives that promote education, economic independence, and community development.",
    fullDescription: `
      <p>SnowyTop Safaris is proud to partner with Binti Mwangaza, a grassroots organization dedicated to empowering women and girls through education, economic opportunities, and leadership development.</p>
      
      <p>Our collaboration includes supporting their various initiatives from community runs that raise awareness and funds for women's education to direct participation in their outreach programs that provide resources to rural communities.</p>
      
      <p>The Binti Mwangaza women's empowerment programs focus on creating sustainable pathways to economic independence through skills training, microfinance opportunities, and market access for women entrepreneurs.</p>
      
      <p>We regularly organize events where our guests can engage directly with these inspiring women, learn about their traditional crafts and innovative businesses, and purchase authentic, locally-made products that directly support their livelihoods.</p>
      
      <p>This partnership reflects our shared commitment to community-based tourism that creates meaningful opportunities for women to become leaders and change-makers in their communities.</p>
    `,
    thumbnailImage: "/images/projects/binti-1.jpg",
    galleryImages: [
      "/images/projects/binti-1.jpg",
      "/images/projects/binti-2.jpg",
      "/images/projects/binti-3.jpg",
      "/images/projects/binti-4.jpg",
      "/images/projects/binti-5.jpg",
      "/images/projects/binti-6.jpg",
      "/images/projects/binti-7.jpg",
      "/images/projects/binti-8.jpg"
    ],
  },
];

const CommunityEngagement: React.FC = () => {
  const [selectedProject, setSelectedProject] =
    useState<CommunityProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleProjectClick = (project: CommunityProject) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.galleryImages.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.galleryImages.length - 1 : prev - 1,
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-brand-blue py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Community Engagement
          </h1>
          <p className="max-w-3xl text-lg text-gray-200">
            At SnowyTop Safaris, our commitment to community extends beyond
            tourism. Discover how we're working with local communities to create
            sustainable positive impact throughout Kenya.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-brand-blue">
            Our Community Projects
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {communityProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                onClick={() => handleProjectClick(project)}
              >
                <Card className="h-full overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="aspect-w-16 aspect-h-10 bg-gray-200">
                    <div className="h-60 bg-gray-200 overflow-hidden">
                      <img 
                        src={project.thumbnailImage} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-brand-blue">{project.title}</h3>
                    <p className="text-gray-600">{project.shortDescription}</p>
                    <div className="mt-4 flex justify-end">
                      <div className="flex items-center text-brand-orange font-medium cursor-pointer">
                        Learn More <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">Join Our Mission</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-8">
            We believe that tourism should empower rather than exploit local communities. 
            Join us as a volunteer and make a meaningful contribution to our community projects 
            while experiencing the transformative power of sustainable tourism.
          </p>
          <a href="/volunteer" className="bg-brand-orange text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
            Start Your Volunteer Journey
          </a>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-4xl relative">
              <div className="absolute top-4 right-4 z-10">
                <button 
                  onClick={closeProjectDetail} 
                  className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="mb-6 relative aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                <div className="h-80 bg-gray-200 overflow-hidden">
                  <img 
                    src={selectedProject.galleryImages[currentImageIndex]} 
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`} 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {selectedProject.galleryImages.length > 1 && (
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <button 
                      onClick={prevImage} 
                      className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-colors"
                    >
                      &lt;
                    </button>
                    <button 
                      onClick={nextImage} 
                      className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-colors"
                    >
                      &gt;
                    </button>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-brand-blue mb-4">{selectedProject.title}</h2>
                <div 
                  className="prose max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: selectedProject.fullDescription }}
                />
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={closeProjectDetail} 
                    className="bg-brand-blue text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityEngagement;