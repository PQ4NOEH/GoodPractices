(function(){
  var expect = chai.expect;
  describe("javascript: this & object", function(){
    describe('Dynamic this resolution', function(){
      describe('Default mode', function(){
        it('In non strict-mode resolves to the global object', function(){
          function returnThis(){
            return this;
          }
          expect(returnThis()).to.be.an('object');
          expect(returnThis()).to.not.be.empty;
        });
        it('In strict-mode resolves to undefined', function(){
          "use strict";
          function returnThis(){
            return this;
          }
          expect(returnThis()).to.be.undefined;
        });
        it('When calling call/apply with this as null/undefined fall-backs to default-mode', function(){
          var obj = {
            a:34,
            b:"propiedadB",
            getProperty: getProperty
          }
          function getProperty(propertyName){
            return this[propertyName];
          }
          
          expect(obj.getProperty.call(undefined, ['a'])).to.be.undefined;
          expect(obj.getProperty.call(undefined, ['b'])).to.be.undefined;
          window.myVar = "myVar";
          expect(obj.getProperty.call(undefined, ['myVar'])).to.be.equals(window.myVar);
          delete window.myVar;
        });
        it('Indirection', function(){
          function returnProperty(propertyName){
            return this[propertyName];
          }
          window.a = 2;
          var o = {a:4, returnProperty: returnProperty};
          var p = {a:3};
          p.returnProperty = o.returnProperty;
          try{
            expect((p.returnProperty = o.returnProperty)('a')).to.be.equals(2);  
          } finally{
            delete window.a
          }
        });
      });
      describe('Implicit binding', function(){
        it('Resolves to the object context', function(){
          var obj = {
            a:34,
            b:"propiedadB",
            getPropertyA: getPropertyA,
            getPropertyB: getPropertyB
          }
          function getPropertyA(){
            return this.a;
          }
          function getPropertyB(){
            return this.b;
          }
          expect(obj.getPropertyA()).to.be.equals(obj.a);
          expect(obj.getPropertyB()).to.be.equals(obj.b);
        });
        it('If looses the binding it falls-back to default mode resolution', function(){
          var obj = {
            a:34,
            b:"propiedadB",
            getPropertyA: getPropertyA,
            getPropertyB: getPropertyB
          }
          function getPropertyA(){
            return this.a;
          }
          function getPropertyB(){
            return this.b;
          }
          function executefx(fx){
            return fx();
          }
          expect(executefx(obj.getPropertyA)).to.be.undefined;
          expect(executefx(obj.getPropertyB)).to.be.undefined;
        });
      });
      describe('Explicit binding', function(){
        it('You can explicitly set the this binding using call', function(){
          var obj = {
            a:34,
            b:"propiedadB",
            getPropertyA: getPropertyA,
            getPropertyB: getPropertyB
          }
          function getPropertyA(){
            return this.a;
          }
          function getPropertyB(){
            return this.b;
          }
          function executefx(fx){
            return fx.call(obj);
          }
          expect(executefx(obj.getPropertyA)).to.be.equals(obj.a);
          expect(executefx(obj.getPropertyB)).to.be.equals(obj.b);
        });
        it('You can explicitly set the this binding using apply', function(){
          var obj = {
            a:34,
            b:"propiedadB",
            getPropertyA: getPropertyA,
            getPropertyB: getPropertyB
          }
          function getPropertyA(){
            return this.a;
          }
          function getPropertyB(){
            return this.b;
          }
          function executefx(fx){
            return fx.apply(obj);
          }
          expect(executefx(obj.getPropertyA)).to.be.equals(obj.a);
          expect(executefx(obj.getPropertyB)).to.be.equals(obj.b);
        });
        it('You can explicitly set the this binding using bind', function(){
          var obj = {
            a:34,
            b:"propiedadB",
            getPropertyA: getPropertyA,
            getPropertyB: getPropertyB
          }
          function getPropertyA(){
            return this.a;
          }
          function getPropertyB(){
            return this.b;
          }
          function executefx(fx){
            return fx.bind(obj)(obj);
          }
          expect(executefx(obj.getPropertyA)).to.be.equals(obj.a);
          expect(executefx(obj.getPropertyB)).to.be.equals(obj.b);
        });
      });
      describe('Hard binding', function(){
        it('It generates a function from a existing one with the this variable setted', function(){
          var obj = {
            a:34,
            b:"propiedadB",
            getPropertyA: getPropertyA,
            getPropertyB: getPropertyB
          }
          function getPropertyA(){
            return this.a;
          }
          function getPropertyB(){
            return this.b;
          }
          function executefx(fx){
            return fx();
          }
          expect(executefx(obj.getPropertyA.bind(obj))).to.be.equals(obj.a);
          expect(executefx(obj.getPropertyB.bind(obj))).to.be.equals(obj.b);
        })
      });
    });
    describe('Objects', function(){
      describe('property descriptor', function(){
        it('Object.getOwnPropertyDescriptor gets an object with properties of the given property', function(){
          var obj = {
            a:1
          };
          var propDescriptor = Object.getOwnPropertyDescriptor(obj, 'a');
          expect(propDescriptor).to.be.an('object');
          expect(propDescriptor).to.have.keys(['value','writable', 'enumerable', 'configurable']);
        });
        it('An atemp to write a readonly property will be ignored in non strict-mode', function(){
          var obj = {};
          Object.defineProperty(obj, 'a', {value:2, writable:false, enumerable: true, configurable: true});
          expect(obj.a).to.be.equals(2);
          obj.a = "otra cosa";
          expect(obj.a).to.be.equals(2);
        });
        it('An atemp to write a readonly property will throw a TypeErrorr in strict-mode', function(){
          "use strict";
          var obj = {};
          Object.defineProperty(obj, 'a', {value:2, writable:false, enumerable: true, configurable: true});
          
          expect(function(){ obj.a = "otra cosa";}).to.throw(TypeError);
        });
        it('We can change configurable from true to false', function(){
           var obj = {
              a:1
            };
            expect(Object.getOwnPropertyDescriptor(obj, 'a').configurable).to.be.true;
            Object.defineProperty(obj, 'a', {configurable: false});
            expect(Object.getOwnPropertyDescriptor(obj, 'a').configurable).to.be.false;
        });
        it('An atemp to change configurable from false to true will be ignored in non strict-mode', function(){
          var obj = Object.defineProperty({}, 'a', {value:2, writable:true, enumerable:true, configurable: false});
          expect(Object.getOwnPropertyDescriptor(obj, 'a').configurable).to.be.false;
          Object.defineProperty(obj, 'a', {configurable: true});
          expect(Object.getOwnPropertyDescriptor(obj, 'a').configurable).to.be.false;
        });
        it('An atemp to change configurable from false to true will throw a TypeError in strict-mode', function(){
          var obj = {a:2};
          Object.defineProperty(obj, 'a', {configurable: false});
          
          expect(function(){
            Object.defineProperty(obj, 'a', {configurable: true});
          }).to.throw(TypeError);
        });
        it('Even non being configurable we can still set writable to false', function(){
          var obj = {};
          Object.defineProperty(obj, 'a', {value: 2, writable: true, enumerable:true, configurable: false});
          expect(Object.getOwnPropertyDescriptor(obj, 'a').writable).to.be.true;
          Object.defineProperty(obj, 'a', {writable: false});
          expect(Object.getOwnPropertyDescriptor(obj, 'a').writable).to.be.false;
        });
        it('A non configurable property can not be deleted', function(){
          var obj = Object.defineProperty({}, 'a', {value:2, writable:true, enumerable:true, configurable: false});
          delete obj.a;
          expect(obj.a).to.be.equals(2);
        })
      })
    })
  });
})()
