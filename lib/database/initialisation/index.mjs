import pkg from "pg";
import { TABLES } from "./tables/index.mjs";

const { Pool } = pkg;

const pool = new Pool({
  user: "username",
  host: "localhost",
  database: "default_database",
  password: "password",
  port: 3211,
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
