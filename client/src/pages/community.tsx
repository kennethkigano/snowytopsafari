import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { insertInquirySchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";

export default function Community() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      type: "volunteer",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: (data: any) =>
      apiRequest("POST", "/api/inquiries", data),
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted",
        description: "We'll get back to you soon!"
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit inquiry",
        variant: "destructive"
      });
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-brand-navy">Community <span className="text-brand-orange">Engagement</span></h1>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-brand-navy">Our Community <span className="text-brand-orange">Partners</span></h2>
        <p className="text-center mb-8">
          SnowyTop Safaris collaborates with these incredible organizations to create positive change 
          in local communities across Kenya.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="overflow-hidden hover:shadow-lg transition-all">
            <div className="h-[180px] bg-white flex flex-col items-center justify-center p-4">
              <div className="h-20 flex items-center justify-center mb-3">
                <img 
                  src="/images/partners/binti-mwangaza.jpg" 
                  alt="Binti Mwangaza logo" 
                  className="max-h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-center text-brand-navy">Binti Mwangaza</h3>
            </div>
            <CardContent className="p-4">
              <p className="text-sm">
                Binti Mwangaza empowers young women through education, skills training, and community support programs, helping them build bright futures.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-all">
            <div className="h-[180px] bg-white flex flex-col items-center justify-center p-4">
              <div className="h-20 flex items-center justify-center mb-3">
                <img 
                  src="/images/partners/neowood-studios.png" 
                  alt="NeoWood Studios logo" 
                  className="max-h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-center text-brand-navy">NeoWood Studios</h3>
            </div>
            <CardContent className="p-4">
              <p className="text-sm">
                NeoWood Studios creates sustainable art and furniture while providing vocational training to community members and supporting local artisans.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-all">
            <div className="h-[180px] bg-white flex flex-col items-center justify-center p-4">
              <div className="w-16 h-16 rounded-full bg-brand-navy/10 flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-brand-navy">I</span>
              </div>
              <h3 className="text-xl font-bold text-center text-brand-navy">Imara Rescue Centre</h3>
            </div>
            <CardContent className="p-4">
              <p className="text-sm">
                Imara Rescue Centre provides shelter, care, and rehabilitation for vulnerable children, offering them hope and opportunities for a better future.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="overflow-hidden hover:shadow-lg transition-all">
            <div className="h-[180px] bg-white flex flex-col items-center justify-center p-4">
              <div className="h-20 flex items-center justify-center mb-3">
                <img 
                  src="/images/partners/spread-and-sprayer.png" 
                  alt="Spreader and Sprayer Testing Ltd logo" 
                  className="max-h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-center text-brand-navy">Spreader and Sprayer Testing Ltd</h3>
            </div>
            <CardContent className="p-4">
              <p className="text-sm">
                Providing sustainable agricultural solutions and training to local farmers, enhancing food security and improving agricultural practices in rural communities.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-all">
            <div className="h-[180px] bg-white flex flex-col items-center justify-center p-4">
              <div className="w-16 h-16 rounded-full bg-brand-navy/10 flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-brand-navy">D</span>
              </div>
              <h3 className="text-xl font-bold text-center text-brand-navy">Daraja Academy</h3>
            </div>
            <CardContent className="p-4">
              <p className="text-sm">
                Daraja Academy provides high-quality secondary education to exceptional girls from backgrounds of poverty, empowering them through education to become leaders in their communities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Community Impact Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-brand-navy">Our Community <span className="text-brand-orange">Impact</span></h2>
        <p className="text-center mb-8">
          At SnowyTop Safaris, we believe in making a positive impact in the communities we work with. 
          Through our initiatives, we support education, environmental conservation, and sustainable development across Kenya.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <p className="mb-4">
            We are committed to creating meaningful change through community-driven projects that focus on:
          </p>
          <ul className="list-disc pl-8 space-y-2 mb-6">
            <li><strong>Education:</strong> Supporting local schools, providing scholarships, and organizing educational workshops.</li>
            <li><strong>Environmental Conservation:</strong> Conducting clean-up drives, tree planting, and wildlife protection programs.</li>
            <li><strong>Sustainable Tourism:</strong> Ensuring tourism benefits local communities through fair employment and training.</li>
            <li><strong>Cultural Preservation:</strong> Protecting and promoting Kenya's rich cultural heritage.</li>
          </ul>
          <p>
            By choosing SnowyTop Safaris, you contribute directly to these important initiatives that help build stronger and more resilient communities.
          </p>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-4 text-brand-navy">Support Our <span className="text-brand-orange">Initiatives</span></h2>
        <p className="mb-6">Help us make a difference in local communities across Kenya.</p>
        <Link href="/donate">
          <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">Donate Now</Button>
        </Link>
      </div>

      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-brand-navy">Get <span className="text-brand-orange">Involved</span></h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type of Involvement</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange/90" disabled={mutation.isPending}>
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}