import { pgTable, text, serial, integer, boolean, jsonb, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const itineraries = pgTable("itineraries", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  duration: integer("duration").notNull(),
  location: text("location").notNull(),
  country: text("country").default("Kenya").notNull(),
  highlights: text("highlights").array().notNull(),
  dayByDay: jsonb("day_by_day").notNull(),
  imageUrl: text("image_url"),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  category: text("category").notNull(),
  packageType: text("package_type").default("Budget-Friendly").notNull(), // Updated to match doc categories
  inclusions: text("inclusions").array(), // Added to match document structure
  perfectFor: text("perfect_for"), // Added to match document structure
  destinations: text("destinations"), // Added to match document structure
  difficultyLevel: text("difficulty_level").notNull(),
  experiences: text("experiences").array(),
  tags: text("tags").array(),
  featuredExperience: text("featured_experience"),
  seasonality: text("seasonality"), // Added for seasonal packages like migration
  averageRating: decimal("average_rating", { precision: 3, scale: 2 }),
  totalReviews: integer("total_reviews").default(0),
  isPopular: boolean("is_popular").default(false),
  isFeatured: boolean("is_featured").default(false)
});

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  itineraryId: integer("itinerary_id").notNull(),
  userName: text("user_name").notNull(),
  rating: integer("rating").notNull(),
  comment: text("comment").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  countryCode: text("country_code"),
  itineraryId: integer("itinerary_id").notNull(),
  preferredDates: text("preferred_dates").notNull(),
  numberOfAdults: integer("number_of_adults").default(1),
  numberOfKids: integer("number_of_kids").default(0),
  numberOfToddlers: integer("number_of_toddlers").default(0),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  bio: text("bio").notNull(),
  imageUrl: text("image_url").notNull(),
  specialty: text("specialty"),
  yearsOfExperience: integer("years_of_experience"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const fleetVehicles = pgTable("fleet_vehicles", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  capacity: text("capacity").notNull(),
  features: text("features").array().notNull(),
  imageUrl: text("image_url").notNull(),
  type: text("type").notNull(),
  available: boolean("available").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  type: text("type").notNull(),
  message: text("message").notNull()
});

export const donations = pgTable("donations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  donationType: text("donation_type").notNull(),
  projectId: text("project_id"),
  stripePaymentId: text("stripe_payment_id").notNull(),
  stripeCustomerId: text("stripe_customer_id"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const volunteers = pgTable("volunteers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  availability: text("availability").notNull(),
  skills: text("skills").array().notNull(),
  status: text("status").default("active").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const insertItinerarySchema = createInsertSchema(itineraries);
export const insertBookingSchema = createInsertSchema(bookings);
export const insertInquirySchema = createInsertSchema(inquiries);
export const insertDonationSchema = createInsertSchema(donations).omit({ 
  stripePaymentId: true,
  stripeCustomerId: true,
  createdAt: true 
});
export const insertReviewSchema = createInsertSchema(reviews).omit({
  createdAt: true
});
export const insertTeamMemberSchema = createInsertSchema(teamMembers, {
  yearsOfExperience: z.number().min(0).optional()
}).omit({ createdAt: true });
export const insertFleetVehicleSchema = createInsertSchema(fleetVehicles).omit({ 
  createdAt: true,
  available: true 
});
export const insertVolunteerSchema = createInsertSchema(volunteers).omit({ 
  createdAt: true,
  status: true 
});

export type Itinerary = typeof itineraries.$inferSelect;
export type InsertItinerary = z.infer<typeof insertItinerarySchema>;
export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Donation = typeof donations.$inferSelect;
export type InsertDonation = z.infer<typeof insertDonationSchema>;
export type Review = typeof reviews.$inferSelect;
export type InsertReview = z.infer<typeof insertReviewSchema>;
export type TeamMember = typeof teamMembers.$inferSelect;
export type InsertTeamMember = z.infer<typeof insertTeamMemberSchema>;
export type FleetVehicle = typeof fleetVehicles.$inferSelect;
export type InsertFleetVehicle = z.infer<typeof insertFleetVehicleSchema>;
export type Volunteer = typeof volunteers.$inferSelect;
export type InsertVolunteer = z.infer<typeof insertVolunteerSchema>;