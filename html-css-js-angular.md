#HTML
##Buenas prácticas
+ [todo](https://github.com/hail2u/html-best-practices)
##Herramientas
+ [validation](https://www.npmjs.com/package/gulp-html-validator)
+ [Pretify](https://www.npmjs.com/package/gulp-prettify)

#CSS
##Buenas prácticas
+ Usa un reset
+ Usa OOCSS
+ No uses selectores por ID
+ Lleva una organización de abajo arriba
+ Usa un preprocesador (SAAS, LESS)
+ Manten DRY
+ Manten SRP
+ Crea antes el HTML
+ Usa equivalencias reducidas
+ Evita el uso de hacks exclusivos
+ Usa text-transform
+ Validalo
+ Prefiere el uso de ems frente pixels
+ Evita selectores extra
+ No uses selecciones con muchas ramas
+ nombrado de clases en minúsculas separando las palabras con un guión (.mi-clase-en-css)
+ No usar estilos en línea
+ Separa el css en uno o varios ficheros independientes al HTML

##Herramientas
+ SASS

#Javascript
##Buenas prácticas
+ No usar variables globales
+ Siempre usa strict mode.  “use strict” en el encabezado de cada script
+ Declara variables
+ Declara las variables al inicio
+ Usa {} en vez de new Object()
+ Usa “” en vez de new String()
+ Usa 0 en vez de new Number()
+ Usa false en vez de new Boolean()
+ Usa []en vez de new Array()
+ Usa /()/  en vez de new RegExp()
+ Usa function fxName (){}  en vez de new function()
+ No uses una variable para almacenar ¡= tipos de valor
+ Usa un var por variable
+ Evita la conversión automática
+ Usa parámetros por defecto
+ Evita el uso de switch pero si lo usas siempre incluye la clausula default
+ Evita el uso de eval() y de new Function()
+ No invoques setTimeout o setInterval con strings
+ Siempre finaliza las instrucciones con ;
+ No uses índices con nombre en los arrays
+ Limita el número de caracteres por línea a 80 si una instrucción requiere más pártela
+ Usa dos espacios para indentar
+ Usa jsdocs para los comentarios
+ Usa “function declarations” frente a "function expresions"
+ Usa IIFE para no polucionar el contexto global
+ Usa reveal module pattern para ocultar la implementación
+ No uses funciones anónimas
+ Abre la llave en la misma línea de la instrucción de apertura
+ Evita declaración de funciones en bloques
+ Siempre usa llaver en bloques de instrucción
+ No uses With
+ Usa aserciones para comprobar la corrección del estado
+ Al lanzar un error usa new Error en vez de simplemente throw
+ Si el tipo de error lo merece crea una subclase de error para esto apóyate en create-error
+ Siempre incluye una opción que gestione el caso que no esperas
+ Usa modulos
+ Incluye siempre código que gestione el error en un callback
+ Nombrado
  + Empezar siempre con una letra o con un guión bajo.
  + usar  solo números, letras y guiones Bajos:
    + [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
    + [A,B,C,D,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
    + [0,1,2,3,4,5,6,7,8,9]
    + [_]
  + camelCase para variables, funciones y ficheros
  + UpperCamelCase para constructores
  + UPPERCASE para variables globales y constantes
+ Tests
  + TDD
  + La estructura de los tests debe replicar la del elemento testeado de tal forma que es conociendo la ubicación de uno es muy facil en contrar el otro.
  + Los tests tienen que poderse leer trátalos como si fuesen la documentación del elemento testeado
  + Evita las dependencias entre tests
  + Lánzalos con la mayor frecuencia posible
    + Unit. Antes de cada checkin considera usar un precommit task si usas git o un protocolo similar
    + UAT Cada dia. Como una tarea nocturna de tal forma que se pueda disponer del informe a primera hora de la mañana
  + Mide la covertura de tus tests
  + ejecuta los tests en todas las plataformas definidas en el SLA. ([BrowserStack](http://www.browserstack.com/), [sauce-labs](https://saucelabs.com/))
  + Unitarios
    + Mock dependencies
    + Use promises
    + Use spies
    + Avoid code repetition
	+ Do not use timeouts to tests async code
	+ Tests async situations
	+ At the end of each test leave the state as it was at the beginning
  + E2E
	+ Use [postman](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm) or similar to manually tests your server API
	+ Base the tests in use cases.
	+ At the end of each test suite leave the state as it was at the beginning.
	+ Mocking server
	  + [msl](http://finraos.github.io/MSL/gettingstarted.html)
	  + [Angular-mock](https://github.com/angular/bower-angular-mocks)
	  + [HttpBackend](https://github.com/nchaulet/httpbackend)
+ logging
  + Realiza logs: actividad, erroes
  + No uses console.log como parte de tu estrategia de logs en producción
  + Escribe mensajes de errores que te sirvan
    + Piensa y planifica la estructura de los mensajes
    + Identifica el origen.
    + Si es un error incluye traza.
    + El mensaje ha de ser autoexplicativo.
	
##Herramientas
+ [Beautify](https://www.npmjs.com/package/js-beautify)
+ [jscs](https://www.npmjs.com/package/gulp-jscs)
+ [jsHint](https://www.npmjs.com/package/gulp-jshint)
+ tasks runners: [gulp](http://gulpjs.com/), [grunt](http://gruntjs.com/), [brunch](http://brunch.io/)
+ Transpilers
  + [Typescript](http://www.typescriptlang.org/)
  + ES6: [Babel](https://babeljs.io/), [Traceur](https://github.com/google/traceur-compiler)

#ANGULAR
## Buenas prácticas
+ Un componente por fichero
+ Utiliza un gestor de paquetes [browserify](http://browserify.org/)
+ Utiliza elementos accesibles al principio del fichero ([Reveal module pattern](https://carldanley.com/js-revealing-module-pattern/))
+ Controladores
  + Usa sintaxis "controller As"
  + Implementa la lógica en los servicios
  + Asocia el controlador a una vista y no lo reutilices. Ten en cuenta que la función del controlador es la de hacer visible a la vista los elementos pertinentes.
  + Siempre que sea posible asocia los controladores a la vista en el enrutado
  + No manipules el DOM en el controlador
+ Servicios
  + Usa [decorator](https://docs.angularjs.org/api/auto/service/$provide/#decorator)para extender el funcionamiento de un servicio preexistente
  + Usa [Provider](https://docs.angularjs.org/api/auto/service/$provide/#provider) cuando haya que configurar / establecer alguna variable del servicio previamente a su uso
  + Usa [factory](https://docs.angularjs.org/api/auto/service/$provide/#factory) cuando NO haya que configurar / establecer variable alguna  del servicio previamente a su uso.
  + Usa [service](https://docs.angularjs.org/api/auto/service/$provide/#service) cuando NO haya que configurar / establecer variable alguna  del servicio previamente a su uso. La diferencia entre factory y service es que service se invoca con la palabra [new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new).
+ Directivas
  + Una por fichero
  + Intenta ceñirte a la aplicación de la plantilla en vez de manipular el DOM manualmente.
  + Usa un prefijo que identifique el proyecto, empresa, etc, evitando el uso de "ng" que esta reservado para directivas de angular
  + en el nombrado usa lowerCamelCase
  + Restringe el uso a elementos y atributos
  + Usa la sintaxis "Controller As"
+ Enrutado
  + Manten la configuración del enrutado en un fichero independiente.
  + Usa [ui-router](https://github.com/angular-ui/ui-router).
  + Resuelve en la configuración del enrutado.
    + Asociacion vista-controlador
    + "Controller as"
    + Ejecuciones asincronas requeridas (resolve)
+ Inyeccion de dependencias
  + Usa siempre inyeccion de dependencias $inject
  + Puedes usar [ng-annotate](https://github.com/olov/ng-annotate)
+ Gestión de errores
  + Extiende el servicio [$exceptionHandler](https://docs.angularjs.org/api/ng/service/$exceptionHandler) mediante un [decorator](https://docs.angularjs.org/api/auto/service/$provide/#decorator).
  + Crea un servicio para gestionar de forma uniforme los errores.
  + Gestiona y logea todos los errores.
  + Siempre crea nuevas instancias de error frente a throw ""
+ Constantes
  + Crea una constante por cada código de terceros que utilices
  + Crea un servicio de constantes para albergar variables que no cambian y que no vienen de otro servicio.
+ Filtros. Usalos pero para tareas que no requieran un gran esfuerzo de computación
+ Html
  + Evita escribir expresiones complejas
  + Usa ng-bind o ng-cloak para evitar flases derivados de un estado no completo
  + No uses expresiones en atributos src o href si lo requieres usa ng-src o ng-href
  + No uses expresiones en atributos style si lo requieres usa ng-style o ng-class
  + No uses el atributo style
  + Manipulación DOM 
    + No lo hagas
    + Evita el uso de jqlite
    + Si lo requieres realiza las tareas de manipulación del DOM en servicios
+ Configuración
  + No mezcles el código con la configuración
  + Ira bajo el directorio shared/config
  + Será javascript sin más aditivos que el requerido por gestor de paquetes para exponerla.
+ Nombrado
  + Controladores
    + Fichero ctrlName.ctrl.js
    + Angular ctrlName__Ctrl__
  + acciones
    + Fichero serviceName.action.js
    + Angular serviceName__Action__
  + Estado
    + Fichero serviceName.state.js
    + Angular serviceName__State__
  + Configuracion
    + Fichero fileName.config.js
  + directivas
    +  Fichero __xx__DirectiveName.directive.js
    +  Angular __xx__DirectiveName
+ Separa el código de tu aplicación del framework. Para ello en cada subdirectorio declara un fichero moduleDefinition.js que mediante browserify se encarga de incorporar a angular cada uno de los elementos contenidos en el subdirectorio.
+ Estructura de la aplicación
  + Separa en módulos funcionales no en tipos de componentes
  + En el raíz únicamente el app.js
  + En cada directorio que requiera cargar elementos en angular moduleDefinition.js
  + estructura ejemplo
    + app.js
    + shared
      + config
        + routes.config.js
        + ...
      + appDeclaration.js
      + errorManager.js
      + eventManager.js
      + ...
      + moduleDefinition.js
    + AFunctionalModule
      + aView.html
      + acontroller.ctrl.js
      + someActions.action.js
      + theState.state.js
      + moduleDefinition.js
+ Arranque de la aplicación
  + incorpora en la configuración del módulo cualquier elemento que requiera configurarse antes de que se lance la aplicación.
  + Cualquier código que requiera ejecutarse cuando se inicie la aplicación ha de:
    + Ser declarado mediante una factoria
    + Expuesto mediante una función de la factoria
    + ejecutado en el [run block](https://docs.angularjs.org/guide/module#run-blocks)
+ Tests
  + Usa Karma como test runner
  + Unit tests
    + Usa [mocha](http://mochajs.org/) o [jasmine](http://jasmine.github.io/)
    + Usa [Sinon.js](http://sinonjs.org/) para hacer stubs y spies
    + Usa [phantom.js](http://phantomjs.org/) para lanzar los tests en servidor
  + E2E.
    +  Usa [protractor](http://angular.github.io/protractor/#/)
+  Internacionaliacion
  +  Empieza desde el principio y mantenla
  +  Usa [angular-translate](http://www.ng-newsletter.com/posts/angular-translate.html)
+ Librerías / código de terceros
  + Usar NPM / bower
  + Mantelo separado.
  + No lo modifiques de manera local: pull-request o fork
  + Documenta su uso
+ Si quieres generar documentacion considera usar [dgeni](https://github.com/angular/dgeni)
  


