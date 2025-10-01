import { 
  Itinerary, InsertItinerary, 
  Booking, InsertBooking, 
  Inquiry, InsertInquiry, 
  Donation, InsertDonation,
  Review, InsertReview,
  TeamMember, InsertTeamMember,
  FleetVehicle, InsertFleetVehicle,
  Volunteer, InsertVolunteer,
  itineraries, reviews, bookings, inquiries, donations,
  teamMembers, fleetVehicles, volunteers
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and, like, or, sql } from "drizzle-orm";

export interface IStorage {
  // Itineraries
  getItineraries(): Promise<Itinerary[]>;
  getItinerary(id: number): Promise<Itinerary | undefined>;
  createItinerary(itinerary: InsertItinerary): Promise<Itinerary>;
  searchItineraries(query: string, filters: any): Promise<Itinerary[]>;

  // Reviews
  createReview(review: InsertReview): Promise<Review>;
  getItineraryReviews(itineraryId: number): Promise<Review[]>;
  updateItineraryRating(itineraryId: number): Promise<void>;

  // Bookings
  createBooking(booking: InsertBooking): Promise<Booking>;

  // Inquiries
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;

  // Donations
  createDonation(donation: InsertDonation): Promise<Donation>;

  // Team Members
  getTeamMembers(): Promise<TeamMember[]>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;

  // Fleet Vehicles
  getFleetVehicles(): Promise<FleetVehicle[]>;
  createFleetVehicle(vehicle: InsertFleetVehicle): Promise<FleetVehicle>;

  // Volunteers
  getVolunteers(): Promise<Volunteer[]>;
  createVolunteer(volunteer: InsertVolunteer): Promise<Volunteer>;
}

export class DatabaseStorage implements IStorage {
  async getItineraries(): Promise<Itinerary[]> {
    return await db.select().from(itineraries);
  }

  async getItinerary(id: number): Promise<Itinerary | undefined> {
    const [itinerary] = await db
      .select()
      .from(itineraries)
      .where(eq(itineraries.id, id));
    return itinerary;
  }

  async createItinerary(insertItinerary: InsertItinerary): Promise<Itinerary> {
    const [itinerary] = await db
      .insert(itineraries)
      .values(insertItinerary)
      .returning();
    return itinerary;
  }

  async searchItineraries(query: string, filters: any): Promise<Itinerary[]> {
    let conditions = [];

    // Search by query text
    if (query) {
      conditions.push(
        or(
          like(itineraries.title, `%${query}%`),
          like(itineraries.description, `%${query}%`),
          like(itineraries.location, `%${query}%`)
        )
      );
    }

    // Apply filters if they exist
    if (filters?.category) {
      conditions.push(eq(itineraries.category, filters.category));
    }
    
    // Add package type filter
    if (filters?.packageType) {
      conditions.push(eq(itineraries.packageType, filters.packageType));
    }
    
    // Add country filter
    if (filters?.country) {
      conditions.push(eq(itineraries.country, filters.country));
    }
    
    if (filters?.difficultyLevel) {
      conditions.push(eq(itineraries.difficultyLevel, filters.difficultyLevel));
    }
    if (filters?.duration) {
      conditions.push(eq(itineraries.duration, filters.duration));
    }

    // If no conditions, return all itineraries
    return await db
      .select()
      .from(itineraries)
      .where(conditions.length > 0 ? and(...conditions) : undefined)
      .orderBy(desc(itineraries.id));
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const [review] = await db
      .insert(reviews)
      .values(insertReview)
      .returning();

    await this.updateItineraryRating(insertReview.itineraryId);
    return review;
  }

  async getItineraryReviews(itineraryId: number): Promise<Review[]> {
    return await db
      .select()
      .from(reviews)
      .where(eq(reviews.itineraryId, itineraryId))
      .orderBy(desc(reviews.createdAt));
  }

  async updateItineraryRating(itineraryId: number): Promise<void> {
    const result = await db
      .select({
        averageRating: sql<number>`avg(${reviews.rating})`,
        totalReviews: sql<number>`count(${reviews.id})`
      })
      .from(reviews)
      .where(eq(reviews.itineraryId, itineraryId))
      .groupBy(reviews.itineraryId);

    if (result.length > 0) {
      await db
        .update(itineraries)
        .set({
          averageRating: result[0].averageRating,
          totalReviews: result[0].totalReviews
        })
        .where(eq(itineraries.id, itineraryId));
    }
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const [booking] = await db
      .insert(bookings)
      .values(insertBooking)
      .returning();
    return booking;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db
      .insert(inquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }

  async createDonation(insertDonation: InsertDonation): Promise<Donation> {
    const [donation] = await db
      .insert(donations)
      .values({
        ...insertDonation,
        stripePaymentId: '',
        createdAt: new Date()
      })
      .returning();
    return donation;
  }

  // Team Members Methods
  async getTeamMembers(): Promise<TeamMember[]> {
    return await db
      .select()
      .from(teamMembers)
      .orderBy(teamMembers.id);
  }

  async createTeamMember(member: InsertTeamMember): Promise<TeamMember> {
    const [teamMember] = await db
      .insert(teamMembers)
      .values(member)
      .returning();
    return teamMember;
  }

  // Fleet Vehicles Methods
  async getFleetVehicles(): Promise<FleetVehicle[]> {
    return await db
      .select()
      .from(fleetVehicles)
      .where(eq(fleetVehicles.available, true))
      .orderBy(desc(fleetVehicles.createdAt));
  }

  async createFleetVehicle(vehicle: InsertFleetVehicle): Promise<FleetVehicle> {
    const [fleetVehicle] = await db
      .insert(fleetVehicles)
      .values(vehicle)
      .returning();
    return fleetVehicle;
  }

  // Volunteers Methods
  async getVolunteers(): Promise<Volunteer[]> {
    return await db
      .select()
      .from(volunteers)
      .where(eq(volunteers.status, "active"))
      .orderBy(desc(volunteers.createdAt));
  }

  async createVolunteer(volunteer: InsertVolunteer): Promise<Volunteer> {
    const [newVolunteer] = await db
      .insert(volunteers)
      .values(volunteer)
      .returning();
    return newVolunteer;
  }
}

export const storage = new DatabaseStorage();