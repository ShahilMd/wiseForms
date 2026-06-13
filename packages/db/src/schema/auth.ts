import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";


export const users = pgTable("users", {
    id: uuid("id")
        .defaultRandom()
        .primaryKey(),

    email: text("email")
        .notNull()
        .unique(),

    passwordHash: text("password_hash")
        .notNull(),

    name: text("name"),

    createdAt: timestamp("created_at")
        .defaultNow()
        .notNull(),
}); 

export const sessions = pgTable("sessions", {
  id: uuid("id")
    .defaultRandom()
    .primaryKey(),

  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),

  expiresAt: timestamp("expires_at")
    .notNull(),
});