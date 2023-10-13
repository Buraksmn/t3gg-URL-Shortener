import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@app/server/api/trpc";

import shortid from "shortid";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure.query(async ({ ctx }) => {
    return (await ctx.db.example.findMany()).reverse();
  }),
  generateEasyLink: publicProcedure
    .input(
      z.object({
        originalLink: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const url = shortid.generate();
      const { shortLink } = await ctx.db.example.create({
        data: {
          clicl: "0",
          originalLink: input.originalLink,
          shortLink: url,
        },
      });

      return {
        data: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          shortLink,
        },
      };
    }),

  getUrl: publicProcedure
    .input(
      z.object({
        key: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const finded = await ctx.db.example.findMany({
        where: {
          shortLink: input.key,
        },
      });
      return { finded };
    }),
});
