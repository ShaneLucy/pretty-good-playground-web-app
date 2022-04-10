export const QUESTIONS = `CREATE TABLE IF NOT EXISTS questions (
    id SERIAL,
    name varchar(255) NOT NULL,
    answer varchar(255) NOT NULL,
    PRIMARY KEY(id)
);`;
