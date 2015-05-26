#Scrum
+ Based on iterative process
+ Sprints. Iteration that culminates in potentially releasable software.
+ Product backlog. priorized list of pending work.
+ Story. unit of work
+ Artifacts
  + Scrum board
    + cards
  + Minimum Viable Release (MVR)
  + Minimum Marketable feature (MMF)
  + Deployments
  + Epic
    + required
    + Prefered
    + Desired
  + User story. As a [user role], I want to [behavior], so that [user value added]. Developers working plan.
    + plan what and how
      + user interface mockups
      + UML diagrams
      + Break it into tasks
    + Implementation
    + UAT
  + Defect
  + sprint burndown chart
  + sprint backlog
  + Sprint calendar
+ Roles
  + Product owner. Link between the client and the development team
    + Decide features to build.
    + Setting tasks priority.
    + Acepting or rejecting "completed" work.
    + owns the product. What is to be done
  + Scrum master.
    + shields the team from any external distraction
    + Tackles any impediments the team founds
    + Owns the process. How it is to be done.
  + Development team.
+ Ceremonies
  + Retrospective
  + the sprint
    + Release planning
    + Feature estimation
    + Feature priorization
    + Planning. estimate US. planning poker / affinity estimation
    + daily. niko-niko calendar
    + Sprint demo
    + Story triangulation
    + Retrospective
      + what went well
      + What went badly
      + How can we do it better
      + surprises

#Code metrics
+ Source lines of code
+ Unit test coverage
+ Cyclomatic complexity
#Dependencies and layering
+ Types by code author
  + first-party 
  + Third-party
  + Ubiquitous
+ Type by code pattern
  + Inheritance
  + Aggregation
  + Composition
  + Association

#Dependency 
+ Problems Tied to an implementation
  + Less adaptative.
  + Coupled.
  + Untesteable.
  + Dependency resolution/construction 
+ Solution
  + Code to a specification not to an implementation
  + Use DI 
  + spec and implementation should be placed in differents assemblies.stairway pattern

#Null Object pattern
+ Return an object which do nothing or returns default values in property accesors
+ IsNull antipattern tends to derivate the problem to the clients
+ It should return null Object pattern implementations

#Adapter pattern
+ Allows to provide an object to a client that has a dependency on an interface that your object does not implement
+ The adapter fullfils the required interface and delegates to the object it is used when the target can not be modified
+ Various flavors
  + class adapter. Uses inheritance
  + object adapter. Uses composition 

#strategy pattern
+ Allows to change the behavior of a class without recompilation
+ It is used when a class needs to exhibit variant behavior depending on the the state of an object

#Duck-typing
+ In C# fullfilling and interface specification does not allow to treat the object as it was of the interface type, to do so the class has to explicitly implement the interface.
+ Different strategies to apply duck-typing:
  + Using the dynamic keyword
  + Impromptu interface. Is a library
  + CLR duck-typing support. 
    + Only support duck-typing for IEnumerable
  + Mixins
    + Extension methods. Limitations
      + Testing. Static class do not lend themselves to be easily mocked.
      + They can't hold per-instance state. 
    + RE-motion Re-mix. Limitations
      + You can't know the exact type of the object returned by the remix factory

#Fluent interfaces
+ Improves readability
+ Very popular into configuration or FSM

#Rules
+ Favor composition over inheritance because inheritance makes the inheritor dependant on the implementation rather than on the sepcification.
+ Favor constants vs magic numbers/strings.
+ Avoid editing existing code after being verified and deployed.
+ Marshall layer exceptions to it's own layer.


UNIT TESTING
#Test
+Every test is composed of three differents parts. AAA pattern
  + The arrangement (preconditions)
  + The performance of the act being tested.
    + Should consist on one single interaction with the SUT
  + The assertion
+ A tests is over-specified when it has knowledge of the SUT's implementation rather than its expected behavior

#Mocking
+ fakes
+ moks

#Single Responsability Principle
A class should have one, and only one, reason to change.

#SRP and the decorator pattern
+ Each decorator class fulfills the contract of a given type
+ Each decorator Accepts one instance of the typed fulfilled
+ Allows to keep the decorated typed SRP while being extended by the decorator

#Composite pattern
+ Is a specialization of the decorator pattern.
+ It allows you to treat many instances of a type as if they where one.

#Predicate decorator
+ Allows to hide from clients the conditional execution of code
+ .net framework 2.0 has the predicate<T>

#Branching decorators
+ As predicate decorator but instead of executing the delegation it choose wether one delegation or another depending on the predicate excution beinn true or false.

#Lazy decorator

In general decorator may be applied to include Aspects

