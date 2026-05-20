import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { generateFileKey } from "./storage";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  system: systemRouter,
  
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // ============================================================================
  // COMMUNITY MEMBER ROUTES
  // ============================================================================
  community: router({
    join: protectedProcedure
      .input(z.object({
        bio: z.string().optional(),
        skills: z.array(z.string()).optional(),
        interests: z.array(z.string()).optional(),
        location: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        const existing = await db.getCommunityMemberByUserId(ctx.user.id);
        if (existing) {
          throw new TRPCError({ code: "BAD_REQUEST", message: "Already a community member" });
        }

        await db.createCommunityMember({
          userId: ctx.user.id,
          bio: input.bio,
          skills: input.skills ? JSON.stringify(input.skills) : null,
          interests: input.interests ? JSON.stringify(input.interests) : null,
          location: input.location,
        });

        return { success: true };
      }),

    getProfile: protectedProcedure.query(async ({ ctx }) => {
      return await db.getCommunityMemberByUserId(ctx.user.id);
    }),

    updateProfile: protectedProcedure
      .input(z.object({
        bio: z.string().optional(),
        skills: z.array(z.string()).optional(),
        interests: z.array(z.string()).optional(),
        location: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        await db.updateCommunityMember(ctx.user.id, {
          bio: input.bio,
          skills: input.skills ? JSON.stringify(input.skills) : undefined,
          interests: input.interests ? JSON.stringify(input.interests) : undefined,
          location: input.location,
        });

        return { success: true };
      }),
  }),

  // ============================================================================
  // CONTACT ROUTES
  // ============================================================================
  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        subject: z.string().min(1),
        message: z.string().min(1),
      }))
      .mutation(async ({ input }) => {
        await db.createContactSubmission({
          name: input.name,
          email: input.email,
          subject: input.subject,
          message: input.message,
        });

        return { success: true };
      }),

    getSubmissions: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new TRPCError({ code: "FORBIDDEN" });
      }
      return await db.getContactSubmissions(100, 0);
    }),

    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["new", "read", "replied"]),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        await db.updateContactSubmissionStatus(input.id, input.status);
        return { success: true };
      }),
  }),

  // ============================================================================
  // OPPORTUNITY ROUTES
  // ============================================================================
  opportunities: router({
    list: publicProcedure
      .input(z.object({
        type: z.string().optional(),
        status: z.string().optional(),
        featured: z.boolean().optional(),
        limit: z.number().default(20),
        offset: z.number().default(0),
      }))
      .query(async ({ input }) => {
        return await db.getOpportunities({
          type: input.type,
          status: input.status || "active",
          featured: input.featured,
          limit: input.limit,
          offset: input.offset,
        });
      }),

    getById: publicProcedure
      .input(z.number())
      .query(async ({ input }) => {
        return await db.getOpportunityById(input);
      }),

    create: protectedProcedure
      .input(z.object({
        title: z.string(),
        description: z.string(),
        type: z.enum(["internship", "remote_job", "freelance", "scholarship", "course"]),
        category: z.string().optional(),
        company: z.string().optional(),
        salary: z.string().optional(),
        location: z.string().optional(),
        applicationUrl: z.string().optional(),
        deadline: z.date().optional(),
        requirements: z.array(z.string()).optional(),
        benefits: z.array(z.string()).optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }

        const result = await db.createOpportunity({
          title: input.title,
          description: input.description,
          type: input.type,
          category: input.category,
          company: input.company,
          salary: input.salary,
          location: input.location,
          applicationUrl: input.applicationUrl,
          deadline: input.deadline,
          requirements: input.requirements ? JSON.stringify(input.requirements) : null,
          benefits: input.benefits ? JSON.stringify(input.benefits) : null,
          createdBy: ctx.user.id,
        });

        return { success: true, id: result.insertId };
      }),

    update: protectedProcedure
      .input(z.object({
        id: z.number(),
        title: z.string().optional(),
        description: z.string().optional(),
        status: z.enum(["active", "closed", "archived"]).optional(),
        featured: z.boolean().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }

        await db.updateOpportunity(input.id, {
          title: input.title,
          description: input.description,
          status: input.status,
          featured: input.featured,
        });

        return { success: true };
      }),

    delete: protectedProcedure
      .input(z.number())
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }

        await db.deleteOpportunity(input);
        return { success: true };
      }),

    apply: protectedProcedure
      .input(z.number())
      .mutation(async ({ ctx, input }) => {
        await db.createUserApplication({
          userId: ctx.user.id,
          opportunityId: input,
        });

        return { success: true };
      }),

    getMyApplications: protectedProcedure.query(async ({ ctx }) => {
      return await db.getUserApplications(ctx.user.id);
    }),
  }),

  // ============================================================================
  // RESOURCE ROUTES
  // ============================================================================
  resources: router({
    list: publicProcedure
      .input(z.object({
        type: z.string().optional(),
        category: z.string().optional(),
        featured: z.boolean().optional(),
        limit: z.number().default(20),
        offset: z.number().default(0),
      }))
      .query(async ({ input }) => {
        return await db.getResources({
          type: input.type,
          category: input.category,
          featured: input.featured,
          limit: input.limit,
          offset: input.offset,
        });
      }),

    search: publicProcedure
      .input(z.string())
      .query(async ({ input }) => {
        return await db.searchResources(input);
      }),

    create: protectedProcedure
      .input(z.object({
        title: z.string(),
        description: z.string().optional(),
        type: z.enum(["pdf", "tool", "website", "guide", "course", "video"]),
        category: z.string(),
        url: z.string().optional(),
        icon: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }

        const result = await db.createResource({
          title: input.title,
          description: input.description,
          type: input.type,
          category: input.category,
          url: input.url,
          icon: input.icon,
          createdBy: ctx.user.id,
        });

        return { success: true, id: result.insertId };
      }),

    update: protectedProcedure
      .input(z.object({
        id: z.number(),
        title: z.string().optional(),
        featured: z.boolean().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }

        await db.updateResource(input.id, {
          title: input.title,
          featured: input.featured,
        });

        return { success: true };
      }),

    delete: protectedProcedure
      .input(z.number())
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }

        await db.deleteResource(input);
        return { success: true };
      }),
  }),

  // ============================================================================
  // TESTIMONIAL ROUTES
  // ============================================================================
  testimonials: router({
    list: publicProcedure
      .input(z.object({
        featured: z.boolean().optional(),
        limit: z.number().default(10),
        offset: z.number().default(0),
      }))
      .query(async ({ input }) => {
        return await db.getTestimonials({
          featured: input.featured,
          status: "approved",
          limit: input.limit,
          offset: input.offset,
        });
      }),

    submit: publicProcedure
      .input(z.object({
        authorName: z.string(),
        authorRole: z.string(),
        content: z.string(),
        rating: z.number().min(1).max(5).optional(),
      }))
      .mutation(async ({ input }) => {
        await db.createTestimonial({
          authorName: input.authorName,
          authorRole: input.authorRole,
          content: input.content,
          rating: input.rating || 5,
          status: "pending",
        });

        return { success: true };
      }),

    getPending: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new TRPCError({ code: "FORBIDDEN" });
      }
      return await db.getTestimonials({ status: "pending" });
    }),

    approve: protectedProcedure
      .input(z.number())
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }

        await db.updateTestimonial(input, { status: "approved" });
        return { success: true };
      }),

    reject: protectedProcedure
      .input(z.number())
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }

        await db.updateTestimonial(input, { status: "rejected" });
        return { success: true };
      }),
  }),

  // ============================================================================
  // NEWS/UPDATES ROUTES
  // ============================================================================
  news: router({
    list: publicProcedure
      .input(z.object({
        category: z.string().optional(),
        featured: z.boolean().optional(),
        limit: z.number().default(10),
        offset: z.number().default(0),
      }))
      .query(async ({ input }) => {
        return await db.getNewsUpdates({
          category: input.category,
          featured: input.featured,
          status: "published",
          limit: input.limit,
          offset: input.offset,
        });
      }),

    create: protectedProcedure
      .input(z.object({
        title: z.string(),
        content: z.string(),
        category: z.string(),
        imageUrl: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }

        const result = await db.createNewsUpdate({
          title: input.title,
          content: input.content,
          category: input.category,
          imageUrl: input.imageUrl,
          status: "draft",
          createdBy: ctx.user.id,
        });

        return { success: true, id: result.insertId };
      }),

    publish: protectedProcedure
      .input(z.number())
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }

        await db.updateNewsUpdate(input, {
          status: "published",
          publishedAt: new Date(),
        });

        return { success: true };
      }),

    delete: protectedProcedure
      .input(z.number())
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }

        await db.deleteNewsUpdate(input);
        return { success: true };
      }),
  }),

  // ============================================================================
  // FILE UPLOAD ROUTES
  // ============================================================================
  uploads: router({
    getUploadUrl: protectedProcedure
      .input(z.object({
        fileName: z.string(),
        fileType: z.enum(["resume", "portfolio", "document"]),
      }))
      .query(async ({ ctx, input }) => {
        const fileKey = generateFileKey(ctx.user.id, input.fileType, input.fileName);
        return { fileKey, uploadUrl: `/api/upload?key=${fileKey}` };
      }),

    saveUpload: protectedProcedure
      .input(z.object({
        fileName: z.string(),
        fileKey: z.string(),
        fileType: z.enum(["resume", "portfolio", "document"]),
        fileSize: z.number(),
        mimeType: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        await db.createUserUpload({
          userId: ctx.user.id,
          fileName: input.fileName,
          fileKey: input.fileKey,
          fileType: input.fileType,
          fileSize: input.fileSize,
          mimeType: input.mimeType,
        });

        return { success: true };
      }),

    getMyUploads: protectedProcedure.query(async ({ ctx }) => {
      return await db.getUserUploads(ctx.user.id);
    }),

    delete: protectedProcedure
      .input(z.number())
      .mutation(async ({ ctx, input }) => {
        await db.deleteUserUpload(input);
        return { success: true };
      }),
  }),

  // ============================================================================
  // CONTENT MANAGEMENT ROUTES
  // ============================================================================
  content: router({
    getPublished: publicProcedure
      .input(z.object({
        limit: z.number().default(10),
        category: z.string().optional(),
      }))
      .query(async ({ input }) => {
        // TODO: Implement content retrieval from contentService
        return [];
      }),

    getSchedules: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new TRPCError({ code: "FORBIDDEN" });
      }
      // TODO: Implement schedule retrieval
      return [];
    }),

    scheduleWeekly: protectedProcedure
      .input(z.object({
        topics: z.array(z.string()),
        scheduledDate: z.date(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        // TODO: Implement weekly scheduling
        return { success: true };
      }),

    generateContent: protectedProcedure
      .input(z.object({
        topic: z.string(),
        category: z.enum(["ai_tools", "internships", "opportunities", "earning_methods", "trending_skills", "resources"]),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        // TODO: Implement content generation
        return { success: true, postId: 0 };
      }),
  }),

  // ============================================================================
  // USER PREFERENCES ROUTES
  // ============================================================================
  preferences: router({
    get: protectedProcedure.query(async ({ ctx }) => {
      return await db.getUserPreferences(ctx.user.id);
    }),

    update: protectedProcedure
      .input(z.object({
        emailNotifications: z.boolean().optional(),
        opportunityNotifications: z.boolean().optional(),
        newsNotifications: z.boolean().optional(),
        preferredCategories: z.array(z.string()).optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        const existing = await db.getUserPreferences(ctx.user.id);

        if (!existing) {
          await db.createUserPreference({
            userId: ctx.user.id,
            emailNotifications: input.emailNotifications ?? true,
            opportunityNotifications: input.opportunityNotifications ?? true,
            newsNotifications: input.newsNotifications ?? true,
            preferredCategories: input.preferredCategories ? JSON.stringify(input.preferredCategories) : null,
          });
        } else {
          await db.updateUserPreferences(ctx.user.id, {
            emailNotifications: input.emailNotifications,
            opportunityNotifications: input.opportunityNotifications,
            newsNotifications: input.newsNotifications,
            preferredCategories: input.preferredCategories ? JSON.stringify(input.preferredCategories) : undefined,
          });
        }

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
