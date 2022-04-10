import { Pool } from "pg";
import "dotenv/config";

if (process.env.DB_PORT === undefined) {
  throw new TypeError("DB Port Undefined");
}
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT),
});

export default pool;
