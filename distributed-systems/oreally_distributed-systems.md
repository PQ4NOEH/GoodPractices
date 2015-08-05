# [Distributed systems in one coffe-cup](https://www.safaribooksonline.com/library/view/distributed-systems-in/9781491924914/)

## Intro
A distributed system is a bunch of computers that appear to it's users as a single computer. It also has three main characteristics:
+ Computers operate concurrently
+ Computers fail independently
+ The computers do not share any global clock. It's activity is asynchronous to each other.

The fact with distributed systems is that they are hard to mantein and complex to do. If you can live without a distributed system you better do. 

## Distributed Storage
### Read replication
The strategy here is to replicate the data so you have one copy of the data for updates and you have other copies that allow you reading the data. This strategy only has sense in systems where you have more reads than updates. It's said that in most systems there is a proportion of a 80% of data reads and a 20% of data updates.
This solution introduces two main drawbacks:

1. Complexity. 
   + You have to mantein at minimum to data storages.
   + You have replicate each data change on the master database to the read databases.
2. Eventual consistency.

### Sharding
This solution involves splitting-up the data so you separate the responsability of updating and reading the database. Problems introduced are:
+ Complexity. 
  + shard-mapper. Now a layer must exist between the database and the client, to map the client request to the correct shard.
  + Design. you have to design carefully your database so the reads and writes are mostly done on one shard not across the shards. ([scatter gather queries](http://docs.mongodb.org/manual/core/distributed-queries/))

### Consistent Hashing