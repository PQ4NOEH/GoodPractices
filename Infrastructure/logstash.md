# Architecture
+ Message based
+ Single agent
+ Four components
  + Shipper. Sends events to logstash
  + Broker & indexer. Receives and indexes the events
  + Search and storage. Allow you to search and store events
  + Interface.
+ Log stash agent aspects
  + inputs. define the inputs streams
  + filters. Define the transformation of the streams
  + outputs. Define the outputs
+ Format codecs allows you to format the event output
+ event Format
  + @timestamp. ISON 8601 timestamp
  + message. The events message
  + @version. The version of the event format