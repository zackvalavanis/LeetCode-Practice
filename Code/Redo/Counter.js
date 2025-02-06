n = 10;


var createCounter = function(n) {
  return function() {
    return n++
  };
};

var create = createCounter(n)
console.log(create(n))