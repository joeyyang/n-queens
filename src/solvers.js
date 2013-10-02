/*           _                    
   ___  ___ | |_   _____ _ __ ___ 
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting

// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n){
  var board = new Board({n: n});
  var solution = board.rows();
  for (var i = 0; i < n; i++){
    solution[i][i] = 1;
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n){
  // Solving this problem is equivalent to saying that every rook is alone in its row and column.
  // Therefore, we may represent all valid solutions, and only valid solutions, as an array of n entries whose ith entry
  // specifies the column index of the rook in the ith row,  where each number between 1 and n appears exactly once.
  // This establishes a 1-1 mapping between permutations of the array [1,..., n] and solutions to the n-rooks problem.
  // The number of permissible permutations on this array, and thus the number of solutions to the n-rooks problem, is equal to factorial(n).

  // This represents an O(n) solution to this problem, which we believe is the maximally efficient solution to this problem.
  // We did this for America, God shed his grace on thee. 

  var product = 1;
  var factorial = function(m){
    if (m === 0 || m === 1){
      return 1;
    } else if (m > 1) {
      product = m * factorial(m-1);
    }
    return product;
  }
  

  var solutionCount = factorial(n); 
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
