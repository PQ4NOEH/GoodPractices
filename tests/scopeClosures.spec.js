(function(){
  var expect = chai.expect;
  describe("javascript: Scope", function(){
    describe("Variable resolution", function(){
      afterEach(function(){
        delete window.a;
      })
      
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
  });
})()
