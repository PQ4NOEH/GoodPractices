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
