import { config } from "dotenv"
import { defineConfig } from "drizzle-kit"
import path from "path"
import fs from "fs"

function findEnvPath(): string {
    let dir = typeof __dirname !== "undefined" ? __dirname : process.cwd();
    while (dir) {
        const maybeEnv = path.join(dir, ".env");
        if (fs.existsSync(maybeEnv)) {
            return maybeEnv;
        }
        const parent = path.dirname(dir);
        if (parent === dir) {
            break;
        }
        dir = parent;
    }
    return ".env";
}

config({ path: findEnvPath() })



export default defineConfig({
    schema: "packages/db/src/schema.ts",
    out: "packages/db/drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!
    }
})