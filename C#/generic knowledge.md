#covarianza
Conversion implicita de de referencias de los tipos: de matriz, delegado y argumentos genericos
En la covarianza se pasa de un tipo más derivado a un tipo menos derivado ejemplos:
+ object[] arr = new string[10]
+ `Func<object> del = ()=> "Hello"`
+ `IEnumerable<String> strings = new List<String>();`


#Contravarianza
Como la covarianza pero permite la conversión de tipos menos derivados a tipos más derivados
ejemplos:
+ string[] arr = new object[10]
+ `Action<string> del2 = (string str)=>{}`