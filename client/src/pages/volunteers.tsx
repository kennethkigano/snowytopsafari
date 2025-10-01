import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import type { Volunteer } from "@shared/schema";
import { Loading } from "@/components/ui/loading";
import { Button } from "@/components/ui/button";

export default function Volunteers() {
  const { data: volunteers, isLoading } = useQuery<Volunteer[]>({
    queryKey: ["/api/volunteers"],
  });

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-brand-navy">
              Volunteer <span className="text-brand-orange">Programs</span>
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Your support helps empower impactful organizations like Binti
              Mwangaza, Queenstar Children’s Home, Daraja Academy, and Imara
              Rescue Center. Together, we create lasting,community-driven
              change.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <Loading variant="shield" size="lg" />
            <p className="mt-4 text-brand-navy font-medium">
              Loading volunteer opportunities...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-brand-navy">
            Volunteer <span className="text-brand-orange">Programs</span>
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            At SnowyTop Safaris, we are committed to creating opportunities that
            connect travelers to the heart of Kenya while making a meaningful
            impact. Through our community-based programs, we ensure that tourism
            directly supports and uplifts local communities, wildlife
            conservation efforts, and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">
                Cultural Heritage Experiences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                We believe that preserving culture is as important as preserving
                wildlife. Our Cultural Heritage Experiences allow travelers to
                engage with local traditions—music, dance, storytelling, crafts,
                and cuisine—while fostering cultural appreciation. These
                experiences not only enrich the lives of visitors but also
                provide income and pride to local communities who serve as
                storytellers and guardians of tradition.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">
                Local Guide Training Initiative
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Through our Local Guide Training Initiative, we empower local
                talent by providing professional training in wildlife knowledge,
                eco-tourism, safety, and customer service. This initiative
                creates jobs, supports self-reliance, and ensures that tourism
                revenue stays within the community while giving travelers the
                best possible experience led by knowledgeable locals.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">
                Eco-Friendly Homestay Network
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Our Eco-Friendly Homestay Network allows travelers to stay with
                local families, enjoy home-cooked meals, and immerse themselves
                in everyday life in rural Kenya. We support families with
                sustainable practices such as solar lighting and compost
                toilets, ensuring that guests enjoy comfort while minimizing
                their environmental footprint.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">
                Conservation Through Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Conservation Through Community is a cornerstone of our mission.
                By partnering with local residents in projects such as
                reforestation, wildlife monitoring, and anti-poaching efforts,
                we foster passionate conservationists who help protect Kenya's
                breathtaking landscapes and endangered species. Volunteers play
                a vital role in these projects, directly contributing to
                preserving nature.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">
                Mobile Health Safari Clinics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Our Mobile Health Safari Clinics offer essential healthcare
                services to remote communities along safari routes. These mobile
                units provide medical check-ups, maternal care, vaccinations,
                and health education to underserved populations, ensuring that
                tourism contributes to improving lives in areas where basic
                healthcare is scarce.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">
                School Support & Eco-Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                SnowyTop Safaris is committed to School Support & Eco-Education,
                providing schools with supplies, infrastructure, and
                nature-based learning opportunities. We promote environmental
                stewardship and experiential learning through field trips and
                wildlife education programs. Volunteers can engage in mentoring,
                reading programs, and donation drives, ensuring that education
                plays a key role in sustainability.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">
                Women's Empowerment Collective
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Empowering women uplifts entire communities. Through our Women's
                Empowerment Collective, we support women-led cooperatives in
                producing crafts, food, and tourism services. We offer training
                in entrepreneurship, marketing, and financial literacy, helping
                women thrive economically while preserving traditional skills
                and fostering community resilience.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">
                Safari & Serve Volunteer Programs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                For travelers seeking purpose-driven adventures, our Safari &
                Serve Volunteer Programs provide unique opportunities to
                collaborate with local communities on impactful projects.
                Whether it's building classrooms, supporting conservation
                efforts, or teaching basic skills, volunteers can make a real
                difference. We ensure all placements are ethical, respectful,
                and impactful by working with trusted partner organizations.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-brand-navy text-center">
            Why <span className="text-brand-orange">Volunteer</span> With Us?
          </h2>
          <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Volunteering with SnowyTop Safaris provides you with the unique
            opportunity to make a real difference while experiencing Kenya's
            natural beauty and rich culture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-t-brand-orange">
              <h3 className="text-xl font-bold mb-3 text-brand-navy">
                Make a Real Difference
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Support essential conservation, education, and community
                initiatives that directly benefit local people and wildlife.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-t-brand-navy">
              <h3 className="text-xl font-bold mb-3 text-brand-navy">
                Gain Hands-on Experience
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Contribute to impactful projects, gaining practical experience
                in wildlife conservation, community development, education, and
                more.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-t-brand-orange">
              <h3 className="text-xl font-bold mb-3 text-brand-navy">
                Experience Kenya's Culture
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Immerse yourself in Kenya's rich culture and stunning landscapes
                while making a positive impact on the environment and local
                communities.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-t-brand-navy">
              <h3 className="text-xl font-bold mb-3 text-brand-navy">
                Enhance Your Skills
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Develop valuable skills in education, conservation, social
                impact, and community outreach that will help shape your career
                or personal growth.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl font-medium text-brand-navy mb-6">
            We believe that travel should be about exploration and giving back.
            Join us for an adventure that transforms lives, conserves nature,
            and creates lasting impact.
          </p>
          <a href="/volunteer">
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg">
              Start Your Volunteer Journey
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
