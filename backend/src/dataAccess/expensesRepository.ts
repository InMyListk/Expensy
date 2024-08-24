import db from "../config/database";
import { days, expenses } from "../models/schema";

import { Expense } from "../models/expense";
import { and, eq } from "drizzle-orm";

export class ExpensesRepositoryStore {
  async indexDay(date: string, userId: string) {
    try {
      const day = await db.query.days.findFirst({
        where: and(eq(days.date, date), eq(days.userId, userId)),
      });

      if (!day) {
        const dayId = await db
          .insert(days)
          .values({
            userId: userId,
            date: date,
          })
          .returning({ id: days.id });

        return dayId[0].id;
      }

      return day.id;
    } catch (error) {
      throw new Error(`there is an error searching day error: ${error}`);
    }
  }

  async create(expense: Expense, userId: string) {
    try {
      const dayId = await this.indexDay(expense.date, userId);

      await db.insert(expenses).values({
        userId: userId,
        name: expense.name,
        date: expense.date,
        category: expense.category,
        price: expense.price,
        dayId: dayId,
      });
      return true;
    } catch (error) {
      throw new Error(`there is an error inserting expense error: ${error}`);
    }
  }

  async showDays(userId: string) {
    try {
      const daysData = await db.query.days.findMany({
        where: eq(days.userId, userId),
        with: {
          expenses: true,
        },
      });
      if (!daysData) {
        return [];
      }

      return daysData;
    } catch (error) {
      throw new Error(`there is an error searching days error: ${error}`);
    }
  }

  async showExpnsesPerDay(userId: string, dayId: number) {
    try {
      const expensesData = await db.query.expenses.findMany({
        where: and(eq(expenses.userId, userId), eq(expenses.dayId, dayId)),
      });

      if (!expensesData) {
        return [];
      }
      console.log(dayId);
      return expensesData;
    } catch (error) {
      throw new Error(`there is an error searching expenses error: ${error}`);
    }
  }

  async deleteExpense(id: number) {
    try {
      await db.delete(expenses).where(eq(expenses.id, id));
    } catch (error) {
      throw new Error(`there is an error deleting expense error: ${error}`);
    }
  }
  async deleteDay(id: number) {
    try {
      const responce = await db.delete(days).where(eq(days.id, id));
      console.log(responce);
    } catch (error) {
      throw new Error(`there is an error deleting day error: ${error}`);
    }
  }
}
