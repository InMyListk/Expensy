import { Request, Response, NextFunction } from "express";
import {
  DaysServicShow,
  ExpenseServicDelete,
  ExpensesPerDayServicShow,
  DayServicDelete,
} from "../services/expensesService";

export const tableDataController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.body.userId;

  try {
    const response = await DaysServicShow(userId);

    res.send(response).status(200);

    next();
  } catch (error) {
    throw new Error(
      `there is an error in tableDataController error : ${error}`
    );
  }
};
export const expensesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.body.userId;
  const dayId = req.body.dayId;
  try {
    const response = await ExpensesPerDayServicShow(userId, dayId);

    res.send(response).status(200);

    next();
  } catch (error) {
    throw new Error(
      `there is an error in tableDataController error : ${error}`
    );
  }
};

export const deleteExpenseController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const expenseId = req.params.id;
    await ExpenseServicDelete(Number(expenseId));
    console.log(expenseId);
    next();
  } catch (error) {
    throw new Error(
      `there is an error in deleteExpenseController error : ${error}`
    );
  }
};
export const deleteDayController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dayId = req.params.id;
    await DayServicDelete(Number(dayId));

    next();
  } catch (error) {
    throw new Error(
      `there is an error in deleteDayController error : ${error}`
    );
  }
};
