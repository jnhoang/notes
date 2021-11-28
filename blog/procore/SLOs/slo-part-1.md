[LINK](https://engineering.procore.com/observability-basics/)
Microservice environments require significant coordination, insight, and care to be able to monitor and measure requests passing through the system. As Procore continues to scale its microservice architecture, its Engineering teams are expanding their observability capabilities.  In this article, the first of a series, I will share how we have evolved our understanding of Observability.

The goal of Observability is to answer questions you didn't know you had.

For example, have you ever been on call and seen that one of your services is not performing as expected? If only you had the right logs in place, you could use them for troubleshooting! What if you could query your logs on the fly? What if you could create dynamic questions and just ask your system? No more hoping the log is there, no more adding logs and redeploying, no more waiting for the next instance to hopefully give you the answers or help you resolve the issue.

In recent years, Observability has grown to undertake the modern complex service architectures of cloud-native, distributed, and containerized applications as well as their distributed stack traces. Let's jump into the basics and talk SLOs.

## What are Service Level Objectives (SLOs)?
[SLOs](https://en.wikipedia.org/wiki/Service-level_objective) are commitments that utilize concepts from monitoring and assert a target performance based on metrics. A good SLO is presented in simple terms that anyone can grok without understanding the underlying metrics or their collection method.

For instance, an SLO can say, “Given some monitoring metric/indicator (error, latency, etc.), I will aim to provide the service at some percentage (99% each week ~= 1.68 hours downtime a week) during business hours (8 am to 5 pm PT).”

Phew! What a mouthful. Let’s break that down using an example:

99 percent of requests to this service will be responded to with the correct data within 500ms during the hours of 8 am to 5 pm PT.

What makes this a good SLO? Well, it’s easy to read and understand—you can hand this SLO to a developer, customer service representative, customer, or leadership, and it’s easy to intuit exactly what the expected behavior of this service objective is. There’s a clear definition of when this SLO is in effect and will count towards the service's error budget, something that will be discussed in detail in a future article. Also, note that there are multiple [service level indicators](https://en.wikipedia.org/wiki/Service_level_indicator) (SLIs) that inform the SLO.

Here’s the Math!

Where did 1.68 hours come from? Here’s the formula to calculate service uptime in minutes given a percentage:

**(1 - <percentage>) x <num_hours_a_day> x <num_mins_an_hour>**

Here is the calculation for the proposed weekly downtime allowance at the start of this section.

**(1 - 0.99) x 24hrs x 60mins = 14.4 mins x 7 days ~= 1.68hrs**

## Considering Service Level Indicators
Whoa, that term “SLI” was suddenly thrown into the mix, what even is that!?

At a high level, an SLI is a metric—throughput, error rate, response time, etc. Contextualize SLIs as a measurement (let’s use throughput). They can be computed by percentiles, where 0% is no requests getting through and 100% as all requests are getting through 5-by-5 (perfect).

## What’s the Difference Between Observability and Monitoring?
People know Monitoring—it’s Application Performance Monitoring (APM) tools, metrics, data aggregations, etc. It’s also that noisy stuff that causes alarms to go off every so often (and maybe even be ignored). Monitoring is used to alert teams that there is a problem somewhere (hopefully before a customer notices) and is meant to reduce an incident's mean time to resolution.

Observability came to prominence on the heels of Monitoring—distributed systems started to overtake the monolith pattern as it was no longer intuitive and started to become guesswork: Tracking errors spanned across service boundaries and environments of modern distributed microservices.

To simplify, Monitoring communicates that something is wrong. Through a regular collection of metrics via tools like NewRelic, Datadog, Sumologic, and others, alarms are raised when metrics hit a certain condition, such as response times that cross the upper threshold.

To reiterate an issue with the Monitoring approach with modern stacks—it’s difficult to track down an error within the microservice architecture when requests traverse multiple (and often ephemeral) services. Monitoring tends to answer known unknowns or the questions owners have prepared themselves to answer.

I have been in a situation where I find myself thinking, "If I just had this logline, I'd know what the answer is. I'll add a log to that line so that the next time this problem occurs, I'll get my answer." However, that means the problem can't be dealt with now. Instead, it’ll be entered as a ticket into the backlog.

On the other side, Observability aims to address the unknown unknowns—The questions that service owners haven’t prepared or haven’t even realized they’d want answered. By casting a wide net on log collection, Observability seeks to dial down the opacity and provide insight that enables on-the-spot debug queries against a service.

We’ll tackle those in our next article.
