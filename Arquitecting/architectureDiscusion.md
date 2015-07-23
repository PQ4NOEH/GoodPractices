# Architecture discusion
General links
+ [Architecture styles Microsoft](https://msdn.microsoft.com/en-us/library/ee658117.aspx) 

## DDD 93

### Concepts
+ Domain model. It's the idea of the domain a diagram try to convey
+ Ubiquitous language
+ Transition to code
  + Analisys model. It is about doing and analisys on how to adapt the ubiquitous language to code without coding. Has some problems:
    + At the end the developers would have to adapt it.
    + It does no deal with real coding problems.
    + The generated models are abondened when coding starts.
  + coders
+ Services
  + Objects without state
  + Provides functionality to the domain
  + It performs a domain concept which does not naturally belong to an entity or value Object
  + The operations performed refers to other objects in the domain
  + The operation is stateles
+ Value Objects.
  + Objects without an identity
  + Inmutable.
+ Entities. 
  + Domain objects which have identity
  + Mutable
+ Repository
+ Aggregate
  + A domain pattern to help on setting code boundaries and object ownership
  + Has an aggregateRoot which is an entity.
  + It only exposes to the outside the aggregateRoot
+ Factories
+ Module
+ Layers
  + User interface
  + Application. Coordinates application activity
  + Domain. Domain implementation
  + Infraestructure. Supporting library for each other
+ Integration strategies
  + Anticoruption layer. The consumer porotects himself with and abstraction/adaptation layer (mostly on interaction with leagcy systems)
  + Separate Ways. Each creates it's own model
  + Open host service --> Published language
  + Conformist. Like shared kernel but customer can't do changes to shared code
  + Customer/suplier. One team depends on the other.
  + Shared kernel. Share the code between two teams

### Links
+ https://www.youtube.com/watch?v=QQdRRltJk2g
+ http://es.slideshare.net/PascalLaurin/implementing-ddd-with-c
+	http://www.developerfusion.com/article/9794/domain-driven-design-a-step-by-step-guide-part-1/ 
+	http://www.infoq.com/minibooks/domain-driven-design-quickly 

## CLEAN ARCHITECTURE
### Links
+	http://blog.8thlight.com/uncle-bob/2011/11/22/Clean-Architecture.html 
+	http://www.infoq.com/news/2013/07/architecture_intent_frameworks

## ONION ARCHITECTURE
### Links
+ https://www.develop.com/onionarchitecture 
+	http://www.codeproject.com/Articles/808400/Onion-Architecture-in-ASP-Net-MVC 
+	http://jeffreypalermo.com/blog/the-onion-architecture-part-1/ 
+	http://stackoverflow.com/search?q=user:1660523+[onion-architecture] 

## HEXAGONAL ARCHITECTURE
### Links
+ http://www.infoq.com/news/2014/10/exploring-hexagonal-architecture