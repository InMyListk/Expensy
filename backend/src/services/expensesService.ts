import { ExpensesRepositoryStore } from "../dataAccess/expensesRepository";

import { Expense } from "../models/expense";

const ExpensesRepositoryStoreObj = new ExpensesRepositoryStore();

// create new expense
export const ExpenseServicCreate = async (expense: Expense, userId: string) => {
  try {
    const responce = await ExpensesRepositoryStoreObj.create(expense, userId);

    return responce;
  } catch (error) {
    throw new Error(`there is an error in ExpenseServicCreate error: ${error}`);
  }
};

export const DaysServicShow = async (userId: string) => {
  try {
    const days = await ExpensesRepositoryStoreObj.showDays(userId);

    const normalizedData = days.map((day) => {
      // get the total sum of expenses prices

      let total = day.expenses.reduce((acc, item) => acc + item.price, 0);

      return { ...day, total };
    });

    return normalizedData;
  } catch (error) {
    throw new Error(`there is an error in ExpenseServicShow error: ${error}`);
  }
};

// get all expenses that belongs to specific day
export const ExpensesPerDayServicShow = async (
  userId: string,
  dayId: number
) => {
  try {
    const days = await ExpensesRepositoryStoreObj.showExpnsesPerDay(
      userId,
      dayId
    );

    return days;
  } catch (error) {
    throw new Error(`there is an error in ExpenseServicShow error: ${error}`);
  }
};

export const ExpenseServicDelete = async (id: number) => {
  try {
    await ExpensesRepositoryStoreObj.deleteExpense(id);
  } catch (error) {
    throw new Error(`there is an error in ExpenseServicDelete error: ${error}`);
  }
};

export const DayServicDelete = async (id: number) => {
  try {
    await ExpensesRepositoryStoreObj.deleteDay(id);
  } catch (error) {
    throw new Error(`there is an error in ExpenseServicDelete error: ${error}`);
  }
};
