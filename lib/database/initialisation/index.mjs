import pkg from "pg";
import "dotenv/config";

import { TABLES } from "./tables/index.mjs";

const { Pool } = pkg;

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

// async/await - check out a client
(async () => {
  const client = await pool.connect();
  try {
    await Promise.all(
      TABLES.map((table) => {
        client.query(table);
      })
    );
    console.log("Database successfully created");
  } finally {
    // Make sure to release the client before any error handling,
    // just in case the error handling itself throws an error.
    await client.release();
  }
})().catch((err) => console.log(err.stack));
