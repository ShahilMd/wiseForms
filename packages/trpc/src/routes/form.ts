import z from "zod"
import { publicProcedure, router } from "../trpc"


export const formRouter = router({
    create: publicProcedure
        .meta({
            openapi: {
                method: "POST",
                path: "/v1/forms",
                tags: ["forms"]
            }
        })
        .input(z.object({
            title: z.string(),
        })
        )
        .mutation(async ({ input }) => {
            return {
                id: crypto.randomUUID(),
                title: input.title,
            }
        }),

    getAll: publicProcedure.query(async () => {
        return [];
    })
})