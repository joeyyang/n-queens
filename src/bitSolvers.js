// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  if (n === 0) return 1;
  var solutionCount = 0; 

  //initialize n x n board
  var board = makeBBoard(n);

  // backtracking algorithm with no use of symmetry or other further optimization

  // for every row, run recursive routine:
  //   place a queen in 0th column of the row.
  //   if no queen conflict:
  //     if in row n-1 (last row), increment solnCounter
  //     else move to next row. (recur)
  //   if queen conflict:
  //     if not in last column:
  //       place queen in next column
  //     else:
  //       return queen conflict indicator, continue algorithm at previous row

  //   when we try to move the queen in the 0th row to column n, we return solnCounter.  
  var setDiags = function(col, row, status){
    board.majorDiagCrumbs[col-row] += status;
    board.minorDiagCrumbs[col+row] += status;
  }

  var queensBitTrack = function(row){

    for(var col = 0; col < n; col++){
      debugger;
      board.arr[row] = 1 << col;
      setDiags(col, row, 1);
      if(! board.hasAnyQueensConflicts()){
        if (row === (n-1)){
          solutionCount++;
          board.arr[row] = 0;
          setDiags(col, row, -1);      
        } else {
          // setDiags(col, row, true);
          queensBitTrack(row+1);
          board.arr[row] = 0;
          setDiags(col, row, -1);      
        }
      } else{
        board.arr[row] = 0;
        setDiags(col, row, -1);      
        //board.rows()[row][col] = 0;
      }   
    }
  }; 

  queensBitTrack(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
