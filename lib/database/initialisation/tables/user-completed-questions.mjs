export const USER__COMPLETED_QUESTIONS = `CREATE TABLE IF NOT EXISTS user_completed_questions (
    id SERIAL,
    user_id int,
    question_id int,
    completed boolean,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(question_id) REFERENCES questions(id)
);`;
