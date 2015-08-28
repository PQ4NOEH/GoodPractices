
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