import { integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  age: integer("age").notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  phone: varchar("phone").unique().notNull(),
  address1: varchar("address1").notNull(),
  address2: varchar("address2"),
  city: varchar("city").notNull(),
  state: varchar("state", { length: 2 }).notNull(),
  zip: varchar("zip", { length: 10 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(
    () => new Date()),
})


