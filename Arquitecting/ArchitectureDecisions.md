# Architecture & decisions

## Cache and session storage
+ Inproc
	+ Advantages: faster.
	+ Disadvantages: 
	  + Does not scale easily (node affinity).
	  + Does not offer good reliability. A node failure becames session lost.
	  + Each of the nodes have it's own cache. They do not benefit from others caching.
+ Out of proc
  + Persistent
    + Disadvantages
      + The slowest alternative. It involves network and disk I/O
    + Advantages. 
      + The state can be recovered even in case of the overall system failure
  + Volatil
    + Disadvantages
      + Slower than the inProc alternative. It involves network
    + Advantages. 
      + The system is able to scale horizontal and vertical.
      + Can  offer very good reliability
      + Tha cache/Session can be shared across multiple nodes
    + Implementations
      + [memchached](http://memcached.org/)
      + [Redis](http://redis.io/)

## Tracing
+ options
  + Any lib out there: lo4net, 
	+ Diagnostics namespace.
	+ ETW (only for windows)
  	+ SLAB
+ Independiently of the selected option the log sooner or later should be sent to a central location where it can be treated and analized. For my point of view the right approach is:
  + Send it to a broker: [kafka](http://kafka.apache.org/), [RabbitMQ](https://www.rabbitmq.com/)
  + Have a process listening to messages on a given feed [Storm](https://storm.apache.org/), [sparks](http://spark.apache.org/), custom service
  + Save the procesed messages in a ready to query storage: [SolR](http://lucene.apache.org/solr/), [ElasticSearch](https://www.elastic.co/)
+ Other decision is how to write the log trace in code. two optiones
  + Aspect. 
  	+ [Postsharp](http://doc.postsharp.net/logging)
  	+ IoC:
  	  + [unity](https://msdn.microsoft.com/en-us/magazine/gg490353.aspx)
  	  + [Lightinject](http://www.lightinject.net/)
  	  + [simpleinjector](https://simpleinjector.readthedocs.org/en/latest/advanced.html?highlight=aspects#interception)

## IOC
+ A IOC must be choosen

## Validation
+ Options
	+ [Contracts](https://msdn.microsoft.com/en-us/library/dd264808(v=vs.110).aspx)
	+ [Guards](https://en.wikipedia.org/wiki/Guard_(computer_science))
	+ [Annotations](https://msdn.microsoft.com/es-es/library/system.componentmodel.dataannotations(v=vs.110).aspx)


## Configuration
+ Options for locate it in code
  + DI.
  + Service locator.
+ Persitence options
  + Local file
    + Use the web.config and the System.configuration.configurationManager
    + Use custom files for example .json and load them by
	    + File.Read
	    + Deserialize NewtonSoft.Json.JsonConverter.Deserializa<confClass>(str) 
  + Global mechanism like a database, distributed configuration cluster like [zookeper](https://zookeeper.apache.org/)

## Internationalization
## Code quality
+ What are we going to check? Sintax/complex rules/ciclomatic complexity.
+ Which are our aceptation rules?
+ where are we going to apply in the application life cicle?

## Code Documentation

## Testing
+ Unit tests
+ Integration Tests
+ E2E tests
+ Stress tests

## Project management
+ Documentation
	+ Disk Directory
	+ Code repository
	+ CMS like sharepoint, wordpress


## DDD
+ CQRS style:
  + Command Pattern
  + Query pattern: graphQL, OData.
+ Layers
  + Infraestructure. 
    + Responsability: Provide with the real implementations which needs external dependencies.
  + API
    + Responsability: Provides a way to interact with the domain.
  + Domain
    + Responsability: Defines all the business processes and rules.
  + Core
    + Responsability: Defines the building blocks of not specific domain. ex: IBinarySerializer, IAggregateRoot, IIdentity, IFrezable, ...




