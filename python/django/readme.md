from playlist [Python Django tutorial](https://www.youtube.com/watch?v=UmljXZIypDc&list=PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p)

# Handy Django commands
* start a new project: `django-admin startproject <PROJECT_NAME>
* create a new app within a project`python manage.py startapp <APP_NAME>`
* start server: `python manage.py runserver`

* update db: `python manage.py makemigrations`
* apply db updates: `python manage.py migrate`
* create project admin: `python manage.py createsuperuser`


* classes defined in the models.py will need to be migrated (executed/committed to the db) before the project can reference them.
* to view the the sql statement that will be run: `python manage.py sqlmigrate <APPLICATION> <MIGRATION_NUMBER>`
  * i.e python manage.py sqlmigrate blog 0001
  ```
  BEGIN;
  --
  -- Create model Post
  --
  CREATE TABLE "blog_post" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "title" varchar(100) NOT NULL, "content" text NOT NULL, "date_posted" datetime NOT NULL, "author_id" integer NOT NULL REFERENCES "auth_user" ("id") DEFERRABLE INITIALLY DEFERRED);
  CREATE INDEX "blog_post_author_id_dd7a8485" ON "blog_post" ("author_id");
  COMMIT;
  ```
