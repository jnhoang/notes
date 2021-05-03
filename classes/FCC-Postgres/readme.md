

# Commands
```
psql          -  connect to psql (via cli)

\l            -  list of databases
\c DB_NAME    -  connect to any database
\d            -  show tables
\d TABLE_NAME -  show table description

DROP DATABASE <DB_NAME>; - delete a database
  - ie - DROP DATABASE test;
```

# Other
SELECT DISTINCT - removes duplicate rows, unique only

shortcuts - `psql --help`

# Limit / Offset
SELECT * FROM person LIMIT 10; // select only first 10 records

SELECT * FROM PERSON OFFSET 5 LIMIT 5; // starts at row 6 - 10


## `IN`

* keyword, takes an array of values and returns select matching those values
```
SELECT * FROM person WHERE country_of_birth = 'China' OR country_of_birth = 'France OR country_of_birth = 'Brazil';

SELECT * FROM person WHERE country_of_birth IN ('China', 'France', 'Brazil');
```

## `BETWEEN`
* select from a range

```
SELECT * FROM person WHERE date_of_birth BETWEEN DATE '2000-01-01' AND '2015-01-01';
```

## `LIKE`
* match select against a pattern
* `%` - wildcard
* `___@google.com` - single character match. Will match any 3 character @google.com
```
SELECT * FROM person WHERE email LIKE '%.com'; // all emails
SELECT * FROM person WHERE email LIKE 'gmail.com'; // more specific
```


## Backup and Restore
* [source](https://www.postgresql.org/docs/9.1/backup-dump.html)

### backup file
* RUN `pg_dump <DB_NAME> > <OUT_FILE>.sql`

### restore file
* RUN `psql <DB_NAME> < <IN_FILE>.sql`
