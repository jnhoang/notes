[LINK](https://engineering.procore.com/the-observability-mindset-why-it-matters/)

Observability is all about service reliability so that we can provide the utmost customer experience. Ultimately, all roads lead back to the customer and their experience with the product.  Procore is committed to the customer experience and to empowering Engineering teams to accomplish our mission of connecting everyone in construction on a global platform. As Procore continues to adopt distributed systems, microservices, and the next big thing, error resolution becomes increasingly tricky as best practices based on centralized architectures and monolithic applications become antiquated. SLOs are the tip of the Observability iceberg; they publish a service’s operational goal and provide a platform to measure its performance in a customer-centric way.

Reliability boils down to *consistent service performance and meeting established objectives*. Slow response or render times are fine if authorized through a public mechanism, for instance, a published SLO. Not everything is an emergency that requires a panic button as long as service owners stand by their SLOs. A service’s reliability is in its SLOs. Binding the SLO to an agreement with repercussions to the service’s owners establishes a service level agreement (SLA).

However, that’s a topic to dig further into in the future. Meanwhile, let's review a path to adopting these initial observability practices.

## How do I Get Started? - Taking the Journey to Observability Mountain
Think about Observability in terms of the software development lifecycle (SDLC). One of the first steps in the SDLC is defining requirements to describe what the product will address—what the product’s intent is, who the customers are, how many customers will need to be supported. From this point, the idea is transformed into a design; prototypes and then mocks are created. A product is then deployed, monitored, and adjustments made. Rinse and repeat.

Mapping this cycle to Observability, the first step to take is defining the expectations and assumptions of a given service. Ask yourself, “what's an acceptable response time,” ”when do we have to be available,” “when is high traffic expected,” “will the team support the service (24/7 on call?)”, etc. Turn this into a brainstorming session. Determine what is going to be important to this service and when a team member needs to be paged (if ever).

**So what** if there were 5+ errors down some code path if it's not disrupting the service and is not actionable. Why bother paging someone about it? Such no-action issues can be addressed during an operational review meeting. Once an idea of what should be expected from a service, define some (rough draft) SLOs.

As the service is deployed and some meaningful metrics are collected (several weeks worth), revisit your SLOs and see if they’re valuable. Check whether the SLO (when tied with alerting) presented an actionable event to the oncall, or whether it broadcasted too often, presented as noise and contributed to alert fatigue? Incident retrospectives are also an excellent time to revisit a service’s SLOs and adjust the calibrations. As a service starts to become a hard dependency for others, confirm if the publicized SLO is setting the correct expectations for down streams and providing support deflection for the team?

The good news is you don’t have to have all the answers up front. Your SLOs don’t have to be perfect from the start. The unsatisfying news is that observability isn’t a one-and-done operation, and you can’t just set it and forget it.

Procore Engineering commits to Observability at the onset of new service creation.  We have a new service creation guide, a checklist of criteria and best practices, to assist teams in creating microservices with built in Observability.

# Self-Guided Questions To Assess your Observability Readiness
I hope that you were able to find some useful information here. I’ll end the discussion with a short take-home quiz to exercise what was discussed in this article and an opportunity to reflect on your service(s).

* How receptive is your company, leadership, and peers to adopting new practices?
* Does your current toolchain already contain Observability features?
* Will there be a budget constraint?
* Can you opt for open source options?
* How does the reliability of your service dependencies affect your service?
* If you have a hard reliance on a service that promises 50% reliability. You can only guarantee a maximum of 50% reliability on your service.
* What does it mean to your customers to be reliable? Get the two perspectives to match and nip any miscommunication in the bud.
* What service level indicators support your definition of reliability?

This article discussed only a tiny portion of the observability thought process because it’s a dense landscape. This is just an introduction piece. Subscribe to get the latest in Procore’s Observability space as the Procore Observability team rolls out their tools.

The concepts my team are working on have generated optimism, eagerness, and enthusiasm from many teams within Engineering.
