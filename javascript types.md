#tipos en javascript
Javascript tiene tipos
Los tipos vienen definidos por el valor y no por la variable
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

#value vs ref
+ En javascript no se comparten las referencias
+ El tipo del valor de la variable define si se pasa como valor o como referencia
  + Por valor: null, undefined, string, number, boolean, symbol
  + Por referencia: objects

#Arrays
+ Contenedor de otros tipos
+ Es un objeto que contiene propiedades numericas indexables
+ Acepta propiedades no numericas. Pero ... ¿es una buena idea?:
+ Si borramos un indice la longitud del array sigue siendo la misma [test](tests/types.spec.html?grep=javascript%20tipos%3A%20Arrays%20Si%20elimino%20el%20%C3%BAltimo%20elemento%20de%20un%20array%20actualiza%20si%20longitud)
+ Es muy facil generar sparse arrays. ej. var a = []; a[1] = 1;
+ Detectar un array mediante Array.isArray(obj) (ES5);

#Arrays like
+ Usar slice.
+ Usar fx del prototipo + call
+ Array.from (ES6)

#String
+ Inmutables

#Numbers
+ reprented as: 
  + base-10. 42, 42.12, 0.23 
  + Exponencial. 1E6
  + Hexadecimal. 0xf3
  + Octal. 0363 Not allowed in ES6 strict mode you must instead use 0o363
+ Comparar coma flotante 
+ Number epsilon (ES6)

#Special values
+ undefined
  + Valor no definido
  + En non-strict mode se puede modificar la variable global undefined (NO LO HAGAS!!)
  + En strict y non-strict mode se pueden crear variables locales con el nombre undefined (NO LO HAGAS!!!)
+ null --> valor vacio
+ void es un operador global que siempre devuelve el valor real de undefined
+ NaN
  + Cualquier operación matemática en la que uno de los operandos no sea un número devolverá NaN
  + Es el único valor que es distinto a si mismo. NaN === NaN // false
  + Su tipo es number
  + isNaN indica si es un NaN pero retorna true para ciertos valores no numéricos: undefined, string, function.
  + Number.isNaN funciona bien
+ Infinity
  + Se generan cuando una operación matemática da error siendo sus dos operandos numéricos.
  + Dos tipos: Infinity, -Infinity
  + Se puede comprovar si un valor es Infinity de tres formas
    + Comparando el valor con Number.POSITIVE_INFINITY
    + Comparando el valor con Number.NEGATIVE_INFINITY
    + Pasando el valor a la función Number.isFinite()
+ Zeros
  + Dos tipos +0, -0
  + cero negativo
    + Si lo pasamos a string pasa como 0
    + Si lo pasamos de string a número pasa como -0
    + Si lo comparamos con +0 indica que son iguales
+ Object.is compara de forma stricta la igualdad de valores funciona correctamente incluso para NaN y -0

#Natives
+ funciones nativas.
+ Su proposito es el de generar objetos que encapsulan tipos primitivos para que asi estos tengan una serie de métodos predefinidos.
+ Hay que usarlos con cuidado ya que pueden tener comportamientos inesperados como ejemplo:
```javascript
new Boolean(false) == true;//true
```
+ They
