INSERT INTO
  users(firstname, lastname, email, password)
VALUES
  ('Juan', 'Mellizo', 'juacarlos@gmail.com', '$2a$10$zStmwMUwTQBEBW2bI2cC5e5hiShTpXgdsGEKU4kHrhd0o1a/HAlay'),
  ('Tony', 'Smith', 'tonysmith@gmail.com', '$2a$10$zStmwMUwTQBEBW2bI2cC5e5hiShTpXgdsGEKU4kHrhd0o1a/HAlay'),
  ('Jane', 'Doe', 'jane@doe.com', '$2a$10$zStmwMUwTQBEBW2bI2cC5e5hiShTpXgdsGEKU4kHrhd0o1a/HAlay');

INSERT INTO
  schedules(id_user, day, start_time, end_time)
VALUES
  (3, 2, '13:00:00', '14:00:00'),
  (3, 1, '14:00:00', '15:00:00'),
  (1, 5, '15:00:00', '16:00:00');