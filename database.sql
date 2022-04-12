create schema api;

create table if not exists api.questions (
    id serial primary key,
    name varchar(255) not null,
    answer varchar(255) not null
);

create table if not exists api.users (
   id  serial primary key,
   username varchar(255) not null unique,
   password varchar(255) not null,
   salt varchar(255) not null
);

create table if not exists api.user_completed_questions (
    id serial primary key,
    user_id int,
    question_id int,
    completed boolean default true,
    foreign key(user_id) references api.users(id),
    foreign key(question_id) references api.questions(id)
);

create role web_anon nologin;

grant usage on schema api to web_anon;
grant select on api.users, api.questions to web_anon;

create role authenticator noinherit login password 'password';
grant web_anon to authenticator;

create role auth_user nologin;
grant auth_user to authenticator;

grant usage on schema api to auth_user;
grant all on api.users to auth_user;
grant select on api.questions to auth_user;
grant select,insert,update on api.user_completed_questions to auth_user;
grant usage, select on sequence api.users_id_seq, api.questions_id_seq, api.user_completed_questions_id_seq to auth_user;
