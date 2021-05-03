#Link Board - Part 1

We are going to create a clone of [Hacker News](https://news.ycombinator.com/). Hacker news is a reddit-style link board that allows users to post links which are upvoted by other users so the best links rise to the top.

For part 1, we're going focus on `Users` and `Posts` only. The goal for is to create an app that allows users to sign up, login, and add posts. In part 2, we'll work on adding additional components.

##Getting Started

* Fork and clone this repo
* Create a Rails app

##Requirements

###Suggested Models

####User
* email
* password_digest
* name

####Post
* title
* link
* user (created using user:references)


###Suggested Routes

####Auth

| Verb | Route | Action | Purpose |
|------|-------|------------|--------|---|
| GET | /signup | users#new | render user sign up form | 
| POST | /signup | users#create | create user in database (signup) | 
| GET | /login | sessions#new | render user log in form |
| POST | /login | sessions#create | create user session (login) |
| DELETE | /logout | sessions#destroy | destroy user session (logout) |

####Post

Create basic CRUD routes (see RESTful routing table if needed). Rails can do this for you using `resources` in routes.rb.

| Verb | Route | Action | Purpose |
|------|-------|------------|--------|---|
| GET | / | posts#index | render list of all posts | 
| GET | /posts/new | posts#new | render add post form | 
| POST | /posts | posts#create | create post in database (associated to logged in user) | 

**Note:** We're using the root for `posts#index` because (just like hacker news) we want to list all posts on the home page.

###Suggested Validations

* post.title
  * required
  * should be between 10 and 100 chars
* post.link
  * required
  * should be a valid url
* user.email
  * required
  * valid email
  * unique
* user.name
  * required
  * less than 20 chars

###Suggested Development Process

####Setup basic Rails app / repo

* Fork and clone this repo
* create a new Rails app `rails new ./ -T -d postgresql`
* create your database `rake db:create`
* test `rails s` go to localhost:3000 in browser

####Setup user / authentication

* Create `User` model
* add `has_secure_password` and validations
* enable bcrypt gem in Gemfile
* migrate `rake db:migrate`
* test using `rails c` (User.all, User.create, etc)
* Test validations by violating them and adjust if needed
* Create authentication routes / controller / actions / views
* Test that you can signup and log in / out

####Setup posts

* Create `Post` model
* add validations
* add associations
* migrate `rake db:migrate`
* test `rails c` (Post.all, Post.create, etc)
  * Test validations (by violating them)
  * Test associations (by adding a post owned by a user)
  * Adjust as needed
* Create crud routes / views / actions for `Post`

####Testing Models

After creating your models it's generally a good idea to test them out to make sure they're working as expected (before creating controllers / views)

**Testing User Model**

```ruby
User.all
#should give us an empty array

User.create(email: 'blah@blah.com', name: 'a name', password: 'qwertyuiop')
#should create a user

User.all
#should list our newly created user - password should be hashed
```

**Testing valdations**

```ruby
User.create 
#no parameters should fail validation

User.create email: 'blah@blah.com', name: 'a name', password: 'qwertyuiop'
#duplicate e-mail should fail
```

**Testing Associations**

```ruby
User.last
#returns the last user we created

User.last.posts
#empty array

User.last.posts.create(title:'my post title', link:'http://www.google.com')
#should create a post associated with a user

Post.last
#should list our newly created post

User.last.posts
#should show our newly created post (that belongs to the user)
```



---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
