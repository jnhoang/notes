-- BACKUP DB IF EXISTS

-- CREATE DB
DROP DATABASE IF EXISTS bjd_db;
CREATE DATABASE bjd_db;

-- table name needs to be lowercase in connect command
\c bjd_db


-- CREATE TABLES
CREATE TABLE company (
  company_id            serial PRIMARY KEY,
  country_of_origin     varchar(50) NOT NULL,
  company_name          varchar(50) NOT NULL,
  alternate_names       varchar(255)[],
  established           date NOT NULL
);

CREATE TABLE sculpt (
  sculpt_id       serial PRIMARY KEY,
  company_id      integer REFERENCES company(company_id),
  sculpt_name     varchar(50) NOT NULL,
  gender          varchar(50) NOT NULL
);

INSERT INTO company (country_of_origin, company_name, alternate_names, established)
Values ('south korea', 'luts',  NULL, '01-01-2000');

INSERT INTO sculpt (company_id, sculpt_name, gender)
Values
  (1, 'delf', 'female'),
  (1, 'senior delf', 'female')
;



--  many:many example code
-- source: https://stackoverflow.com/questions/9789736/how-to-implement-a-many-to-many-relationship-in-postgresql
