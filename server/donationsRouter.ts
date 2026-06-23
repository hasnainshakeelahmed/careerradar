import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { TRPCError } from "@trpc/server";

export const donationsRouter = router({
  // Create a donation
  create: publicProcedure
    .input(z.object({
      donorName: z.string().min(2, "Name must be at least 2 characters"),
      donorEmail: z.string().email().optional(),
      amount: z.string().regex(/^\d+(\.\d{1,2})?$/, "Invalid amount format"),
      currency: z.string().default("USD"),
      paymentMethod: z.enum(["easypaisa", "nayapay", "raast", "binance", "payoneer", "other"]),
      transactionId: z.string().optional(),
      message: z.string().optional(),
      isAnonymous: z.boolean().default(false),
    }))
    .mutation(async ({ input }) => {
      // Validate amount
      const amount = parseFloat(input.amount);
      if (amount <= 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Donation amount must be greater than 0",
        });
      }

      try {
        await db.createDonation({
          donorName: input.isAnonymous ? "Anonymous Supporter" : input.donorName,
          donorEmail: input.donorEmail,
          amount: input.amount,
          currency: input.currency,
          paymentMethod: input.paymentMethod,
          transactionId: input.transactionId,
          message: input.message,
          isAnonymous: input.isAnonymous,
        });

        return {
          success: true,
          message: "Thank you for your generous donation! Your support means a lot to us.",
        };
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to process donation",
        });
      }
    }),

  // Get recent donations (public list)
  getRecent: publicProcedure
    .input(z.object({
      limit: z.number().default(10).max(50),
    }))
    .query(async ({ input }) => {
      const donations = await db.getDonations(input.limit);
      
      // Filter out sensitive information for public display
      return donations.map((donation) => ({
        id: donation.id,
        donorName: donation.isAnonymous ? "Anonymous" : donation.donorName,
        amount: donation.amount,
        currency: donation.currency,
        message: donation.message,
        createdAt: donation.createdAt,
      }));
    }),

  // Get donation statistics
  getStats: publicProcedure.query(async () => {
    const stats = await db.getDonationStats();
    
    return {
      totalDonations: stats.donorCount || 0,
      totalAmount: stats.totalAmount || 0,
      averageDonation: stats.donorCount ? (stats.totalAmount / stats.donorCount).toFixed(2) : 0,
    };
  }),

  // Get donations by payment method
  getByMethod: publicProcedure
    .input(z.object({
      method: z.enum(["easypaisa", "nayapay", "raast", "binance", "payoneer", "other"]),
    }))
    .query(async ({ input }) => {
      const donations = await db.getDonationsByPaymentMethod(input.method);
      
      return donations.map((donation) => ({
        id: donation.id,
        donorName: donation.isAnonymous ? "Anonymous" : donation.donorName,
        amount: donation.amount,
        currency: donation.currency,
        createdAt: donation.createdAt,
      }));
    }),
});
