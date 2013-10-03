var makeBBoard = function(n){
  var instance = {};
  instance.arr = [];
  for (var i = 0; i < n; i++){
    instance.arr[i] = 0;
  }

  instance.colTable = {};
  for (var i = 0; i < n; i++) {
    instance.colTable[1 << i] = n-1-i;
  }

  instance.majorD = function(row, val){
    return colTable[val] - row;
  }

  instance.minorD = function(row, val){
    return colTable[val] + row;
  }

  instance.majorDiagCrumbs = {};

  for(var i = (- 1 * n ) + 1; i < n; i++){
    majorDiagCrumbs[i] = false;
  }

  instance.minorDiagCrumbs = {};

  for(var i = 0; i < 2 * n - 1 ; i++){
    minorDiagCrumbs[i] = false;
  }

  instance.hasAnyColConflicts = function(){
    var xorsum = 0;
    var sum = 0;
    for (var i = 0; i < n; i++){
      xorsum ^= instance.arr[i];
      sum += instance.arr[i];
    }
    var xor2 = xorsum ^ sum;
    for (i = 0; i < n; i++){
      if (!((sum >> i) % 2)) {
        if (xor2 >> i) return true;
      }
    }
    return false;
  };

  // instance.hasAnyRowConflicts = function(){
  //   //do we need this?
  // };

  instance.hasAnyMajorDiagonalConflicts = function(){

    for(var i = (- 1 * n ) + 1; i < n; i++){
      if(instance.majorDiagCrumbs[i]) return true;
    }
    return false;
  };

  instance.hasAnyMinorDiagonalConflicts = function(){
    for(var i = 0; i < 2 * n - 1 ; i++){
      if(instance.minorDiagCrumbs[i]) return true;
    }
    return false;
  }; 

  instance.hasAnyRooksConflicts = function(){
    return /*this.hasAnyRowConflicts() ||*/ this.hasAnyColConflicts();
  }

  instance.hasAnyQueenConflicts = function(){
    return this.hasAnyRooksConflicts() || 
           this.hasAnyMajorDiagonalConflicts() || 
           this.hasAnyMinorDiagonalConflicts();
  };

  return instance;
};

 