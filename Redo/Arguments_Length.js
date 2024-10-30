args = [1, 2, 3]

var argumentsLength = function(...args) {
  return args.length
};

console.log(argumentsLength(...args))