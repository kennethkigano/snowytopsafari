import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertInquirySchema, insertDonationSchema, insertReviewSchema, insertTeamMemberSchema, insertFleetVehicleSchema, insertVolunteerSchema } from "@shared/schema";
import { ZodError } from "zod";
import Stripe from "stripe";
import * as fs from 'fs';
import * as path from 'path';
import { sendBookingEmail, sendVolunteerApplicationEmail, sendDonationEmail, sendDonationInquiryEmail } from "./utils/email";

// Initialize Stripe variable
let stripe: Stripe | null = null;

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize Stripe if the secret key is available
  if (process.env.STRIPE_SECRET_KEY) {
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-02-24.acacia"
    });
  }

  // Gallery API endpoint to get list of gallery images
  app.get("/api/gallery-images", (_req, res) => {
    try {
      const galleryPath = path.join(process.cwd(), 'public', 'images', 'gallery');
      const files = fs.readdirSync(galleryPath)
        .filter(file => file.endsWith('.jpg'))
        .map((file, index) => ({
          id: index + 1,
          src: `/images/gallery/${file}`,
          alt: `Gallery Image ${index + 1}`
        }));

      console.log(`Found ${files.length} gallery images`);
      res.json(files);
    } catch (error) {
      console.error("Error fetching gallery images:", error);
      res.status(500).json({ message: "Failed to fetch gallery images" });
    }
  });

  // Team Members
  app.get("/api/team-members", async (_req, res) => {
    try {
      const members = await storage.getTeamMembers();
      res.json(members);
    } catch (error) {
      console.error("Error fetching team members:", error);
      res.status(500).json({ message: "Failed to fetch team members" });
    }
  });

  app.post("/api/team-members", async (req, res) => {
    try {
      const member = insertTeamMemberSchema.parse(req.body);
      const created = await storage.createTeamMember(member);
      res.status(201).json(created);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Invalid team member data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create team member" });
    }
  });

  // Fleet Vehicles
  app.get("/api/fleet-vehicles", async (_req, res) => {
    try {
      const vehicles = await storage.getFleetVehicles();
      res.json(vehicles);
    } catch (error) {
      console.error("Error fetching fleet vehicles:", error);
      res.status(500).json({ message: "Failed to fetch fleet vehicles" });
    }
  });

  app.post("/api/fleet-vehicles", async (req, res) => {
    try {
      const vehicle = insertFleetVehicleSchema.parse(req.body);
      const created = await storage.createFleetVehicle(vehicle);
      res.status(201).json(created);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Invalid fleet vehicle data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create fleet vehicle" });
    }
  });

  // Volunteers
  app.get("/api/volunteers", async (_req, res) => {
    try {
      const volunteers = await storage.getVolunteers();
      res.json(volunteers);
    } catch (error) {
      console.error("Error fetching volunteers:", error);
      res.status(500).json({ message: "Failed to fetch volunteers" });
    }
  });

  app.post("/api/volunteers", async (req, res) => {
    try {
      const volunteer = insertVolunteerSchema.parse(req.body);
      const created = await storage.createVolunteer(volunteer);

      // Send email notification
      try {
        await sendVolunteerApplicationEmail(volunteer);
        console.log("Volunteer application email sent successfully");
      } catch (emailError) {
        console.error("Failed to send volunteer application email:", emailError);
        // Continue processing even if email fails
      }

      res.status(201).json(created);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Invalid volunteer data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create volunteer" });
    }
  });


  // Enhanced itineraries route with country and package type filtering
  app.get("/api/itineraries", async (req, res) => {
    try {
      console.log("Fetching itineraries with query params:", req.query);
      const { query, category, packageType, country, difficultyLevel } = req.query;
      const filters = {
        category: category as string,
        packageType: packageType as string,
        country: country as string,
        difficultyLevel: difficultyLevel as string
      };

      const itineraries = await storage.searchItineraries(query as string, filters);
      console.log("Found itineraries:", itineraries.length);
      res.json(itineraries);
    } catch (error: any) {
      console.error("Error fetching itineraries:", error);
      res.status(500).json({ message: "Failed to fetch itineraries", error: error.message });
    }
  });

  app.get("/api/itineraries/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const itinerary = await storage.getItinerary(id);
      if (!itinerary) {
        return res.status(404).json({ message: "Itinerary not found" });
      }
      res.json(itinerary);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch itinerary" });
    }
  });

  app.get("/api/itineraries/:id/reviews", async (req, res) => {
    try {
      const itineraryId = parseInt(req.params.id);
      const reviews = await storage.getItineraryReviews(itineraryId);
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch reviews" });
    }
  });

  app.post("/api/reviews", async (req, res) => {
    try {
      const review = insertReviewSchema.parse(req.body);
      const created = await storage.createReview(review);
      res.status(201).json(created);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Invalid review data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create review" });
    }
  });

  app.post("/api/bookings", async (req, res) => {
    try {
      const booking = insertBookingSchema.parse(req.body);
      const created = await storage.createBooking(booking);

      // Send email notification
      try {
        await sendBookingEmail(booking);
        console.log("Booking email sent successfully");
      } catch (emailError) {
        console.error("Failed to send booking email:", emailError);
        // Continue processing even if email fails
      }

      res.status(201).json(created);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Invalid booking data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create booking" });
    }
  });

  app.post("/api/inquiries", async (req, res) => {
    try {
      const inquiry = insertInquirySchema.parse(req.body);
      const created = await storage.createInquiry(inquiry);
      res.status(201).json(created);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Invalid inquiry data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create inquiry" });
    }
  });

  // Donation Inquiries
  app.post("/api/donation-inquiries", async (req, res) => {
    try {
      const { email, message, donationType, title } = req.body;
      
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      // Send email notification to sales team
      try {
        await sendDonationInquiryEmail({
          email,
          message: message || '',
          donationType,
          title
        });
        console.log("Donation inquiry email sent successfully");
        res.status(200).json({ success: true, message: "Donation inquiry submitted successfully" });
      } catch (emailError) {
        console.error("Failed to send donation inquiry email:", emailError);
        res.status(500).json({ message: "Failed to send donation inquiry" });
      }
    } catch (error) {
      console.error("Error processing donation inquiry:", error);
      res.status(500).json({ message: "Failed to process donation inquiry" });
    }
  });

  app.post("/api/create-donation-intent", async (req, res) => {
    if (!stripe) {
      return res.status(500).json({ message: "Stripe is not configured" });
    }

    try {
      const { amount, donationType } = req.body;

      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: "usd",
        metadata: {
          donationType
        }
      });

      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.post("/api/create-subscription", async (req, res) => {
    if (!stripe) {
      return res.status(500).json({ message: "Stripe is not configured" });
    }

    try {
      const { email, name, paymentMethod, amount } = req.body;

      // Create or get customer
      const customer = await stripe.customers.create({
        email,
        name,
        payment_method: paymentMethod,
        invoice_settings: { default_payment_method: paymentMethod }
      });

      // Create price for the subscription
      const price = await stripe.prices.create({
        unit_amount: Math.round(amount * 100),
        currency: 'usd',
        recurring: { interval: 'month' },
        product_data: {
          name: 'Monthly Donation'
        }
      });

      // Create the subscription
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: price.id }],
        payment_settings: {
          payment_method_types: ['card'],
          save_default_payment_method: 'on_subscription'
        },
        expand: ['latest_invoice.payment_intent']
      });

      const invoice = subscription.latest_invoice as Stripe.Invoice;
      const paymentIntent = invoice.payment_intent as Stripe.PaymentIntent;

      res.json({
        subscriptionId: subscription.id,
        clientSecret: paymentIntent.client_secret
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.post("/api/donations", async (req, res) => {
    try {
      const donation = insertDonationSchema.parse(req.body);
      const created = await storage.createDonation(donation);

      // Send email notification
      try {
        await sendDonationEmail(donation);
        console.log("Donation email sent successfully");
      } catch (emailError) {
        console.error("Failed to send donation email:", emailError);
        // Continue processing even if email fails
      }

      res.status(201).json(created);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Invalid donation data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create donation" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}