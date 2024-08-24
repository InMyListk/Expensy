import { NextFunction, Request, Response } from "express";
import { ExpenseServicCreate } from "../services/expensesService";

import { Expense } from "../models/expense";

export const addExpensesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const expense: Expense = {
    userId: req.body.userId,
    name: req.body.name,
    price: req.body.price,
    date: req.body.date,
    category: req.body.category,
  };

  // console.log(expense);
  const date = new Date(expense.date).toISOString();

  const sendDate = await ExpenseServicCreate(
    {
      ...expense,
      price: Number(expense.price),
      date: date,
    },
    expense.userId
  );

  console.log(sendDate);

  res.send({ success: true }).status(200);

  next();
  try {
  } catch (error) {
    throw new Error(
      `there is an error in addExpensesController error : ${error}`
    );
  }
};
