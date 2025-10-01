import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Here you would typically send the data to your backend
      console.log(data);
      toast({
        title: "Message Sent",
        description: "We'll get back to you soon!",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-brand-navy">Contact <span className="text-brand-orange">Us</span></h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="border-brand-navy/10 shadow-md">
          <CardHeader className="border-b border-brand-navy/10">
            <CardTitle className="text-brand-navy">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-navy">Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Your name" className="border-brand-navy/20 focus-visible:ring-brand-orange" />
                      </FormControl>
                      <FormMessage className="text-brand-orange" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-navy">Email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" placeholder="Your email" className="border-brand-navy/20 focus-visible:ring-brand-orange" />
                      </FormControl>
                      <FormMessage className="text-brand-orange" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-navy">Subject</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Message subject" className="border-brand-navy/20 focus-visible:ring-brand-orange" />
                      </FormControl>
                      <FormMessage className="text-brand-orange" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-navy">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Your message"
                          className="min-h-[150px] border-brand-navy/20 focus-visible:ring-brand-orange"
                        />
                      </FormControl>
                      <FormMessage className="text-brand-orange" />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Contact Information and Map */}
        <div className="space-y-8">
          <Card className="border-brand-navy/10 shadow-md">
            <CardHeader className="border-b border-brand-navy/10">
              <CardTitle className="text-brand-navy">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-brand-orange" />
                <p className="text-gray-700">P.O Box 734, Nanyuki, 10400, Kenya</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-orange" />
                <p className="text-gray-700">+254 723 619669</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-orange" />
                <p className="text-gray-700">reservations@snowytopsafari.com / sales@snowytopsafari.com</p>
              </div>
            </CardContent>
          </Card>

          {/* Google Maps Embed */}
          <Card className="border-brand-navy/10 shadow-md overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.55645295314!2d36.91618699999999!3d0.017345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18285f1fe31870bb%3A0xda90c4c2e9d6512c!2sNanyuki%2C%20Kenya!5e0!3m2!1sen!2sus!4v1646668124118!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}