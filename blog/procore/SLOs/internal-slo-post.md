```NOTE - For all terminology, the author refers to the```


## What is the Observability teams stance on SLA vs SLO?

The Observability team is following the SLA and SLO standards defined in the book Implementing Service Level Objective ([The SLO Book — Alex Hidalgo](https://www.alex-hidalgo.com/the-slo-book)).
By the books definition, SLAs are legal binding agreements between customer and service provider. If an SLA is violated there could be legal or financial repercussions. SLA definitions and discussions should be taken up with legal partners that ensure we are providing the legally required performance for our customers.
SLOs are the objectives we set so that we do not violate SLAs. More on SLOs below.

## What are Service Level Objectives (SLO)?
SLO’s (from Observability) utilize the concepts of monitoring and metrics and asserts a target performance based on metrics. An example SLO can say, “Given some monitoring metric/indicator (error, latency, etc), I will aim to provide the service at some level of percentile (99% each week ~= 1.68 hours downtime a week) during business hours (8am to 5pm PT).” That was a mouthful, so let’s break that down with an example without the noise:
99 percent of requests to our service will be responded to with the correct data within 500ms during the hours of 8am to 5pm PT.
What makes this a good SLO? It’s easy to read and understand - you can hand this SLO to a developer, CSR, customer, or leadership and it’s easy to intuit exactly what the expected behavior of this service objective is. Also, note that there are multiple [service level indicators](#TODO) (SLI) that inform the SLO. There’s a clear definition of when this SLO is in effect and will count towards the [error budget](#TODO), a more advanced topic of observability.

**MATH WARNING**
Where did 1.68  hours come from? Here’s the formula to calculate service uptime in minutes given a percentage: (1 - <percentage>) x <num_hours_in_a_day> x <num_mins_in_an_hour>. Here is the calculation for the proposed weekly downtime allowance at the start of this section.
(1 - 0.99) x 24hrs x 60mins = 14.4 mins x 7 days = 100.8mins = 1hr 45mins ~= 1.68hrs

## Considering Service Level Indicators (SLI)
Whoa, that term “SLI” was suddenly thrown into the mix, what even is that!? At a high level, consider SLIs as the same thing as a metric, think of them as a key measurement of the system. Contextualize SLIs as a measurement (let's use throughput), they’re computed by percentiles, where 0% is no requests getting through and 100% as all requests are getting through 5-by-5 (perfect).
What’s the Difference Between Observability and Monitoring?

**NOTE** - Section Primer ([Known Knowns of the Unknown Unknown](https://medium.com/@andreamantovani/known-knowns-known-unknowns-unknown-unknowns-leadership-367f346b0953), 3 min read)
People know Monitoring - it’s that Application Performance Monitoring (APM), metrics, data aggregations, etc. It’s also that noisy stuff that causes alarms to go off every so often (and maybe even be ignored). It alerts teams that there is a problem somewhere (hopefully before a customer notices) and reduces the incident’s mean time to resolution. Observability came to prominence on the heels of Monitoring as distributed systems started to overtake the monolith pattern as it was no longer intuitive and started to become guesswork as tracking errors spanned across service boundaries, environments, and spacetime of modern distributed microservices.
To simplify, Monitoring communicates that something is wrong. Through a regular collection of metrics via tools like NewRelic, Datadog, and Sumologic; alarms are raised when values fall below a threshold for a given metric. To reiterate the problem with the Monitoring approach - within the micro-service architecture, it’s difficult to track down an error when requests traverse multiple (ephemeral services). Monitoring tends to answer known unknowns, or the questions owners have prepared themselves to answer. I have been in a situation where I find myself thinking, "If I just had this logline, I'd know what the answer is. I'll add a log to that line so that the next time a problem occurs, I'll be positioned to get my answer." But that means the problem can't be dealt with now, and instead be entered as a ticket into the backlog.
On the other side of the coin, Observability aims to address the *unknown unknowns* - Those questions that service owners didn’t prepare or realize they’d want to ask of their systems. By casting a wide net on log collection, Observability seeks to dial down the opacity and provide insight that enables on-the-spot debug queries against a service.

## The Observability Mindset - Why We Think it Matters
It’s all about service reliability to provide the utmost customer experience. Ultimately all roads lead back to the customer and their experience with the product and its constituents. As the industry continues to adopt distributed systems, micro-services, and whatever the next big thing is; error resolution becomes increasingly difficult with best practices based on centralized architectures and monolithic applications. SLOs are the tip of the Observability iceberg; they publish a service's operational goal and provide a platform to measure the service’s performance in a customer-centric way.

## How do I get Started - Taking the Journey to Observability Mountain
Think about Observability in terms of the software development lifecycle (SDLC). One of the first steps in the SDLC is planning and defining requirements to describe what the product will address - what is the product’s intent, who are the customers, how many customers will need to be supported. From this point the idea is transformed into a design, ideas are prototyped, and mocks are created. A product is then deployed, observed, and adjustments made. Rinse and repeat.
Mapping this cycle to observability, the first step to take is defining assumptions and expectations of a given service - what's an acceptable response time, availability, when traffic is expected, when the team will support the service (24/7 on-call?), etc. Turn this into a brainstorming session and determine what is going to be important to this service and when a team member gets paged (if ever). So What if there were 5+ errors down some code path, if it's not disrupting the service and not actionable why bother paging someone about it, address it during an operational review meeting. Once an idea forms of what should be expected from a service, define some (rough draft) SLOs.
As the service is deployed and some meaningful metrics are collected (several weeks worth) revisit your SLOs and see if they’re valuable - did the SLO (when tied with alerting) present an actionable event to the on-call or did it broadcast too often and present as noise? Incident retros are also an excellent time to revisit a service SLO and adjust the calibrations. As your service starts to become a hard dependency for others, are your SLOs setting the correct expectations for your down streams or providing support deflection?
The good news is you don’t have to have all the answers upfront and be perfect from the start. The unsatisfying news is that observability isn’t a one-and-done operation and it’s not intended to be set and forget.

## Self-Guided Questions About Your Service Reliability
I hope dear reader that you were able to extract some useful information from this article. I'll end the discussion with a short take-home quiz to exercise what was discussed in this article and an opportunity to reflect on your service(s).
* What are your hard dependencies?
    * These can be 3rd party services like authentication or infrastructure services such as AWS Dynamo, RDS, SQS, etc.
* Can the [hard dependencies](#TODO) be converted to [soft dependencies](#TODO)? In the event they are unavailable, you'll limit the impact on your service.
* How does the reliability of your service dependencies affect your service?
  * If you have a hard reliance on a service that promises 50% reliability. You can only guarantee a max of 50% reliability on your service.
* Who are your customers
  * external - (GCs, Business Owners).
  * internal - (teams who rely on your service).
  * operations - (teams such as customer support, CPE).
* What does it mean to your customers to be reliable?
  * what indicators support the definition of reliability.

