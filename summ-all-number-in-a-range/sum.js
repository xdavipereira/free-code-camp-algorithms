function sumAll(arr) {
  var x = [];

  for(var i = Math.min(...arr); i <= Math.max(...arr); i++){
    x.push(i);
  }
  return x.reduce(function(a,b){
      return a+b;
  });
}

sumAll([1, 4]);
