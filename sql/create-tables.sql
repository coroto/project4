DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(60) NOT NULL
);

DROP TABLE IF EXISTS schedules;

CREATE TABLE IF NOT EXISTS schedules (
  id SERIAL PRIMARY KEY,
  id_user INTEGER NOT NULL,
  day INTEGER CHECK (day >= 1 AND day <= 7),
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,

  CONSTRAINT fk_user
    FOREIGN KEY(id_user)
    REFERENCES users(id)
    ON DELETE CASCADE
);