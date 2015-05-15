(function(){
  var expect = chai.expect;
  describe("javascript: Scope", function(){
    describe("Variable resolution", function(){
      afterEach(function(){
        delete window.a;
      });
      it("LHS non declared variable is autodeclared in the global scope", function(){
        function getaplus(b){
          a = 0;
          return a + b;
        }
        expect(window.a).to.be.undefined;
        expect(getaplus(7)).to.be.equals(7);
        expect(window.a).to.be.equals(0);
      });
      it("LHS non declared variable throws a ReferenceError in strict-mode", function(){
        function getaplus(b){
          "use strict";
          a = 0;
          return a + b;
        }
        expect( function(){ getaplus( 7 ); } ).to.throw(ReferenceError);
      });
      it("RHS non declared variable throws a ReferenceError (even in non-strict-mode )", function(){
        function getaplus(b){
          return a + b;
        }
        expect( function(){ getaplus( 7 ); } ).to.throw(ReferenceError);
      });
    });
    describe("Lexical scope", function(){
      it("Can be cheated by 'with' clause", function(){
        var obj = {b:"una propiedad"};

        expect(window.a).to.be.undefined;
        expect(window.b).to.be.undefined;

        expect(obj.b).to.be.equals("una propiedad");
        expect(obj.a).to.be.undefined;

        with(obj){
          a = 32;
          b = -1;
        };

        expect(obj.b).to.be.equals(-1);
        expect(obj.a).to.be.undefined;

        expect(window.b).to.be.undefined;
        expect(window.a).to.be.equals(32);
      })
    });
    describe("Hoisting", function(){
      it("The var declarations are executed before any code in the scope", function(){
        expect(a).to.be.undefined;
        a = 2;
        expect(a).to.be.equals(2);
        var a;
        expect(a).to.be.equals(2);
      });
      it("funtion declarations are hoisted too", function(){
        expect(noop).to.be.a('function');
        function noop(){};
      });
      it("funtion expresions are not hoisted too", function(){
        expect(noop).to.be.undefined;
        var noop = function(){};
      });
      it("Do not use function declaration. it's behaviour can not be trusted.", function(){
        var a = 0;
        setA();
        if(new Date().getUTCDate() % 2 === 0){
          function setA(){
            a = 3;
          }
        }else{
          function setA(){
            a = 5;
          }
        }
        expect(a).to.be.equals(5);
      });
    });
  });
})()
