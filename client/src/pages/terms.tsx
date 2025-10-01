import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Users, Heart, FileText } from "lucide-react";
import { Link } from "wouter";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Link href="/volunteers">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Volunteer Application
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-brand-navy mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SnowyTop Safaris Volunteer Program - Terms of Participation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-brand-navy">
                  <FileText className="w-5 h-5" />
                  Volunteer Program Agreement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    1. Program Overview
                  </h3>
                  <p className="mb-3">
                    SnowyTop Safaris Ltd operates community-based tourism and conservation programs in Kenya. 
                    By applying to volunteer with us, you agree to participate in activities that support 
                    wildlife conservation, community development, and sustainable tourism initiatives.
                  </p>
                  <p>
                    Our volunteer programs include wildlife conservation, community education, 
                    environmental protection, and cultural exchange activities.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    2. Volunteer Responsibilities
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Participate actively and respectfully in all assigned activities</li>
                    <li>Follow all safety guidelines and instructions from SnowyTop Safaris staff</li>
                    <li>Respect local customs, traditions, and environmental regulations</li>
                    <li>Maintain professional conduct and represent SnowyTop Safaris positively</li>
                    <li>Complete the full duration of your committed volunteer period</li>
                    <li>Cover your own travel, accommodation, and meal expenses unless otherwise specified</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">3. Health & Safety</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Volunteers must have comprehensive travel and health insurance</li>
                    <li>Required vaccinations must be up to date (Yellow Fever, Hepatitis A/B, etc.)</li>
                    <li>Volunteers participate at their own risk and must sign liability waivers</li>
                    <li>SnowyTop Safaris is not liable for injuries, illnesses, or accidents during volunteer activities</li>
                    <li>Emergency medical evacuation insurance is strongly recommended</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">4. Code of Conduct</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Zero tolerance for discrimination, harassment, or inappropriate behavior</li>
                    <li>Respect for wildlife - no touching, feeding, or disturbing animals</li>
                    <li>Environmental protection - follow Leave No Trace principles</li>
                    <li>Cultural sensitivity - dress appropriately and respect local customs</li>
                    <li>No alcohol or drug use during volunteer activities</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">5. Privacy & Data Protection</h3>
                  <p className="mb-3">
                    Your personal information will be used solely for volunteer program administration. 
                    We may collect photos and videos during activities for promotional purposes with your consent.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Personal data is kept confidential and secure</li>
                    <li>Photos/videos may be used for marketing with permission</li>
                    <li>Right to request data deletion after program completion</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">6. Financial Terms</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Volunteer program fees (if applicable) are non-refundable after 30 days before start date</li>
                    <li>Volunteers are responsible for their own expenses unless specified otherwise</li>
                    <li>Any damage to property or equipment may result in charges</li>
                    <li>Payment schedules and methods will be communicated separately</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">7. Termination</h3>
                  <p className="mb-3">
                    SnowyTop Safaris reserves the right to terminate volunteer participation for:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Violation of safety guidelines or code of conduct</li>
                    <li>Inappropriate behavior or failure to follow instructions</li>
                    <li>Health or safety concerns</li>
                    <li>Failure to meet program requirements</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    8. Our Commitment
                  </h3>
                  <p className="mb-3">
                    SnowyTop Safaris is committed to providing meaningful volunteer experiences that:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Make a positive impact on wildlife conservation and local communities</li>
                    <li>Provide cultural exchange and learning opportunities</li>
                    <li>Ensure volunteer safety and well-being</li>
                    <li>Offer professional supervision and guidance</li>
                    <li>Create lasting memories and friendships</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">9. Contact Information</h3>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p><strong>SnowyTop Safaris Ltd</strong></p>
                    <p>Email: volunteers@snowytopsafari.com</p>
                    <p>Phone: +254 723 619669</p>
                    <p>Emergency Contact: +254 723 619669</p>
                  </div>
                </section>

                <section className="bg-brand-orange/10 p-6 rounded-lg border-l-4 border-brand-orange">
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">Agreement</h3>
                  <p className="text-gray-700">
                    By checking the Terms & Conditions acceptance box in your volunteer application, 
                    you acknowledge that you have read, understood, and agree to abide by all terms 
                    outlined above. This constitutes a legally binding agreement between you and 
                    SnowyTop Safaris Ltd.
                  </p>
                  <p className="text-sm text-gray-600 mt-3">
                    Last Updated: December 24, 2025
                  </p>
                </section>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}