import express, { Response, Request, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { registerRouter } from "./src/routes/registerRoute";
import { loginRouter } from "./src/routes/loginRoute";
import { validateRouter } from "./src/routes/validateUserRoute";
import { addRouter } from "./src/routes/addExpensesRoute";
import { tableDataRouter } from "./src/routes/tableDataRoute";

const app = express();

const PORT = 4000;
const corsOptions = {
  origin: "http://192.168.1.2:3000", // Adjust as needed
  credentials: true, // Allow credentials (cookies, etc.)
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(registerRouter);
// app.use(loginRouter);
// app.use(validateRouter);
app.use(addRouter);
app.use(tableDataRouter);

app.post("/", (req: Request, res: Response, next: NextFunction): void => {
  console.log(req.body);
  res.send("Success").status(200);
  next();
});

app.listen(PORT, (): void => {
  console.log(`The server is running on PORT: ${PORT}`);
});
