(function(){
  "use strict"
  var expect = chai.expect;
  describe("javascript: tipos", function(){
    describe("Value vs reference", function(){
      it("Los valores asignados por valor son inmutables", function(){
        var a,b;
        a = 25;
        b = a;
        expect(a).to.be.equals(b);
        b = "texto";
        expect(a).not.to.be.equals(b);
        expect(a).to.be.equals(25);
        expect(b).to.be.equals("texto");
      });
      it("Los valores por referencia se pueden modificar pero intercambiar", function(){
        var a,b;
        a = {propUno:"una propiedad"};
        b = a;
        expect(a).to.be.equals(b);
        b.propUno = "texto";
        expect(a).to.be.equals(b);
        b = {};
        expect(a).to.be.deep.equals({propUno:"texto"});
        expect(b).to.be.deep.equals({});
      });
    });
    describe("Arrays", function(){
      it("Si elimino un elemento de un array mediante 'delete' NO actualiza su longitud", function(){
        var miArray = "miArray".split('');
        expect(miArray).to.have.length(7)
        delete miArray[4];
        expect(miArray).to.have.length(7);
        expect(miArray).to.have.members(['m','i','A','r','a','y']);
      });
    });
    describe("Numbers", function(){
      it("Se pueden representar en base-10", function(){
        expect(32).to.be.equals(32);
      });
      it("Se pueden representar con notación exponencial", function(){
        expect(1E6).to.be.equals(1000000);
        expect(0.23E3).to.be.equals(230);
      });
      it("Se pueden representar con notación hexadecimal", function(){
        expect(0xf3).to.be.equals(243);
        expect(0xe8).to.be.equals(232);
      });
      it("Se pueden representar con notación octal", function(){
        expect(0o363).to.be.equals(243);
        expect(0o45).to.be.equals(37);
      });
      it("Number.isInteger indica si un número es un entero.", function(){
        expect(Number.isInteger(32)).to.be.true;
        expect(Number.isInteger(32.56)).to.be.false;
      });
      describe("Coma flotante", function(){
        it("0.2 más 0.1 NO es 0.3", function(){
          expect(0.2 + 0.1).to.not.be.equals(0.3);
        });
        it("Usando Number.epsilon 0.2 más 0.1 si es 0.3 (ES6)", function(){
          function numbersAreEqual(a, b){
            return Number.EPSILON 
              ? Math.abs( a - b) < Number.EPSILON
              : a === b;
          }
          expect(numbersAreEqual(0.2 + 0.1, 0.3)).to.be.true;
        });  
      });
      describe("Not a number", function(){
        function generarNaN(num){
          return num / "un literal";
        }
        it("Es un número", function(){
          expect(generarNaN(0x65)).to.be.a('number');
          expect(generarNaN(0.68E3)).to.be.a('number');
        });
        it("Es distinto de NaN.", function(){
          expect(generarNaN(25)).to.not.be.equals(NaN);
          expect(generarNaN(89.012)).to.not.be.equals(NaN);
        });
        it("Es distinto de si mismo.", function(){
          var sut = generarNaN(25);
          expect(sut).to.not.be.equals(sut);
        });
        it("isNaN indica si el valor es NaN.", function(){
          expect(isNaN(generarNaN(25))).to.be.true
          expect(isNaN(generarNaN(89.012))).to.be.true;
          expect(isNaN(NaN)).to.be.true;
        });
        it("isNaN retorna true para tipos no numéricos.", function(){
          expect(isNaN("foo")).to.be.true;
          expect(isNaN(function(){})).to.be.true;
          expect(isNaN(undefined)).to.be.true;
        });
        it("Number.isNaN retorna false para tipos no numéricos. (ES6)", function(){
          expect(Number.isNaN("foo")).to.be.false;
          expect(Number.isNaN(function(){})).to.be.false;
          expect(Number.isNaN(undefined)).to.be.false;
        });
      });
      describe("Infinity", function(){
        it("A variable overflow in a math operation generates an Infinity value", function(){
          expect(1 / 0).to.be.equals(Number.POSITIVE_INFINITY);
          expect(-1 / 0).to.be.equals(Number.NEGATIVE_INFINITY);
          expect(Number.isFinite((-1 / 0))).to.be.false;
          expect(Number.isFinite((1 / 0))).to.be.false;
        });
      });
      describe("Negative Zero", function(){
        function generateNegativeZero(){
          return 0 * -1;
        }
        it("Si se pasa a string pasa como 0", function(){
          expect(generateNegativeZero().toString()).to.be.equals("0");
          expect(JSON.stringify(generateNegativeZero())).to.be.equals("0");
        });
        it("Si se pasa de string a number pasa como -0", function(){
          expect(parseInt("-0")).to.be.equals(-0);
          expect(+"-0").to.be.equals(-0);
          expect(Number("-0")).to.be.equals(-0);
          expect(JSON.parse("-0")).to.be.equals(-0);
        });
        it("Al compararlo con un cero positivo indica que son iguales", function(){
          expect(-0 == 0).to.be.true;
          expect(-0 === 0).to.be.true;
        })
      });
    });
    describe("natives", function(){
      it("Podemos ver el tipo interno parseando el tipo", function(){
         function parseNative(obj){
          return Object.prototype.toString.call(obj);
         }
         expect(parseNative(new Boolean(false))).to.match(/Boolean/);
         expect(parseNative(Array([]))).to.match(/Array/);
         expect(parseNative(new Number(12))).to.match(/Number/);
         expect(parseNative(new String())).to.match(/String/);
      })
      it("new Boolean(false) es truthy", function(){
        expect(new Boolean(false)).to.be.ok;
      });

    })  
  });
})()
