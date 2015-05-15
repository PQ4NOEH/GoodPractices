#this
+ Is a var setted at runtime
+ It's value depends on where the function was called from (the callStack).
+ The value is setted using one of five rules
  + Default binding
    + In non strict.mode this === global object
    + In strict.mode this === undefined
    + call/apply with null or undefined as this param. In this situation the binding is ignore and the resolution is done via default mode. It's a usefull pattern for:
      + Spreading array of values as function parameters.
      + currying
    + Indirection 
  + Implicit binding. 
    + When the call-site has a context object
    + Implicitly lost. When an implicitly bound function loses that binding, then it falls to default binding behavior
  + Explicit binding. It is when you force the function to use a specific binding, it can be done via several ways:
    + call
    + apply
    + Hard binding.
      + creating a closure
      + bind prototype method
  + New binding. When a function is invoked with the new operator:
    + A brand new object is created
    + The new object is [[prototype]]-linked
    + The new object is set as the this binding for the function call
    + Unless the function returns its own alternate object the new invoked call function will return the new object
  + Lexical this
    + the fat arrow function
    + Can't be overridden, even with new operator
  
#this resolution priority order
1. new Binding.
2. Explicit binding.
3. Implicit binding.
4. default binding.

#objects

##Built-in objects
+ String
+ Number
+ Boolean
+ Object
+ Function
+ Array
+ Date
+ RegExp
+ Error
+ They can be used with the new operator
+ The RT automatic coerces primitives to its correspond object when needed. with the excepcion of null and undefined which have not object correspondence

##Contents
Values of any type stored at specifically named location within an object (properties)
They can be accesed :
+ property access obj.a .  It needs an Identifier-ompatible  property name
+ key access obj["a"]. 
  + It accepts any utf-8/unicode-compatible string
  + The property can be determined dinamically
  + it has to be a string if any other type is provided it's first coerced to string
### computed property names (ES6)
It's like key access but in object literal definition.

##duplicate them
+ JSON.parse(JSON.stringify(obj)). won't copy any function
+ Object.assign (ES6). shallow copy

##property descriptor
+ Object.getOwnPropertyDescriptor gets and object with four properties
  + value
  + writable. Defines if the property is readOnly
  + enumerable. setting it to false will make the iterators to ignore them (for in loop)
  + configurable. Defines if the property descriptor for that property can be changed
    + Once setted to false can not be setted back.
    + Even been not configurable writable can be setted to false.
    + A non configurable property can not be deleted
  + get. Allows to set the property accesor get
  + set. Allows to set the property accesor set
+ We can set those values with Object.defineProperty

##inmutability
+ several ways:
  + {writable:false, configurable:false}
  + Object.preventExtensions. Does not allow to create new properties on the object
  + Object.seal.
    + Object.preventExtensions
    + each property is marked as {configurable:false}
  + Object.freeze.
    + Object.seal.
    + each property is marked as {writable:false}
+ Shallow inmutability. To get deep inmutability call inmutability over the whole object hierarchy

##[Get]
##[Put]
Se comporta de distinta manera dependiendo de si existe o no la propiedad en el objeto:
+ Si el objeto tiene la propiedad:
  1. si la propiedad es un accesor descriptor llama al setter
  2. Si la propiedad es un data descriptor de solo lectura ignora la instrucción o lanza excepcion
  3. si no es ninguno de los casos anteriores establece el valor de la propiedad

 ##getter & setters 
 Permite sobreescribir los metodos nativos [Get] y [Put].

 ##comprobar existencia
 + obj.hasOwnProperty

##enumeration
Establece si una propiedad aparecera en un bucle for in
obj.propertyIsEnumerable retorna si una propiedad es o no enumerable

##iteration
+ forEach. Iterates over the entire collection
+ every. Iterates until one returns a false / falsy
+ some. Iterates until one returns a true / truthy
+ for .. of (ES6)


#class
OOP stress that data has behavior asociated that operates on it so the good practice it's to package together data and behavior
classes are an optional pattern in software design
Javascript has no classes pattern built-in

##mixins
+ objects are  not copied they are linked together. two types of mixins
  + Explict
  + Implicit

+ JavaScript functions cant be replecated in a standard way

##Parasitic inheritance

##Implicit mixins

#prototypes
Any object has a especial property call in the specification [[prototype]] que es una referencia a otro objeto
the Object.prototype is the last element in the prototype chain

##setting properties
  1. if obj a already has a property b it just changes its value.
  2. If not the prototype chain is traversed
    + If it's not found is added to a
    + If it's found
      1. if normal data accesor is found and is not marked as read-only then it's shadowed
      2. Is marked as read-only. in strict mode you get an error in non-strict mode it is ignored
      3. A setter is found then the setter is called.
    In cases 1 and 3 you can not assign to shadowing instead you have to use Object.defineProperty

##class functions
+ Any function has a non-enumerable property [prototype]
+ if we call a function with the new we will get an object linked on it's [[prototype]] to function prototype

##constructor
+ When we use new the resulting object has a property constructor which points to the function used after new
+ obj.prototype.isPrototypeOf( a )
+ Object.getPrototypeOf( a ) === obj.prototype
+ a.__proto__ === obj.prototype
+ Object.create({})
+ Object.create(null) (dictionary)

#Behavior delegation

