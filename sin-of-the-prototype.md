# The Sin of the Prototype 

The single biggest mistake that the builders of prototypes make is to trap the core differentiating
value inside the delivery mechanism.  Instead of encapsulating the real value add into a standalone
library of tools they naively build business rules into the user interface.

Any experienced software engineer worth their salt will scream in horror when they see this pattern.
Executives will sence the problem when they simply say 'we need our web app to support an API' and the
developers want a year to get it done.  Hint: the developers may not be over estimating. They have
just audited the situation and realized that there is a pile of technical debt that needs to be
repaid with interest before the ask can be realized.

The problem is that focus wasn't put onto the core of the value proposition.  Instead the prototype
solution focused on the delivery mechanism and user experience rather than identifying what really
made the product special in the first place.

This is upside down.  Focus must be put on building a portable core of software that can be used by
many different user interfaces.  Be it web, phone app, API, terminal or otherwise.  The core should
not have to change.  The core ***Is Your Value***.  It holds all the important rules, constraints,
business processes and data flows that differentiate your solution from all others.  The Bootstrap
Factory insists on identifying your core value and building solutions that deliver this value
independent of all else.

It may seem like we're saying that the user experience or last mile delivery mechanism isn't
important.  We're not, because of course it's important.  We're saying that those things are not
going to be part of your core.  They are going to be 'delivery mechanisms' that rely on your core.

If you are lucky, your differentiating core idea is going to be 5-10% of the solution required to deliver
value to your users.  The rest is simply the infrastructure needed to deliver the value.

The Bootstrap Factory insists on helping our clients to identify their core differentiating value
add, and then capturing this value into a core library that can be used across platforms and
maintained separately from the delivery mechanism.

## A Classic Horror Story

A client presents us with a sophisticated prototype built on web browser technologies but they now realize
that they need to provide a different delivery mode.  E.g. a web api. The issue that they have
discovered is that their business rules are sprinkled throughout the technologies used to deliver a
browser app instead of being encapsulated into a portable core.

A very typical example is the encoding of business rules into the web user interface widgets.
Imagine that you have some data entry fields that require certain values.  These requirements are
part of your business rules, but they are only captured in the rules of the user interface.

When developers are asked to create an API, they have a problem.  The first is how to identify all
of the rules that are sprinkled throughout the user interface.  The second is how to duplicate these
rules into a new set of functionality.

Experienced engineers will immediately identify that the rules need to be extracted into a core and
the UI needs to be adjusted to use the new core.  But in this scenario there probably aren't any
experienced engineers involved because they wouldn't have let this situation arise in the first
place.

So what happens is that the rules are duplicated into the new solution as best that they can be.
Now you have at least twice the problems you had before.  In practice you end up with far more
because when the rules change in the future they have to be updated in all the places they have been
replicated.  Keep going and this will explode into exponential opportunity for error and failure.

## A Contemporary Horror Story

With the new capability to use AI to build prototypes the problem of engraining business rules into
UI facing technologies is massively compounded.  Prototype builders typically instruct an AI to
build what they want the user to experience.  The AI will happily comply with no regard to the
architectural decisions that a skilled software engineer would consider crucial.

These new generative AI technologies allow extremely sophisticated prototype solutions to be
developed very quickly.  With this rapid development of what appears to be a valid solution is
hidden all of the classic horror stories.  Only you can build more problems far fast that before.

## The Solution - Put Your Money Where Your Value Is

This is the part where the hate-mail is inspired, but that's ok.  BSF5Y is singularly focused on
consulting with our clients on how to realize maximum value on their investment in new solutions.  So we
do not appologize for our cander.

It all starts with a simple fact.  User interfaces are cheap.  Design is cheap. Infrastructure can
be cheap.  But the capture, architecture and development of core solutions should not be.  The reason is
simple.  It takes many years of experience and the witness of many different patterns before an
engineer is capable of designing a solid core for software solutions.

Our approach is to stay narrowly focused on the unique value-add that exists in any given solution
and build a solid core of software to support that solution.  Once this is established any delivery
mechanism imaginable can be built on top of the core without impacting its integrity.  The business
value has been capture in a way that is easily changed and scalable independent of multiple user
interfacing solutions.

Cheap → Valuable ← Cheap
Web UI → Core Library ← Web API 
