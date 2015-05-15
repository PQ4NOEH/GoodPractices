#Builder
##The goal
##Implementation
  + What is going to be build
  + The abstract builder. It responsability it is to define the necesary steps to build the object.
    1. The abastract fixed steps to build the object
    2. The create method
  + n implementation of the builder. It responsability it's to do the specific implementation of the diferents build steps
  + The maker recives as a dependency a builder. Its responsability is to call each of the required steps to build the object
  
##Examples
  + Pizza, burguer

#chain of responsability
##The goal
Decouples de sender of a message from the resolver.  is a list of message  handdlers that know how handle a message. the traits are:
  1. sender is aware only of the first receiver
  2. each receiver is only aware of the next receiver
  3. Receivers process the message or send it down the chain
  4. The sender does not know how receive the message or who procesed it
  5. The first receiver to handle the message terminates the chain
  6. The order of the receiver list matters

##Implementation
  + sender
  + n receivers

#memento
##The goal
Saves the diferent states of an object in order to be able to undo, redo

##Implementation
  1. Originator<T>. 
    + Holds the current state
    + Generates mementos of the current state
    + Restore state from a given memento
  2. Memento<T>
    + Holds a given state
  3. Caretaker<T> holds the different generated mementos 

#strategy 
##The goal
keep the order between different implementations. example a long switch

#implementation
1. context
2. IStrategy
3. n Strategy implementations

#unit of work
##the goal
maintains a list of objects affected by a business transaction and coordinates the writing out of changes and the resolution of concurrency problems.
##Implementation
1. The IUnitOfWork interface
  + void MarkDirty(object entity);
  + void MarkNew(object entity);
  + void MarkDeleted(object entity);
  + void Commit();
  + void Rollback();
2. IUnitOfWork implementation
3. ICommand 
  + Execute(obj, IUnitOfWork);
4. CommandProcesor
  + Ctor(ICommand[], IUnitOfWork)
  + RunCommands

#Repository
##The goal
The repository and unit of work patterns are intended to create an abstraction layer between the data access layer and the business logic layer of an application. Implementing these patterns can help insulate your application from changes in the data store and can facilitate automated unit testing or test-driven development
A Repository mediates between the domain and data mapping layers, acting like an in-memory domain object collection. Client objects construct query specifications declaratively and submit them to Repository for satisfaction.
Define a set of operation on top of system persistence layer
##Implementation

#visitor
##The goal
Allows you to apply a specific operation on a collection of objects of diferent types

##Implementation
1. Context. 
  + Gets Visitable implementation
  + Applies to each Visitable the existing visitors
2. IVisitor
3. n IVisitor implementations
3. IVisitable
4. n IVisitable implementation


#SOLID
##Single responsability
##Open close 
##Liskow subtitution
##Interface segregation
##Dependency inversion
