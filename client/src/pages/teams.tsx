import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { TeamMember } from "@shared/schema";
import { Loading } from "@/components/ui/loading";

export default function Teams() {
  const { data: teamMembers, isLoading } = useQuery<TeamMember[]>({ 
    queryKey: ['/api/team-members']
  });

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-brand-navy">Our <span className="text-brand-orange">Expert</span> Team</h1>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Meet the passionate guides, managers, and specialists who will make your safari adventure 
              with SnowyTop Safaris extraordinary, safe, and memorable.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <Loading variant="shield" size="lg" />
            <p className="mt-4 text-brand-navy font-medium">Loading our expert team members...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-brand-navy">Our <span className="text-brand-orange">Expert</span> Team</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Meet the passionate guides, managers, and specialists who will make your safari adventure 
            with SnowyTop Safaris extraordinary, safe, and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers?.map((member) => (
            <Card key={member.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
              <div className="aspect-square w-full overflow-hidden bg-brand-navy/5">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardHeader className="border-b border-brand-navy/10 px-4 py-3">
                <CardTitle className="text-brand-navy text-xl md:text-2xl">{member.name}</CardTitle>
                <p className="text-brand-orange font-medium">{member.role}</p>
              </CardHeader>
              <CardContent className="pt-4 pb-6 px-4 flex-grow flex flex-col">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">{member.bio}</p>
                
                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  {member.specialty && (
                    <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-xs md:text-sm font-medium">
                      {member.specialty}
                    </span>
                  )}
                  {member.yearsOfExperience && (
                    <span className="px-3 py-1 bg-brand-navy/10 text-brand-navy rounded-full text-xs md:text-sm font-medium">
                      {member.yearsOfExperience} years experience
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6 text-brand-navy">Ready to <span className="text-brand-orange">Explore</span> Kenya with Us?</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            Our team is passionate about creating meaningful safari experiences that showcase the beauty of Kenya's landscapes, wildlife, and culture.
          </p>
        </div>
      </div>
    </div>
  );
}