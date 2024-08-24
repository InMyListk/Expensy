import { relations } from "drizzle-orm";
import { date, integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const days = pgTable("days", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  date: date("date").notNull(),
});

export const daysRelations = relations(days, ({ many }) => ({
  expenses: many(expenses),
}));

export const expenses = pgTable("expenses", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  category: text("category").notNull(),
  date: date("date").notNull(),
  dayId: integer("day_id").references(() => days.id, { onDelete: "cascade" }),
});

export const expensesRelations = relations(expenses, ({ one }) => ({
  day: one(days, {
    fields: [expenses.dayId],
    references: [days.id],
  }),
}));

export const months = pgTable("months", {
  id: serial("id").primaryKey(),
  date: date("date").notNull(),
});
