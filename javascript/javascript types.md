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
+ numbers .... `"" + 23;`
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
+ Number( true ) ==> 1
+ Number( false ) ==> 0
+ Number( undefined ) ==> NaN
+ Number( null ) ==> 0
+ +string
  + Si la conversion falla ==> NaN
  + Si la conversión funciona ==> El número. Hay unas cuantas [diferencias respecto a la evaluación de literales](https://es5.github.io/#x9.3.1) 
+ Objects y arrays. Se convierten primero a su primitivo y con el resultado se aplican las reglas mencionadas.
  + Si el objeto tiene la función valueOf usa esta para obtener el primitivo
  + Si no usa la función toString()
  + Si ninguna de las anteriores es capaz de retornar un tipo primitivo lanza un error TypeError

##toBoolean
+ falsy values. Valores que al convertirlos a booleanos son false. Son:
  + undefined
  + null 
  + +0, -0 y NaN
  + ""
+ truthy values. Valores que al convertirlos a booleanos son false. todos los valores no incluidos en la lista de falsy values son truthy

##Date to Number
+ +new Date() ==> hora en sistemas unix (milisegundos transcurridos desde el 1 de enero de 1970 UTC)

##number coercion
+ ~a.indexOf( "lo" )
+ `~~49.6 ==> 49`
+ +"35"
+ Number("35");
+ parseInt("35") y parseFloat("35")
  + tolera caracteres no numéricos
  + Segundo argumento [radix](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt) indica la base numerica si no se indica asume base-10 antes de ES5 si no se indicaba lo intentaba deducir de la cadena.
  + parse(1/0, 19) ==> 18

##Boolean
+ Boolean("0");
+ !!"0"

##Implicit coercion

##Selector operators
+ Selecciona una de las expresiones del conjunto
+ asignacion condicional
+ guard operator

##Symbol coercion
+ No permite la conversion ímplicita a un valor string. Esto falla `"" + Symbol("something")`
+ No se puede convertir a´un valor numérico
+ Se puede convertir tanto explicitamente como implicitamente a un valor booleano

## == vs ===
+ == Permite la conversión de valores
  + string == number o number == string. convierte el string en numero Number(string)
  + si hay un booleano lo convierte a Number.
  + null == undefined o undefined == null ==> true
  + Objetos/funciones/arrays
    + Si el otro elemento es number o string ToPrimitive(valueOf || toString || typeErrors)
+ === NO permite la conversión de valores. Dos casos  excepcionales:
  + NaN === NaN
  + +0 === -0
## a < b
1. Se llama a ToPrimitive en ambos operandos
2. Si el resultado de ambos es string se compara
3. Si no se convierten a number y se comparan

##ToPrimitive
1. Si el valor tiene la función valueOf se usa esta
2. Si no, si el valor tiene la función toString se usa esta
3. Si no tiene no valueOf ni toString lanza un typeError

#Grammar

##statement vs expression
+ Statement una instrucción compuesta de una o más expresiones
+ Toda expresion puede ser evaluada hasta obtener un valor
+ Tipos de statements:
  + Declaration stament.
  + Assignment statements.
  + Expresion statement

###Completion values
+ Todo statement tiene un valor de completicion
+ El completion value de un bloque es como un return implicito de la última línea del bloque `var b; if(true){ b = 4 + 38;}`
+ Capturar el completion value:
  + `var a, b; a = if(true){ b = 4 + 38;}` //ouch!!! a sintax error
  + Hello eval... `var a, b; a = eval("if(true){ b = 4 + 38;}")`
  + Inline function expresion 'var a,b; a = function(){ if(true) return b = 4 38}.call(this, null)'
  + ES7 "do expresion" `var a, b; a = do { if(true){ b = 4 + 38;}") };`

###Expressions sideffects
+ Sideffect ==> Cuando una expresion o función además de retornar un valor cambia el estado del sistema.
+ ejemplos
  + a++, ++a
  + a--, --a
  + delete
  + = as a = 42 //example chained assignements

## labeled statements
+ Se pueden usar en instrucciones break y continue
+ En una expresion break significa termina el bucle etiquetado como ...
+ En una expresión continue significa continua con la siguiente iteración del bucle etiquetado como ...

##{}
+ Se usan para object literal
+ Labeled statements
+ Bloques de código
+ Object destructuring (ES6)
+ if / else //else if clause does not exist

##Operator precedence
The list is taken from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
+ 19 Grouping  n/a ( … )
+ 18  
  + Member Access left-to-right … . …
  + Computed Member Access  left-to-right … [ … ]
  + new (with argument list)  n/a new … ( … )
+ 17  
  + Function Call left-to-right … ( … )
  + new (without argument list) right-to-left new …
+ 16  
  + Postfix Increment n/a … ++
  + Postfix Decrement n/a … --
+ 15  
  + Logical NOT right-to-left ! …
  + Bitwise NOT right-to-left ~ …
  + Unary Plus  right-to-left + …
  + Unary Negation  right-to-left - …
  + Prefix Increment  right-to-left ++ …
  + Prefix Decrement  right-to-left -- …
  + typeof  right-to-left typeof …
  + void  right-to-left void …
  + delete  right-to-left delete …
+ 14  
  + Multiplication  left-to-right … * …
  + Division  left-to-right … / …
  + Remainder left-to-right … % …
+ 13  
  + Addition  left-to-right … + …
  + Subtraction left-to-right … - …
+ 12  
  + Bitwise Left Shift  left-to-right … << …
  + Bitwise Right Shift left-to-right … >> …
  + Bitwise Unsigned Right Shift  left-to-right … >>> …
+ 11  
  + Less Than left-to-right … < …
  + Less Than Or Equal  left-to-right … <= …
  + Greater Than  left-to-right … > …
  + Greater Than Or Equal left-to-right … >= …
  + in  left-to-right … in …
  + instanceof  left-to-right … instanceof …
+ 10   
  + Equality left-to-right … == …
  + Inequality  left-to-right … != …
  + Strict Equality left-to-right … === …
  + Strict Inequality left-to-right … !== …
+ 9 Bitwise AND left-to-right … & …
+ 8 Bitwise XOR left-to-right … ^ …
+ 7 Bitwise OR  left-to-right … | …
+ 6 Logical AND left-to-right … && …
+ 5 Logical OR  left-to-right … || …
+ 4 Conditional right-to-left … ? … : …
+ 3 Assignment  right-to-left 
  + … += …
  + … -= …
  + … *= …
  + … = …
  + … /= …
  + … %= …
  + … <<= …
  + … >>= …
  + … >>>= …
  + … &= …
  + … ^= …
  + … |= …
+ 2 yield right-to-left yield …
+ 1 Spread  n/a ... …
+ 0 Comma / Sequence  left-to-right … , … 

##SHORT CIRCUITED
Solo las expresiones necesarias para determinar el resultado de un statement se valuaran. Esto se usa mucho en la evaluación segura de variables
+ Right-left asociative grouping
  + ?:
  + =
+ The staments are left-right evaluated

##Automatic semicolon
+ Solo se insertan en presencia de salto de linea. Nunca se insertan en medio de una linea.

##Errors
+ compiletime errors `var a  = /+foo/;`
+ runtime errors
+ Temporal Dead Zone-TDZ (ES6)
  + `{a=2; let a;}` 
  + `var b = 3; function(a = 42, b = a -b)`

##try ... finally
+ Finally block allways run after try or catch if present
+ A return inside a finally block overrides previous return

##switch
+ The match disallows coercion so it's like ===
+ To allow coercion use expresions in each case

#js engines
+ Ecmascript is the former name for the standard spec
+ javascript is the browsers implementation of the spec
+ The [annex B](https://es5.github.io/B.html) discusses specific deviation from the oficial spec
+ The [Web ecmascript specification](https://javascript.spec.whatwg.org/) covers the diference between the oficial spec and the browser implementation
+ Host objects (console)
  + They are falsy
  + They do not have access to normal Object built-ins like toString()
  + Not being overwritable
  + Have certain predefined read-only props
  + etc

