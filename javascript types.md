#tipos en javascript
Javascript tiene tipos
Los tipos vienen definidos por el valor y no por la variable</p>
+ object
+ null
+ undefined
+ number
+ string
+ boolean
+ Symbol
#Operador typeof
+ typeof {} === 'object'
+ typeof null === 'object'
+ typeof undefined === 'undefined'
+ typeof 42 === 'number'
+ typeof "42" === 'string'
+ typeof false === 'boolean'
+ typeof symbol() === 'symbol'
+ Más:
  + typeof [] = "object"
  + typeof function(){} = "function"

#Arrays
+ Contenedor de otros tipos
+ Es un objeto que contiene propiedades numericas indexables
+ Acepta propiedades no numericas. Pero ... ¿es una buena idea?:
+ Si borramos un indice la longitud del array sigue siendo la misma [test](tests/types.spec.html?grep=javascript%20tipos%3A%20Arrays%20Si%20elimino%20el%20%C3%BAltimo%20elemento%20de%20un%20array%20actualiza%20si%20longitud)
+ Es muy facil generar sparse arrays. ej. var a = []; a[1] = 1;
+ Detectar un array mediante Array.isArray(obj) (ES5);

# Arrays like
+ Usar slice.
+ Usar fx del prototipo + call
+ Array.from (ES6)