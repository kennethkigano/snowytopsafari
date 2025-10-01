import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { apiRequest } from "@/lib/queryClient";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { Heart, Calendar, Building } from "lucide-react";

const donationFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().optional(),
});

type DonationFormData = z.infer<typeof donationFormSchema>;

interface DonationDialogProps {
  type: "one-time" | "monthly";
  title: string;
}

function DonationDialog({ type, title }: DonationDialogProps) {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  
  const form = useForm<DonationFormData>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: DonationFormData) => 
      apiRequest("POST", "/api/donation-inquiries", {
        ...data,
        donationType: type,
        title,
      }),
    onSuccess: () => {
      toast({
        title: "Donation Interest Submitted",
        description: "Thank you for your interest in donating! Our team will contact you via email with donation options and details.",
      });
      form.reset();
      setIsOpen(false);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit donation interest. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: DonationFormData) => {
    mutation.mutate(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">{title}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Express your interest in donating and our team will contact you with donation options.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your interest in supporting our community initiatives..."
                      rows={4}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full" 
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Submitting..." : "Submit Interest"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default function Donate() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-navy/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-[url('/images/donation-bg.jpg')] bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/community/FB_IMG_1725735893359.jpg')" }}
        ></div>
        <div className="relative z-20 py-16 px-8 md:px-16 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our <span className="text-brand-orange">Mission</span></h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8 text-white/90">
            Your generous donation helps us maintain sustainable tourism practices and empower local communities across Kenya.
          </p>
          <div className="w-32 h-1 bg-brand-orange rounded-full mb-8"></div>
          <p className="max-w-xl text-white/80">
            At SnowyTop Safaris, we're committed to making a lasting positive impact. Your support directly enables our community projects, conservation efforts, and educational initiatives.
          </p>
        </div>
      </div>

      {/* Donation Options */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-brand-navy">Choose How You'd Like to <span className="text-brand-orange">Help</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the donation option that works best for you. Every contribution, regardless of size, makes a significant difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* One-Time Donation Card */}
          <div className="group">
            <Card className="h-full border border-gray-200 hover:border-brand-orange hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="h-3 bg-brand-orange"></div>
              <CardHeader className="pb-2">
                <div className="flex items-center mb-2">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-brand-orange mr-3">
                    <Heart className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-brand-navy group-hover:text-brand-orange transition-colors duration-300">One-Time Donation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">Make a single contribution to support our initiatives and help create immediate impact in the communities we serve.</p>
                <DonationDialog type="one-time" title="Donate Once" />
              </CardContent>
            </Card>
          </div>

          {/* Monthly Support Card */}
          <div className="group">
            <Card className="h-full border border-gray-200 hover:border-brand-orange hover:shadow-lg transition-all duration-300 overflow-hidden relative">
              <div className="h-3 bg-brand-orange"></div>
              <div className="absolute top-3 right-3 bg-brand-orange text-white text-xs py-1 px-2 rounded-full">
                Most Popular
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center mb-2">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-brand-orange mr-3">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-brand-navy group-hover:text-brand-orange transition-colors duration-300">Monthly Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">Become a regular supporter with monthly donations, providing reliable funding for our ongoing community and conservation programs.</p>
                <DonationDialog type="monthly" title="Support Monthly" />
              </CardContent>
            </Card>
          </div>

          {/* Corporate Giving Card */}
          <div className="group">
            <Card className="h-full border border-gray-200 hover:border-brand-orange hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="h-3 bg-brand-orange"></div>
              <CardHeader className="pb-2">
                <div className="flex items-center mb-2">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-brand-orange mr-3">
                    <Building className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-brand-navy group-hover:text-brand-orange transition-colors duration-300">Corporate Giving</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">Partner with us through corporate donations and sponsorships to make a significant impact while showcasing your commitment to sustainability.</p>
                <Button 
                  className="w-full bg-transparent hover:bg-brand-orange text-brand-navy hover:text-white border-2 border-brand-navy hover:border-brand-orange transition-all duration-300"
                  onClick={() => window.location.href = "mailto:partnerships@snowytopsafaris.com"}
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-brand-navy">How Your <span className="text-brand-orange">Donation</span> Makes a Difference</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-brand-orange mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-navy">Support Art & Education</h3>
                  <p className="text-gray-600">
                    Your donations help fund educational opportunities at Daraja Academy and other community programs, empowering young Kenyans to pursue their dreams.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-brand-orange mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8a6 6 0 0 0-9-5 6 6 0 0 0-3 10l9 9 9-9a6.002 6.002 0 0 0-6-5z" fill="none"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-navy">Community Development</h3>
                  <p className="text-gray-600">
                    We invest in local infrastructure, healthcare, and economic opportunities that create sustainable livelihoods and strengthen communities across Kenya.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-brand-orange mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    <path d="M17 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    <path d="M12 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    <line x1="12" y1="14" x2="9" y2="12"></line>
                    <line x1="12" y1="14" x2="17" y2="12"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-navy">Wildlife Conservation</h3>
                  <p className="text-gray-600">
                    Your support helps protect Kenya's endangered species through anti-poaching initiatives, habitat preservation, and community-based conservation programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden aspect-square">
              <img 
                src="/images/community/FB_IMG_1725735902656.jpg" 
                alt="Community support" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden aspect-square">
              <img 
                src="/images/community/FB_IMG_1725735920901.jpg" 
                alt="Daraja Academy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden aspect-square">
              <img 
                src="/images/community/FB_IMG_1725735833805.jpg" 
                alt="Wildlife conservation" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden aspect-square">
              <img 
                src="/images/community/FB_IMG_1725735928842.jpg" 
                alt="Distribution" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonial */}
      <div className="mb-20 bg-gray-50 rounded-xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <svg className="w-12 h-12 text-brand-orange/30 mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.51.144-.9.31-1.51.856-1.79 1.637-.19.52-.23 1.048-.13 1.574.12.525.36.935.73 1.22.39.323.9.533 1.5.63.12.022.24.034.36.034.66 0 1.33-.332 2.01-.996.68-.664 1.34-1.504 2.01-2.52.67-1.015 1.01-1.96 1.01-2.83zm-3.66 3.854c-.36-.042-.72-.207-1.09-.496-.06-.048-.18-.215-.22-.407-.04-.187-.01-.36.08-.52.08-.156.25-.266.51-.33.63-.163 1.19-.145 1.67.054.39.152.66.359.8.62.15.458.27.816.27 1.075 0 .438-.58.693-1.74.76-.19.013-.39.01-.59-.004zm13.94-8.088c-.32-.325-.77-.59-1.33-.8-.55-.205-1.13-.302-1.75-.29h-.5c-.83 0-1.55.26-2.17.764-.61.505-1.01 1.148-1.2 1.936-.18.787-.04 1.788.42 2.98.8 2.195 2.03 3.292 3.67 3.292 1.04 0 2.04-.525 3.01-1.58s1.44-2.22 1.44-3.496c0-.968-.33-1.79-.99-2.486zm-5.95 5.972c-.21.088-.46.138-.76.155-.29.013-.56-.03-.81-.13-.25-.097-.43-.276-.54-.535-.12-.358-.19-.583-.22-.822-.03-.24.05-.43.22-.57.17-.13.5-.237.96-.313.46-.078.77-.035.91.13.13.164.22.422.26.775.03.35.04.695.03 1.01-.01.317-.04.238-.04.3z"/>
          </svg>
          <p className="text-xl md:text-2xl font-medium text-gray-800 italic mb-6">
            "SnowyTop Safaris' community initiatives have transformed our village. Thanks to donor support, we now have a school building, clean water access, and sustainable farming practices that have improved our livelihoods immensely."
          </p>
          <div className="flex items-center justify-center">
            <div className="h-14 w-14 bg-brand-navy/10 rounded-full mr-4"></div>
            <div className="text-left">
              <h4 className="font-bold text-brand-navy">James Omondi</h4>
              <p className="text-gray-600">Community Leader, Maasai Mara Region</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-brand-navy">Make a <span className="text-brand-orange">Difference</span> Today</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Every contribution, no matter the size, helps us create lasting positive impact across Kenya's communities and natural environments.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <DonationDialog type="one-time" title="Donate Now" />
          <Button 
            variant="outline"
            className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-300"
            onClick={() => window.location.href = "mailto:info@snowytopsafaris.com?subject=Donation%20Inquiry"}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}