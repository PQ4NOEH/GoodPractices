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
+ contracts
  + Part of WCF explicitness
  + Two types
    + Data contracts
      + request data
      + response data
    + Services
    
##Hosting
+ The listner
+ Two types
  +  Web hosting
    +  From .asmx days
    +  Requires IIS
    +  Does not require any specific code
    +  Limited to HTTP unless you use WAS
  +  Self hosting
    + Any kind of application
    + Requires code  

##Web hosting
+ hosting handled by IIS
+ Limited to HTTP (without WAS)
+ Used to require .svc file

##WAS
+ Does not work with IIS express

##Proxies, channels & clients
+ consumming wcf complex
  + pipe establishment
  + Handshaking
  + security exchange
  + message transmision
+ Client needs Data & service contracts
+ One proxie per service
+ proxy methods use "channel" property from ClientBase<T>
+ client
  1. generate a proxy. Two options:
    + Generate a proxy  
      + If there is one endpoint for the service does not need Ctor.
      + If there is more than one endpoint it needs a Ctor two options:
        + endpoint name.
        + endpoint binding and address.
    + ChannelFactory
  2.- Instanciate proxy an do call as they were local calls. 
  3.- Contract equivalence. Diferent binaries in the service and client. 
    + Contracts names and member-operation names must be the same./use Name property of attribute to change.
    + Contract namespaces must match / use Contract Namespace attribute (I can optionally use asembly.info)
    + Version tolerant.
      + DataContractSerializer
      + It allows some diferences
      + IExtensibleDataObject

#In process services and threading
+ Typically uses IPC binding
+ Client and service use the same contract
+ Can either use a proxy class or a channel proxy
+ [serviceBehavior(UseSincronizationContext=false)] forces the service to run on it's own workerProcess
+ to execute the code which runs on the background but needs to update the UI it uses SyncronizationContext and SendOrPostCallback


