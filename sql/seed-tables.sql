\c mrcoffee;
INSERT INTO
  users(firstname, lastname, email, password)
VALUES
  ('Juan', 'Mellizo', 'juacarlos@gmail.com', 'fdhjkdffsbmdbfsh'),
  ('Tony', 'Smith', 'tonysmith@gmail.com', 'fdhjskfhdssjdk'),
  ('Jane', 'Doe', 'jane@doe.com', 'fdhjkfdshfsdkj');

INSERT INTO
  schedules(id_user, day, start_time, end_time)
VALUES
  (3, 2, '2021-06-22 19:10:25-07', '2021-06-22 21:10:25-07'),
  (3, 1, '2021-06-22 15:10:25-07', '2021-06-22 18:10:25-07'),
  (1, 5, '2021-06-22 12:10:25-07', '2021-06-22 21:10:25-07');