# Event tracing for windows
+ build into windows kernell
+ Tools for reading: perfmon, Xperfview
+ Windows 7 and later
+ It's beneficts
  + Reduce debugging time
  + Resolve performance problems
  + Monitor low-resource conditions or failure
  + Identify bottlenecks
  + Consumers receive events in chronological order
  + Can be dynamically enabled/disabled


## CONCEPTS

+ Event Definition. Defines the shape of events
+ Event manifest. Defines the ETW provider and the data in which events are written. Every ETW provider must define its event manifest.
+ ETW provider. The logical entity that raise events and writes them to an ETW session.
+ ETW session.
	+ Accepts and buffers the events that are written b y an ETW provider.
	+ Deliver the events in real-time to consumer applications
+ ETW controller
  + Defines the size and location of the ETW log file
  + Starts and stops ETW sessions
  + Enables provider so that they can log events to ETW sessions
  + Manages the size of the buffer pool
  + Obtain execution statatistics for ETW sessions
+ ETW consumers
+ Event levels
  + 0x5 - Verbose
  + 0x4 - Informational
  + 0x3 - Warning
  + 0x2 - Error
  + 0x1 - Critical
  + 0x0 - LogAlways

## Implementation in C#
+ System.Diagnostics.Tracing.EventSource
+ What do you need to log, When and where

# SLAB
+ Uses ETW but do not require to Know about
+ Comes with build ink sinks like
  + Azure tables, SQL database, Elasticsearch, flat file, ...
  + Formaters: JSON, XML, plain text
+ Out of process service
  + Hosted as windows service or console
  + All sinks supported
  + Increase fault tolerance
  + Monitored app's does not reference SLAB
  + Can monitor multiple process from a single service
  + Moves The logging overhead to a separate process
  + Can be run in a unit test
  + Will verify correctness of events
  + Based on observable

## links
http://www.dcl.hpi.uni-potsdam.de/teaching/profSem/etw.pdf 
http://blogs.msdn.com/b/vancem/archive/2012/07/09/logging-your-own-etw-events-in-c-system-diagnostics-tracing-eventsource.aspx