import dotenv from "dotenv";
import pg from "pg";
import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import * as schema from "../models/schema";
dotenv.config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL!,
});

const db = drizzle(pool, { schema }); // as NodePgDatabase<typeof schema>

export default db;
