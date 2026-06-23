import { eq, and, desc, asc, like, lt, gt, isNull, sum } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { 
  InsertUser, 
  users,
  communityMembers,
  contactSubmissions,
  opportunities,
  resources,
  testimonials,
  userUploads,
  newsUpdates,
  userApplications,
  userPreferences,
  donations,
  type CommunityMember,
  type ContactSubmission,
  type Opportunity,
  type Resource,
  type Testimonial,
  type UserUpload,
  type NewsUpdate,
  type UserApplication,
  type UserPreference,
  type Donation,
} from "../drizzle/schema";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// ============================================================================
// USER QUERIES
// ============================================================================

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getUserById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// ============================================================================
// COMMUNITY MEMBER QUERIES
// ============================================================================

export async function createCommunityMember(data: typeof communityMembers.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(communityMembers).values(data);
  return result;
}

export async function getCommunityMemberByUserId(userId: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(communityMembers).where(eq(communityMembers.userId, userId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function updateCommunityMember(userId: number, data: Partial<CommunityMember>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.update(communityMembers).set(data).where(eq(communityMembers.userId, userId));
}

// ============================================================================
// CONTACT SUBMISSION QUERIES
// ============================================================================

export async function createContactSubmission(data: typeof contactSubmissions.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.insert(contactSubmissions).values(data);
}

export async function getContactSubmissions(limit = 50, offset = 0) {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.submittedAt)).limit(limit).offset(offset);
}

export async function updateContactSubmissionStatus(id: number, status: "new" | "read" | "replied") {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.update(contactSubmissions).set({ status }).where(eq(contactSubmissions.id, id));
}

// ============================================================================
// OPPORTUNITY QUERIES
// ============================================================================

export async function createOpportunity(data: typeof opportunities.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.insert(opportunities).values(data);
}

export async function getOpportunities(filters?: { type?: string; status?: string; featured?: boolean; limit?: number; offset?: number }) {
  const db = await getDb();
  if (!db) return [];

  let query = db.select().from(opportunities);
  const conditions = [];

  if (filters?.type) conditions.push(eq(opportunities.type, filters.type as any));
  if (filters?.status) conditions.push(eq(opportunities.status, filters.status as any));
  if (filters?.featured) conditions.push(eq(opportunities.featured, true));

  if (conditions.length > 0) {
    query = query.where(and(...conditions));
  }

  query = query.orderBy(desc(opportunities.createdAt));

  if (filters?.limit) query = query.limit(filters.limit);
  if (filters?.offset) query = query.offset(filters.offset);

  return await query;
}

export async function getOpportunityById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(opportunities).where(eq(opportunities.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function updateOpportunity(id: number, data: Partial<Opportunity>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.update(opportunities).set(data).where(eq(opportunities.id, id));
}

export async function deleteOpportunity(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.delete(opportunities).where(eq(opportunities.id, id));
}

// ============================================================================
// RESOURCE QUERIES
// ============================================================================

export async function createResource(data: typeof resources.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.insert(resources).values(data);
}

export async function getResources(filters?: { type?: string; category?: string; featured?: boolean; limit?: number; offset?: number }) {
  const db = await getDb();
  if (!db) return [];

  let query = db.select().from(resources);
  const conditions = [];

  if (filters?.type) conditions.push(eq(resources.type, filters.type as any));
  if (filters?.category) conditions.push(eq(resources.category, filters.category));
  if (filters?.featured) conditions.push(eq(resources.featured, true));

  if (conditions.length > 0) {
    query = query.where(and(...conditions));
  }

  query = query.orderBy(desc(resources.createdAt));

  if (filters?.limit) query = query.limit(filters.limit);
  if (filters?.offset) query = query.offset(filters.offset);

  return await query;
}

export async function searchResources(searchTerm: string, limit = 20) {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(resources)
    .where(like(resources.title, `%${searchTerm}%`))
    .limit(limit);
}

export async function updateResource(id: number, data: Partial<Resource>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.update(resources).set(data).where(eq(resources.id, id));
}

export async function deleteResource(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.delete(resources).where(eq(resources.id, id));
}

// ============================================================================
// TESTIMONIAL QUERIES
// ============================================================================

export async function createTestimonial(data: typeof testimonials.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.insert(testimonials).values(data);
}

export async function getTestimonials(filters?: { featured?: boolean; status?: string; limit?: number; offset?: number }) {
  const db = await getDb();
  if (!db) return [];

  let query = db.select().from(testimonials);
  const conditions = [];

  if (filters?.featured) conditions.push(eq(testimonials.featured, true));
  if (filters?.status) conditions.push(eq(testimonials.status, filters.status as any));

  if (conditions.length > 0) {
    query = query.where(and(...conditions));
  }

  query = query.orderBy(desc(testimonials.createdAt));

  if (filters?.limit) query = query.limit(filters.limit);
  if (filters?.offset) query = query.offset(filters.offset);

  return await query;
}

export async function updateTestimonial(id: number, data: Partial<Testimonial>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.update(testimonials).set(data).where(eq(testimonials.id, id));
}

export async function deleteTestimonial(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.delete(testimonials).where(eq(testimonials.id, id));
}

// ============================================================================
// USER UPLOAD QUERIES
// ============================================================================

export async function createUserUpload(data: typeof userUploads.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.insert(userUploads).values(data);
}

export async function getUserUploads(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(userUploads).where(eq(userUploads.userId, userId)).orderBy(desc(userUploads.uploadedAt));
}

export async function deleteUserUpload(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.delete(userUploads).where(eq(userUploads.id, id));
}

// ============================================================================
// NEWS/UPDATES QUERIES
// ============================================================================

export async function createNewsUpdate(data: typeof newsUpdates.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.insert(newsUpdates).values(data);
}

export async function getNewsUpdates(filters?: { category?: string; featured?: boolean; status?: string; limit?: number; offset?: number }) {
  const db = await getDb();
  if (!db) return [];

  let query = db.select().from(newsUpdates);
  const conditions = [];

  if (filters?.category) conditions.push(eq(newsUpdates.category, filters.category));
  if (filters?.featured) conditions.push(eq(newsUpdates.featured, true));
  if (filters?.status) conditions.push(eq(newsUpdates.status, filters.status as any));

  if (conditions.length > 0) {
    query = query.where(and(...conditions));
  }

  query = query.orderBy(desc(newsUpdates.publishedAt));

  if (filters?.limit) query = query.limit(filters.limit);
  if (filters?.offset) query = query.offset(filters.offset);

  return await query;
}

export async function updateNewsUpdate(id: number, data: Partial<NewsUpdate>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.update(newsUpdates).set(data).where(eq(newsUpdates.id, id));
}

export async function deleteNewsUpdate(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.delete(newsUpdates).where(eq(newsUpdates.id, id));
}

// ============================================================================
// USER APPLICATION QUERIES
// ============================================================================

export async function createUserApplication(data: typeof userApplications.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.insert(userApplications).values(data);
}

export async function getUserApplications(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(userApplications).where(eq(userApplications.userId, userId)).orderBy(desc(userApplications.appliedAt));
}

export async function updateUserApplicationStatus(id: number, status: "applied" | "shortlisted" | "rejected" | "accepted") {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.update(userApplications).set({ status }).where(eq(userApplications.id, id));
}

// ============================================================================
// USER PREFERENCE QUERIES
// ============================================================================

export async function createUserPreference(data: typeof userPreferences.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.insert(userPreferences).values(data);
}

export async function getUserPreferences(userId: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(userPreferences).where(eq(userPreferences.userId, userId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function updateUserPreferences(userId: number, data: Partial<UserPreference>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.update(userPreferences).set(data).where(eq(userPreferences.userId, userId));
}


// ============================================================================
// DONATION QUERIES
// ============================================================================

export async function createDonation(data: {
  donorName: string;
  donorEmail?: string;
  amount: string;
  currency: string;
  paymentMethod: "easypaisa" | "nayapay" | "raast" | "binance" | "payoneer" | "other";
  transactionId?: string;
  message?: string;
  isAnonymous?: boolean;
}) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  return await db.insert(donations).values({
    donorName: data.donorName,
    donorEmail: data.donorEmail,
    amount: data.amount,
    currency: data.currency,
    paymentMethod: data.paymentMethod,
    transactionId: data.transactionId,
    message: data.message,
    isAnonymous: data.isAnonymous || false,
    status: "completed",
  });
}

export async function getDonations(limit: number = 10) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(donations)
    .where(eq(donations.status, "completed"))
    .orderBy(desc(donations.createdAt))
    .limit(limit);
}

export async function getDonationStats() {
  const db = await getDb();
  if (!db) return { totalDonations: 0, totalAmount: 0, donorCount: 0 };

  const result = await db
    .select({
      totalAmount: sum(donations.amount),
      donorCount: count(donations.id),
    })
    .from(donations)
    .where(eq(donations.status, "completed"));

  return {
    totalAmount: result[0]?.totalAmount || 0,
    donorCount: result[0]?.donorCount || 0,
  };
}

export async function getDonationsByPaymentMethod(method: string) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(donations)
    .where(and(
      eq(donations.paymentMethod, method as any),
      eq(donations.status, "completed")
    ))
    .orderBy(desc(donations.createdAt));
}
