(function(){
  var expect = chai.expect;
  describe("javascript: tipos", function(){
    describe("Arrays", function(){
      it("Si elimino un último elemento de un array mediante 'delete' actualiza su longitud", function(){
        var miArray = "miArray".split('');
        expect(miArray).to.have.length(7)
        delete miArray[4];
        expect(miArray.length).to.have.length(6);
      });
    });
  });
})()
