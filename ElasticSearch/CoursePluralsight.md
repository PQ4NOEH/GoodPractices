## Content index
+ History
+ Clusters, shards & indexes
+ Documents
+ Installation
+ Querying 
+ .NET

## History
+ noSQL distributed document database
+ Lucene
+ Http interface
+ Why
  + Speed
  + Relevancy
  + Statistics analisys tools
+ What kind of apps
	+ Blog
	+ Analitics tools
	+ Document repository= different schema or unpredictable schema
+ Concepts
	+ Documents: JSON strings
	+ Index: 
	+ Shards: 
	+ Cluster:

## Installation
+ [as a windows service](http://ruilopes.com/elasticsearch-setup/)
+ [Run at command prompt](https://www.elastic.co/downloads/elasticsearch)
+ Marvel (elasticsearch console) http://localhost:9200/_plugin/marvel/sense/index.html

## Data Types & index creation
+ Indexes
  + 1 index = 1 database
  + Routing
  + Aliases
+ Data type
  + number: float, double, byte, short, integer, long
  + boolean
  + string
  + date
  	+ by default UTC format
  + binary
  	+ Stored as base64 string
  	+ not index by default
+ commands
	+ get [indexname]/[collectionName]/_search
	+ get [indexName]/_mapping
	+ get _cat/indices
	+ delete [indexname]

## Apache Lucene
+ Elasticsearch uses it to handle document indexing, and perform searchs against the indexed documents
+ Concepts
	+ Document. Made up of field is the target of the indexing and search.
	+ Field. A section of the document built of two parts a key and a value.
	+ Term. It is a unit of search
	+ Token. It is an ocurrence of a term from the text of the field. It consists of term text, start offset, end offset and a type