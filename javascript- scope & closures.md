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