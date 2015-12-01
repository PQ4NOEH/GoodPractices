# What it is?
Is a set of constraints for developing software that exist on the network.
Is a set of principles that define how we should use web standards such as HTTP and URIs.
HTTP is an incarnation of the REST style

# Constraints

## Client/server
+ The client allways initiates, the server allways respond.
## Resource principle
+ Identify all resources
+ To Identify use URIs
+ Collections too are resopurces
+ Beneficts of consistent naming scheme
  + It's already created (don't reinvent the wheel)
  + Works at a global scale
  + Understood by almost anybody

## Link things together
+ Hypermedia as the engine of application state.
+ Links may point to any Web resource.
+ Them are extremly useful to make an application dynamic.

## Use standar methods
+ Use defined HTTP methods.
+ Respect the method definition in it's usage.
+ Use idempotence
+ every resource should respond to the same set of methods

## Single resource multiple representations
+ The representation of a resource should be ideally in a standard format.

## Stateless server
+ Server should not have to retain any state between requests. 
	+ scalability
	+ Decoupling

## layered system
## Code on demand
+ Don't hard code clients send code to them (Java Applets, activeX, javascript)
## caching
+ I don't want to hit the origin server every time I make a request

## Uniform interface
+ Every one on the web has to use the same API


# Rest antipatterns
1. Tunneling everything though GET
2. Tunneling everything though POST
3. Ignore caching
4. Ignore response codes
5. Misuse cookies
6. Forgetting hypermedia
7. Ignore MIME types
8. Breaking self-descriptiveness

## Tunneling everything though GET
The problems it arise are:
1. Resources are not identified by URI, rather, URIs are used to encode operations and their parameters.
2. The HTTP method does not necessarily match the semantics.
3. They usally are not mean to be bookmarked.
4. There is a risk that a link-crawler cause unintended side effects.

## Tunneling everything though POST
Same as Last but instead of using GET it uses POST
+ SOAP over HTTP uses this strategy. but soap indicates semantics in the SOAP header
+ It has an two extra problem
  + It can`t use caching.
  + It cant bookmarking.

## Ignore caching
+ ETag mechanism
+ Use a cache built solution

## Ignore HTTP status codes

## Misusing Cookies

## Breaking self-descriptiveness
Every time you invent your own headers, formats or protocols you break the self-descriptiveness of your web API

