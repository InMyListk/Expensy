import { Router } from "express";

import {
  deleteDayController,
  deleteExpenseController,
  expensesController,
  tableDataController,
} from "../controllers/tableDataController";

export const tableDataRouter = Router();

tableDataRouter.post("/api/v0/table", tableDataController);
tableDataRouter.post("/api/v0/expenses", expensesController);
tableDataRouter.get(`/api/v0/delete/:id`, deleteExpenseController);
tableDataRouter.get(`/api/v0/deleteday/:id`, deleteDayController);
