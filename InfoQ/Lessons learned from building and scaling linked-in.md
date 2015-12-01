# From monolithic to smaller elements
+ The problem with monoolitics systems: 
  + Scale engineering.
  + Coupling.
  + determing the afectation of a code change.
+ Adding services scales your development:
  + Does not make you any faster.
  + Cut's up the application.
  + Develop on isolation.
  + Deploys on isolation.
  + Tests on isolation.
  + It can be reused across other services and applications.
  + Bad services are much worse than no service

# Managament
+ Comunism vs capitalism mode
+ Treat code as intelectual property
+ Do not duplicate any of your integration layer
+ Several things should be mandatory:
  + Service layer
  + Monitoring
  + Deployment

# Risk
+ Risk = The probability of the bad thing + the cost of the bad thing.
+ Diferents ways to manage:
  + Move faster and break things.
  + Move slower and don't break things.
  + Move faster and don't break things.
+ Down the probability of the bad thing:
  + Testing.
  + Testing is about prediction
  + Move from prediction mode to measurement mode.
+ Down the cost of the bad thing:
  + Improving rollback time.
  + Reduce exposure
    + A/B testing
    + Canary release



# offline Systems
+ They are for definition safe
+ They are cheap as they are build thinking on  throughput they don't have to fight against increasing requesting they do all the fast they can.

# Safetiness
+ Offline procesing = safe
+ Safe it's the key to being fast.