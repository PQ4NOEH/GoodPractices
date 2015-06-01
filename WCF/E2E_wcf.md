#WCF E2E
##Service Orientation
+ SOA: 
  + La descomposición de un sistema en unidades de responsabilidad autónoma y la exposición de esas unidades de manera controlada y segura
  + La exposición de un API
+ Service: coleccion de operaciones

##SOA vss OOP
+ OOP. 
  + Objects contain state and behavior
  + Objects may be persisted in memory long time
  + Clients has direct access
  + Object has to be physically deployed to every client.
+ SOA. It's all about the call
  + Clients make the call with all the data needed to perform the operation
  + Calls are in and out (usually assumed stateless)

##Service oriented technologies
+ .NET remoting
  + Only .NET to .NET
  + TCP compatible 
+ Web services
  + HTTP only
+ Enterprise services
+ MSMQ
+ Sockets
+ WCF
  + Unified model.
  + SOAP based but REST capable.
  + Abstract the details of comunication.
  + Provides a declarative and aspect-oriented approach for manage transversing characterics
    + Transactions
    + Reliability
    + State
    + Security
    + Instatiation
    + ...

##WCF architecture
+ pipeline architecture
  + client
    + Proxy
    + Channel
    + Channel
    + Transport Protocol
  + service
    + Transport protocol
    + Channel
    + Channel
    + Dispatcher
    + Service 

##WCF vs web API
+ They are different technologies.
+ WFC is ritcher, web API more interoperable.
+ WCF based on SOAP, WebApi based on rest.
+ WCF requires tooling, web API the ability to make HTTP request.
+ WCF binding choices makes it faster on firewalls.

##WCF Components
+ It is very explicit
+ Contract based
+ Uses
  + Data contracts
  + Service contracts
  + Services
  + Hosts
  + Client proxies
  + Configuration

##When to use WCF

##Contracts and services

