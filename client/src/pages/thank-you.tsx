import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-10 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-24 w-24 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-brand-blue mb-4">Thank You for Your Application!</h1>
        <p className="text-xl text-gray-600 mb-8">
          We've received your volunteer application and appreciate your interest in joining our mission to 
          create sustainable, community-driven tourism in Kenya.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Our team will review your application and get back to you within 3-5 business days to discuss 
          the next steps in your volunteer journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white min-w-[160px]">
              Return Home
            </Button>
          </Link>
          <Link href="/volunteers">
            <Button variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange/10 min-w-[160px]">
              Explore Programs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;