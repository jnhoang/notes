# Takeaways
Please remember thes things


## Chapter 1 - Professionalism

### Do no harm to function
Remember that you're ultimately responsible to what gets shipped out.
  * be as close to 100% to sure the job is "done"
  * via it be local testing, automated tests, uat-testing, etc.

Worry that the job is done and done correctly - remove yourself, your ego from the equation. If an error/bug occurs on your watch, learn how it went past notice, catalog it as something to lookout for next time.

### Do no harm to structure
Software  is (should be) easy to change. _You must be able to make changes without exorbitant costs._
  * Avoid making inflexible code structures
  * Avoid quickfixes that compromise structure
  * Codebase should be able to handle frequent code changes/ refactorings without worry of compromising functionality
  * _Always check in a module cleaner than when you checked it out_ (random acts of kindness to the code)

### Identify with your Employer/Customer
Understand the problems of the people you work for/under. Adopting the problems as your own gives you skin in the game to _want_ fix a problem.
  * design/develop features with the customer in mind
  * avoid us vs them attitude with stakeholders
  
  
  
## Chapter 2 - Saying No

### Advesarial Roles
Each role is in an organization has an objective, those objectives may clash be it in the form of time constraints, code standards, etc. Be ready to defend your objective. Best outcome is to enact the shared goal of the roles involved.

Via negotiation:
 * dig-in to a request, why does it need to be done by a date, what can be sacrificed in its place, what features might be missing d/t to the timeline.
 * be ready to explain the intricacies of why a task is set for x amount of time.

Via alternatives:
 * if something is required for a demonstration, does it need to be fully featured? Can it be a mockup? 

what are you trying to prevent

### Being a Team Player and Trying
Represent your team legitimately, don't oversell the team's capabilities. Don't sacrifice quality. _The promise to try is an admission that you've been holding back_
Fight back saying yes for appeasement and be true to yourself.



## Chapter 3 - Saying Yes

### Use language of commitment - Say. Mean. Do.
1. say you'll do it.
2. You mean it.
3. You actually do it.

Ways to commit:
* set a time expectation
* commit to actions that cut through dependencies
  * set a meeting time with dependencies to address an issue
  * set recurring times if needed to get unblocked
  * mock or setup copy of the service to continue your work
* if ability to do something is unsure, commit to actions closer to the target
  * if unable to fix x bugs, try to repro them and take notes

Avoid language of ambiguity.
Such as:
* "hope/wish to get to it"
* "I agree that should/needs be done"
* "let's do this some time"

### Define ambiguous language
* I think I can get that done
  * by what date
  * can you commit to the date that you provide
* I will have x done
  * will that include tests, documentation, etc

### Chapter 4 - Coding

Code must:
1. work
2. solve the problem set by the customer
3. fit well into the existing solution - should not be fragile, opaque
4. be readable by other programmers - clear intent


It's better to code in the right frame of mind. 
Avoid: 
* coding tired
* coding distracted by some other issue

Debugging definitely counts to coding time. Consider them the same and debug with intent.















