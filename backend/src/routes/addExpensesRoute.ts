import { Router } from "express";
import { addExpensesController } from "../controllers/expensesController";

export const addRouter = Router();

addRouter.post("/api/v0/add", addExpensesController);
