# The Structure and Intepretation of Computer Programs (SCIP)


# [Intro](https://www.youtube.com/watch?v=FIUJd_ZFmGo)
## Describing Processes
* syntax      - rules for writing compound expressions
* semantics   - rules for assigning meaning to constructs
* procedures  - rules for captuing process of evaluation


## Key Ideas
* Management of Complexity
  - procedure and data abstraction
  - conventional interfaces & programming paradigms
    * manifest typing
    * streams
    * OOP
  - metalinguistic abstraction
    * creating separate languages to eval a problem
    * scheme evaluator(s)
    * compilation - manipulation of programs


# Lesson 2: Schema Basics
## Language for Class(Scheme)
* `define`    = variable
* `procedure` = function
  - (lambda (x) (* x x))
* `predicate` = bool
  * if true - resulting action is called a consequent
  * if false - resulting action is called a alternative
  - (if (predicate) consequent alternative )
  - (if (= 4 4) 2 3)
  -  if true, 2 else 3


# Lesson 3: Procedures and Procceses
* [link](https://www.youtube.com/watch?v=Yj1fm4PVQPM&list=PL7BcsI5ueSNFPCEisbaoQ0kXIDX9rR5FF&index=3)
## Substitution model
* substitution model - a methodology to evaluate expressions
  * "allows a reader to trace out the evolution of an expression's evaluation, reducing application of a procedure to the evaluation of a simpler expression"
* order of operations is important (sub-expressions are evaluated first in a compound procedure)


## iterative vs recursive solutions
### iterative approach
* have constant **space**
* how to develop an iterative approach
  - figure out a way to accumulate partial answers
    1. write out a table to analyze:
        - how to initialize the 1st row
        - rules to update the other rows
        - how to know when to stop
    2. translate rules into a scheme

### recursive approach
* how to develop a recursive approach
  1. assume the desired procedure (approach) exists
      - solve a smaller version of the problem
  2. decompose the problem
      - solve a smaller instance of the problem
      - convert that solution to the desired solution
        - design the strategy before coding
  3. identify non-decomposable problems
      - defining a base case
      - aka the smallest problems

* general form of a recursive algorithm
  * test for:
    * base case: smallest (non-decomposable) problem
  * recursive case: larger (decomposable) problem



# Lesson 4: Orders of Growth and Kinds of Procedures
* [link](https://www.youtube.com/watch?v=WYWP7CoPCFg&list=PL7BcsI5ueSNFPCEisbaoQ0kXIDX9rR5FF&index=4)

* space complexity
  - how much space is required to solve a problem
* time complexity
  - how much time is required to solve a problem
  - measured in terms of the size of the procedure, _n_

* constant
  - growth rate remains the same as the size of _n_ increases
* linear
  - growth rate is the same as the size of _n_ increases
* exponential
  - growth rate is greater in proportion to the increase of size _n_
* logarithmic
  - growth rate is lesser in proportion to the increase of size _n_
  - imagine the inverse of exponential growthgit


# Lesson 5: Data Abstraction

## Process of procedural (function) abstraction
* define formal params
* capture process in body of procedure
* give the procedure a name
* hide implementation details from users (who should jut invoke the procedure name)

* cons (short for constructors)
  * returns a PAIR (car, cdr) [value, pointer]
  * it's like a node (value, pointer)


# Lessson 6: Types and Higher Order Procedures

## Types
* a mathematical theory for reasoning efficiently about programs
  * useful for preventing common types of errors

## Higher Order Procedures
* can take procedures as input
* can give procedures as output
