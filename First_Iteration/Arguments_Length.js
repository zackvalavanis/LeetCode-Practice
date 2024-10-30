let args = [{},null,"3"]



var argumentsLength = function(args) {
  let argumentLength = Array.from(args);
  return argumentLength.length;
};

console.log(argumentsLength(args))