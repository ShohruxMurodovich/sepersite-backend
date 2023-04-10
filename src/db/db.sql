CREATE DATABASE supersite;

CREATE TABLE estimate(
  id serial not null PRIMARY KEY,
  name varchar(64) not null,
  number int not null,
  email varchar(128) not null,
  location varchar(128) not null,
  message varchar(256) not null
);

INSERT INTO estimate(name, number, email, location, message) VALUES('shohrux', 931055049, 'murodovichshohruh04@gmail.com', 'kichik mirobod 59', 'egreoirgjeiorjgejig');