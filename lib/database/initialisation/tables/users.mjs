export const USERS = `CREATE TABLE IF NOT EXISTS users (
   id  SERIAL,
   username varchar(255) NOT NULL,
   password varchar(255) NOT NULL,
   PRIMARY KEY(id)
);`;
