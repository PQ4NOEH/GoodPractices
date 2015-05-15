#Que es el scope
Conjunto de reglas seguido para poder almacenar y localizar las variables.

#Teoria de compiladores
+ javascript es un lenguaje compilado
+ Engine. 
  + Start-finish compilation
  + Execution of the program
+ Compiler. parsing and code-generation
+ scope. 
  + Mantiene una lista con las direcciones de todas las variables 
  + Mantiene un conjunto de reglas de acceso a las mismas
+ var a = 2; se parte en dos el compilador lo declara y el runtime lo asigna
  + compiler
    1. Encuentra var a 
    2. Pregunta al compilador si existe la variable a
      + Existe ==> Ignora la declaracion
      + No existe ==> Le pide al scope que declare la variable a
    3. Genera código para gestionar la asignación a = 2
    4. El Engine lanza el código. Pregunta al scope si hay una variable a accesible:
      + Existe ==> la usa.
      + No existe ==> busca en otro lugar (nested scope). Si finalmente no la encuentra lanza un error.

#LHS lookup vs RHS lookup
+ LHS. LeftHand Side Cuando la variable esta a la izquierda en la expresion. Obtener la variable.
  + asignaciones "=".
  + parametros de una función.
+ RHS. RightHand Side Cuando la variable esta a la derecha en la expresion. obtener el valor de la variable.
##Test
Encuentra LHS (3) y RHS(4)
```javascript
function foo(a){
  var b = a;
  return a + b;
}
var c = foo ( 2 );
```

#Anidamiento de scopes
+ Si el engine no encuentra en una varible en un scope pregunta al siguiente y asi hasta que o encuentra la variable o no hay scopes a los que preguntar.

```javascript
function foo(a){
  console.log( a + b);
}
var b = 2;
foo(2);// 4
```

#Errores
En el caso de localizar la variable RHS y LHS se comportan de forma distinta.
+ RHS ==> ReferenceError.
+ LHS
  + non strict-mode ==> El global scope crea la variable.
  + Strinct-mode ==> ReferenceError.


#Lexical scope
+ El contexto definido durante el proceso de lexing. Esto es el contexto biene definido por donde se han definido las variables que usa el programa.
+ Cada funcion crea un nuevo scope contenido en el contexto anterior
+ Scope lookups para en cuanto encuentra la primera coincidencia
+ some ways to alterate the current scope:
  + eval
  + setTimeout 
  + setInterval
  + with (deprecated) if it does not find the property in the given behaves as a normal LHS pontentially creating global properties. It is disallowed in strict mode

#Eval and with performance
+ The usage of these dynamic code feauteres limit the performance optimizations the engine might do at compilation time

#functions vs block Scope
+ How can i create a new scope buble?
+ Which javascript structures may create a new scope?
  + function
  + with
  + try/catch. the err variable only exists in the catch block
  + let (ES6)
  + const

#anonimous vs named functions
+ Anonimous make debugging harder
+ Self referencing harder o deprecated (arguments.callee)
+ Allways name your functions

#Hoisting
+ All Declarations 'var' are executed before any code in the function
+ function declaration are hoisted too
+ function expresions are not hoisted
+ Before anything else the functions declarations are run after that the var declarations

#closure
the avility of a function to access it's lexical scope even when it's executing away from it's lexical scope.
Examples:
+ highorder functions
+ Modules (make private)
+ for loop example
+ Module manager

#Dynamic scope
+ The scope chain is based on the call-stack