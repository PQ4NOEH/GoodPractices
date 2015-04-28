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
+ Como norma general no uses natives, deja que en caso de ser necesario la plataforma encapsule el tipo. Razones para no encapsular manualmente:
  + Comportamientos inesperados como ejemplo `new Boolean(false) == true;//true`
  + Rendimientos
+ Dos formas de encapsular un tipo:
  + constructor específico: Array, String, Number,...
  + new Object(tipoConcreto)
+ Desencapsula el tipo mediante la funcion valueOf

## Object, Function y RegExp
+ No uses Object()
+ Usa Function() solo cuando necesites definir dinámicamente los parámetros o el cuerpo de una función.
+ RegExp() Solo tiene sentido cuando la expresión regular hay que definirla al vuelo, si no usa el literal por razones de claridad y rendimiento (El runtime es capaz de precompilar y cachear el literal).

##Array
+ No requiere el uso de 'new'
+ Si solo se proporciona un elemento y este es un número, se usa este para establecer la longitud del array
+ Emily the strange:
  + `Array([undefined, undefined, undefined]);`
  + `Array.apply(null,{ length: 3 })`
  + `Array(3)`

##Date y Error
+ No requiere el uso de 'new'
+ El principal motivo para usar Error es que captura la pila de ejecución en el objeto (Error("").stack) 

##Symbol
+ Se introduce en ES6
+ valores especiales únicos que pueden ser usados como propiedades en objetos con muy baja probabilidad de colisión

##Native prototypes
+ Cada uno de los constructores tiene un prototipo propio con un conjunto de funciones
+ Function.prototype ==> una funcion, RegExp.prototype ==> una expresion regular expresion, Array.prototype ==> un array vacio

#Coercion
##toString
+ null ==> "null"
+ undefined ==> "undefined"
+ true ==> "true"
+ numbers ...
+ {} ==> "[object Object]"
+ [1,2,4] ==> "1,2,4"

##JSON como toString menos para
+ strings. "hola" ==> ""hola""
+ undefineds, functions, symbols and objects (con referencia circulas), no se pueden parsear por lo que JSON.stringify automaticamente omitirá estos valores menos un objeto con referencia circular.
+ En el caso de encontrar un objeto con referencia circular lanza un error
+ Si un objeto tiene el método toJSON se llamará a este para realizar el parseo del objeto.
+ [replacer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify). El segundo argumento, Puede ser:
  + Un array con los nombres de las propiedades que se han de incluir
  + Una función que recibe el nombre y valor de la propiedad. Si devuelve undefined no se incluye si devuelve un valor se incluye.
+ [space] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify). El tercer argumento permite definir la identación que se usará. puede ser:
  + Un número, que hace referencia al número de espacios en blanco para cada nivel de indentación.
  + Hasta diez caracteres, los que esten por encima de los diez primeros se omiten.

##toNumber
+ true ==> 1
+ false ==> 0
+ undefined ==> NaN
+ null ==> 0
+ string
  + Si la conversion falla ==> NaN
  + Si la conversión funciona ==> El número pero hay unas cuantas [diferencias respecto a la evaluación de literales](https://es5.github.io/#x9.3.1) 
+ Objects y arrays se convierten primero a su primitivo y con el resultado se aplican las reglas mencionadas.
  1. Si el objeto tiene la función valueOf usa esta para obtener el primitivo
  2. Si no usa la función toString()
