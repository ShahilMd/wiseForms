import { formRouter } from "./routes/form";
import { router } from "./trpc";


export const appRouter = router({
    form: formRouter
})

export type Approuter = typeof appRouter