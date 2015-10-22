# The Log
[ref article](https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying)

+ Also called
  + Write-ahead logs
  + commit logs
  + transaction logs
+ It is an append-only totally-ordered sequence of records oredered by time
+ Records are appended to the the end 
+ Reads proceed left-to-right
+ Each entry is assigned a unique sequencial log entry number
+ They solve two problems
  + Ordering changes
  + Distributing data
+ State machine replication principle: "If two identical, deterministic processes begin in the same state and get the same inputs in the same order, they will produce the same output and end in the same state"
+ In databases culture they differeciate the logs in two categories:
  + Logical log: The commands that lead to the change.
  + Physical log: The contents of each row which has changed.
+ State machine model => active-active model Where we keep a log of the inconmming requests and each replica processes each request
+ Primary-backup model => One replica is the leader and the rest apply in order the state changes so they will be in Sync and ready to take over as leader
+ consensus
  + paxos
  + multi-paxos
  + ZAB
  + RAFT
  + Viewstamped replication

# PART TWO DATA INTEGRATION
+ Definition: Making all the data an organization has available in all its services and systems.
+ hirarchy of needs:
  1. Capturing relevant data
  2. Put the data in an applicable processing environment
  3. Model the data
  4. Reporting, transform, analitics,...
+ Two Complications
  +  The event data firehose. Event data records things that happends rather than things that are. 
  +  The explosion of specialized data systems 
+ Solution. Log-structured data flow: "Take all the organization's data and put it into a central log for real-time subscription"
+ pub-sub beneficts
  + A subscriber may crash without affecting the overall system
  + Each subscriber consumes at its own rate
  + Subscribers may be added or removed without affecting the system
  + The subscriber only knows about the log nothing about the producer/s
+ log systems vs pub-sub or messaging system
  + More specific term. Pub-sub onnly refers to inderecting addresing of messages
  + Acts a kind of messaging system
  + Guarantees durability
  + Strong ordering semantics
+ Log system is the infrastructure but there are many more elements into play:
  + Metadata
  + Schemas
  + Compability
  + Event evolution

# Relationship to ETL and the Data Warehouse
+ ETL is two things:
  + It is an extraction and data cleanup process.
  + Data restructuration for data warehousing queries.

# Log files and events

# Logs & real-time Stream processing