import { useParams } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const activities = {
  "daraja-academy": {
    title: "Daraja Academy",
    description: "Providing quality education to exceptional girls from poverty.",
    mission: "To provide quality education and leadership training to bright, determined girls from poor families.",
    imageUrl: "/attached_assets/FB_IMG_1725735920901.jpg",
    impact: [
      "100+ girls receive full scholarships annually",
      "95% graduation rate",
      "80% university acceptance rate",
      "Leadership training programs"
    ],
    getInvolved: [
      "Sponsor a student's education",
      "Volunteer as a mentor",
      "Contribute to the school library",
      "Support infrastructure development"
    ]
  }
};

export default function CommunityActivity() {
  const { slug } = useParams();
  const activity = activities[slug as keyof typeof activities];

  if (!activity) {
    return <div className="container mx-auto px-4 py-8">Activity not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/community">
        <Button variant="outline" className="mb-6 text-brand-navy border-brand-navy hover:bg-brand-navy/10">← Back to Community</Button>
      </Link>

      <h1 className="text-4xl font-bold mb-6 text-brand-navy">{activity.title.split(' ').map((word, index, array) => 
        index === array.length - 1 ? 
        <span key={index} className="text-brand-orange">{word}</span> : 
        <span key={index}>{word + ' '}</span>
      )}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-xl mb-4">{activity.description}</p>
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-navy">Our <span className="text-brand-orange">Mission</span></CardTitle>
            </CardHeader>
            <CardContent>
              <p>{activity.mission}</p>
            </CardContent>
          </Card>
        </div>
        <div className="rounded-lg overflow-hidden border-2 border-brand-navy/10 shadow-lg">
          <img 
            src={activity.imageUrl} 
            alt={activity.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-brand-navy">Our <span className="text-brand-orange">Impact</span></CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            {activity.impact.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-brand-navy">Get <span className="text-brand-orange">Involved</span></CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            {activity.getInvolved.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Link href="/donate">
            <Button className="bg-brand-orange hover:bg-brand-orange/90">Support This Initiative</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
