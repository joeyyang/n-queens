describe("solvers", function() {
  window.displayBoard = function(){};
/*
  describe('findNRooksSolution()', function(){

    it('finds a valid solution for n of 0-8', function(){
      _.range(1, 8).map(function(n){
        var solutionBoard = new Board(findNRooksSolution(n));
        expect(solutionBoard.get('n')).to.equal(n);
        expect(solutionBoard.hasAnyRooksConflicts()).to.be.equal(false);
      });
    });

  });

  describe('countNRooksSolutions()', function(){

    it('finds the number of valid solutions for n of 0-8', function(){
      _.range(0, 8).map(function(n){
        var solutionCount = countNRooksSolutions(n);
        var expectedSolutionCount = [1, 1, 2, 6, 24, 120, 720, 5040][n];
        expect(solutionCount).to.be.equal(expectedSolutionCount);
      });
    });

  });

  describe('findNQueensSolution()', function(){

    it('finds a valid solution for n of 0-8', function(){
      _.range(1, 8).map(function(n){
        var solutionBoard = new Board(findNQueensSolution(n));
        expect(solutionBoard.get('n')).to.equal(n);
        expect(solutionBoard.hasAnyQueensConflicts()).to.be.equal(false);
      });
    });

  });*/

  describe('countNQueensSolutions() (non-bitwise)', function(){

    /*it('finds the number of valid solutions for n of 0-10', function(){
      _.range(0, 11).map(function(n){
        var solutionCount = countNQueensSolutions(n);
        var expectedSolutionCount = [1,1, 0, 0, 2, 10,4, 40, 92, 352, 724][n];
        expect(solutionCount).to.be.equal(expectedSolutionCount);
      });*/
    
    it('finds the solution for n = 8', function(){
        var solutionCount = countNQueensSolutions(8);
        var expectedSolutionCount = 92;
        expect(solutionCount).to.be.equal(expectedSolutionCount);      
    });
    it('finds the solution for n = 9', function(){
        var solutionCount = countNQueensSolutions(9);
        var expectedSolutionCount = 352;
        expect(solutionCount).to.be.equal(expectedSolutionCount);      
    });
    it('finds the solution for n = 10', function(){
        var solutionCount = countNQueensSolutions(10);
        var expectedSolutionCount = 724;
        expect(solutionCount).to.be.equal(expectedSolutionCount);      
    });
    it('finds the solution for n = 11', function(){
        var solutionCount = countNQueensSolutions(11);
        var expectedSolutionCount = 2680;
        expect(solutionCount).to.be.equal(expectedSolutionCount);      
    });
    it('finds the solution for n = 12', function(){
        var solutionCount = countNQueensSolutions(12);
        var expectedSolutionCount = 14200;
        expect(solutionCount).to.be.equal(expectedSolutionCount);      
    });


  });


  describe('countNQueensSolutions() (bitwise)', function(){

    /*it('finds the number of valid solutions for n of 0-10', function(){
      _.range(0, 11).map(function(n){
        var solutionCount = countNQueensSolutions(n);
        var expectedSolutionCount = [1,1, 0, 0, 2, 10,4, 40, 92, 352, 724][n];
        expect(solutionCount).to.be.equal(expectedSolutionCount);
      });*/

    it('finds the solution for n = 8', function(){
        var solutionCount = countNQueensSolutionsB(8);
        var expectedSolutionCount = 92;
        expect(solutionCount).to.be.equal(expectedSolutionCount);      
    });
    it('finds the solution for n = 9', function(){
        var solutionCount = countNQueensSolutionsB(9);
        var expectedSolutionCount = 352;
        expect(solutionCount).to.be.equal(expectedSolutionCount);      
    });
    it('finds the solution for n = 10', function(){
        var solutionCount = countNQueensSolutionsB(10);
        var expectedSolutionCount = 724;
        expect(solutionCount).to.be.equal(expectedSolutionCount);      
    });
    it('finds the solution for n = 11', function(){
        var solutionCount = countNQueensSolutionsB(11);
        var expectedSolutionCount = 2680;
        expect(solutionCount).to.be.equal(expectedSolutionCount);      
    });
    it('finds the solution for n = 12', function(){
        var solutionCount = countNQueensSolutionsB(12);
        var expectedSolutionCount = 14200;
        expect(solutionCount).to.be.equal(expectedSolutionCount);      
    });
    


  });

});
