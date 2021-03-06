
# Usage

+ Log aggregation. Collect log files from servers and put them in a central place.
+ Stream processing. Process data at multiple stages
+ Commit logs
+ Click stream tracking
+ Mom

# Components

+ Topic. Category or feed name. Topics are partitioned and each partition is represented by the ordered inmutable sequence of messages. Each message within the partition is assigned a unique sequential ID called offset.
+ Broker. Each process running on a kafka server. Topics are created within the context of broker processes.
+ Zookeeper. Coordination interface. It's a kind of distributed filesystem. It's design to coordinate data.
+ Producers. Produce publish data.
+ Consumer. Consume published data.

## A single node - a single broker cluster.


# Zookeeper configuration file

+ dataDir. Data directory where snapshot is stored.
+ clientPort. The port listening for client request.
+ maxClientCnxs. Disable the per-ip limit on the number of connections since this a non-production config.

# kafka configuration file

+ Broker.id ==> the id of the broker this must be set to a unique integer for each broker.
+ port ==> The port the socket server listens on
+ log.dir ==> The directory under which to store log files
+ num.partitions ==> The default number of log partitions per topic.
+ zookeeper.connnect ==> Zookeeper connection string

# kafka commands
+ create topic ==> "kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic kafkatopic"
+ List avalaible topics ==> "kafka-topics.sh --list --zookeeper localhost:2181"
+ Start producer to send messages ==> "kafka-console-producer.sh --broker-list localhost:9092 --topic topicName"

# Kafka design
+ main design focus
	+ API for producers and consumers
	+ Low overhead for network and storage with message persistence on disk
	+ High throughput
	+ Distributed
	+ Auto-balancing
	+ Guaranteed fault-tolerance
+ Brokers uses zookeeper to get the state information
+ consumer uses zookeeper to track message offsets
+ Partition. mapped to a logical log file represented as a set of segment files of equal sizes. Every partition is an ordered, inmutable sequence of messages each time a message is published to a partition it is appended to the last segment file
+ Consumer group
	+ Any consumer is in a consumer group.
	+ messageOffset is kept per consumer group this guarantees that only one consumer within the consumer group consumes the message
+ Consumer is responsible of keep the offset of the last message consumed
+ Messages can be reconsumed
+ push and pull model where producers push and consumers pulls
+ compression
	+ Efficient compresion requires compressing multiple messages together
	+ compression.codec. specifies the compresion codec for all data generated by this producer
	+ compressed.topics. Compresion turned on/off for a particular topic
+ Partition
	+ The producer decides how the message is partitioned
	+ The number of partitions can be configured for each topic within kafka broker
+ Replication
	+ introduced on kafka 1.8.0
	+ Guarantees that the message would be published and consumed even in case of broker failure.

#Topics and logs
+ Topic a category or feed name which messages are published. For each topic n partitions
+ Partittion. Ordered inmutable sequence of messsages that is continually append to a commit log. The messages in the partitions are each assigned a sequential id number called the offset that uniquely identifies each message within the partition. 
  + The partitions serves for:
    + Allow the log to scale beyond a size that will fit on a single server. Each partition must fit on a single server
    + They act as the unity of parallelism.
    + Partition data by key.
  + They are distributed over the servers in the kafka server.
  + Each partition has one server which acts as the leader and zero or more servers which act as "followers". The leader handles all the read and writes requests for the partitions. If leader fails one of the followers will be promoted as a leader
+ Producers. Publish data to the topics of their choice. It's responsible for choosing which message tp assign to which partition within the topic.
+ Consumer.
  + Consumer-group
  + Each consumer-instance assigned to a single partition
  + Kafka provides strict order within partition

