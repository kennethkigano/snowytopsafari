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
    title: "Binti Mwangaza Women's Empowerment",
    shortDescription: "Supporting local women through sustainable business training and microfinance initiatives.",
    fullDescription: `
      <p>The Binti Mwangaza Women's Empowerment project provides training, resources, and microfinancing to help local women establish sustainable businesses and achieve financial independence.</p>
      
      <p>Through this initiative, we've helped over 50 women from rural communities near Nanyuki start their own businesses, ranging from beadwork cooperatives to sustainable agriculture.</p>
      
      <p>These women now serve as mentors to others, creating a powerful ripple effect throughout their communities. Many have gone from struggling to feed their families to becoming community leaders and entrepreneurs.</p>
      
      <p>SnowyTop Safaris supports this project by providing training facilities, connecting the women with global markets for their products, and allocating 5% of our tour proceeds to expand the program to new communities.</p>
    `,
    thumbnailImage: "/public/images/projects/binti-mwangaza-thumbnail.jpg",
    galleryImages: [
      "/public/images/projects/binti-mwangaza-1.jpg",
      "/public/images/projects/binti-mwangaza-2.jpg",
      "/public/images/projects/binti-mwangaza-3.jpg",
    ]
  },
  {
    id: 2,
    title: "Imara Rescue Centre Conservation Education",
    shortDescription: "Educational programs for local youth about wildlife conservation and sustainable practices.",
    fullDescription: `
      <p>The Imara Rescue Centre Conservation Education program works with schools across Laikipia County to instill a deep appreciation for Kenya's wildlife and ecosystems in the next generation.</p>
      
      <p>Our team of educators visits schools weekly, delivering interactive lessons about conservation, biodiversity, and sustainable practices. We've developed a curriculum that combines traditional ecological knowledge with modern conservation science.</p>
      
      <p>The program includes field trips to wildlife reserves, where many children see elephants, lions, and other iconic species in their natural habitat for the first time. These experiences create powerful connections and often inspire career paths in conservation or sustainable tourism.</p>
      
      <p>SnowyTop Safaris supports this work by providing transportation for field trips, funding educational materials, and creating internship opportunities for program graduates.</p>
    `,
    thumbnailImage: "/public/images/projects/imara-rescue-thumbnail.jpg",
    galleryImages: [
      "/public/images/projects/imara-rescue-1.jpg",
      "/public/images/projects/imara-rescue-2.jpg",
      "/public/images/projects/imara-rescue-3.jpg",
    ]
  },
  {
    id: 3,
    title: "Daraja Academy Scholarship Program",
    shortDescription: "Providing educational opportunities for bright, disadvantaged girls from rural communities.",
    fullDescription: `
      <p>The Daraja Academy Scholarship Program identifies academically talented girls from impoverished backgrounds who would otherwise be unable to continue their education beyond primary school.</p>
      
      <p>Through this initiative, these young women receive full scholarships to complete their secondary education at Daraja Academy, a boarding school that provides not only academic education but also leadership training, environmental stewardship, and personal development.</p>
      
      <p>The program has a 100% graduation rate, with most graduates continuing to university or vocational training. Alumni have gone on to become community health workers, teachers, conservation officers, and entrepreneurs.</p>
      
      <p>SnowyTop Safaris is proud to sponsor five full scholarships annually, covering tuition, room and board, uniforms, books, and healthcare. Our guests can visit the academy and participate in cultural exchange activities with the students.</p>
    `,
    thumbnailImage: "/public/images/projects/daraja-academy-thumbnail.jpg",
    galleryImages: [
      "/public/images/projects/daraja-academy-1.jpg",
      "/public/images/projects/daraja-academy-2.jpg",
      "/public/images/projects/daraja-academy-3.jpg",
    ]
  },
  {
    id: 4,
    title: "NeoWood Studios Artisan Training",
    shortDescription: "Teaching sustainable woodworking skills and providing market access for local artisans.",
    fullDescription: `
      <p>The NeoWood Studios Artisan Training program provides comprehensive training in sustainable woodworking, using only responsibly harvested timber and reclaimed wood materials.</p>
      
      <p>Participants learn everything from basic carpentry to advanced furniture design and wood carving techniques. The program places special emphasis on creating high-quality products that appeal to both local and international markets.</p>
      
      <p>Beyond technical skills, artisans also receive training in business management, marketing, and e-commerce, enabling them to sell their products directly to consumers and maximize their income.</p>
      
      <p>SnowyTop Safaris supports this initiative by commissioning custom furniture for our safari lodges, showcasing artisans' work in our visitor centers, and connecting artisans with safari guests interested in purchasing authentic, ethically-produced Kenyan crafts.</p>
    `,
    thumbnailImage: "/public/images/projects/neowood-studios-thumbnail.jpg",
    galleryImages: [
      "/public/images/projects/neowood-studios-1.jpg",
      "/public/images/projects/neowood-studios-2.jpg",
      "/public/images/projects/neowood-studios-3.jpg",
    ]
  },
  {
    id: 5,
    title: "Community-Based Anti-Poaching Initiative",
    shortDescription: "Engaging local communities in wildlife protection through education and patrol opportunities.",
    fullDescription: `
      <p>Our Community-Based Anti-Poaching Initiative takes a holistic approach to wildlife protection by recognizing that conservation succeeds when local communities are active participants and beneficiaries.</p>
      
      <p>The program trains community members to serve as wildlife scouts, monitoring animal movements, identifying potential threats, and conducting regular patrols alongside professional rangers. This creates valuable employment while building local expertise in conservation.</p>
      
      <p>The initiative also includes a comprehensive education component, working with village elders to incorporate traditional conservation values with modern wildlife management practices. This approach has been particularly effective in reducing human-wildlife conflict in buffer zones around protected areas.</p>
      
      <p>SnowyTop Safaris contributes to this work by providing equipment for patrol teams, funding training programs, and ensuring that tourism revenue directly supports the communities protecting these vital ecosystems.</p>
    `,
    thumbnailImage: "/public/images/projects/anti-poaching-thumbnail.jpg",
    galleryImages: [
      "/public/images/projects/anti-poaching-1.jpg",
      "/public/images/projects/anti-poaching-2.jpg",
      "/public/images/projects/anti-poaching-3.jpg",
    ]
  }
];

const CommunityProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<CommunityProject | null>(null);
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
        prev === selectedProject.galleryImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.galleryImages.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">
            Community Projects
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            At SnowyTop Safaris, we believe in sustainable tourism that benefits local communities. 
            Explore our community projects below and learn how your visit helps support these initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              onClick={() => handleProjectClick(project)}
            >
              <Card className="h-full overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-10 bg-gray-200">
                  <div className="flex items-center justify-center h-60 bg-gray-200 overflow-hidden">
                    <span className="text-gray-500 text-sm">Project Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-brand-blue">{project.title}</h3>
                  <p className="text-gray-600">{project.shortDescription}</p>
                  <div className="mt-4 flex justify-end">
                    <span className="text-brand-orange flex items-center text-sm font-medium">
                      Read more <ChevronRight className="h-4 w-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 overflow-y-auto"
          onClick={closeProjectDetail}
        >
          <div 
            className="relative min-h-screen flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div 
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-brand-blue">{selectedProject.title}</h2>
                  <button 
                    onClick={closeProjectDetail}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="mb-6 relative aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center h-80 bg-gray-200">
                    <span className="text-gray-500 text-sm">Project Gallery Image {currentImageIndex + 1}</span>
                  </div>
                  
                  {selectedProject.galleryImages.length > 1 && (
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <button 
                        onClick={prevImage}
                        className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                        aria-label="Previous image"
                      >
                        <ChevronRight className="h-4 w-4 transform rotate-180" />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: selectedProject.fullDescription }} />
                
                <div className="mt-8 flex justify-end">
                  <button 
                    onClick={closeProjectDetail}
                    className="px-6 py-2 bg-brand-orange text-white rounded-md hover:bg-orange-600 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommunityProjects;