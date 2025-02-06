var array = [1, 2, 3, 4, 6, 5, 3, 2]

const quicksort = (array) => { 
  if(array.length <= 1){ 
    return array;
  }

  const pivot = array[array.length - 1];

  const left = array.filter((item) => item < pivot);
  const right = array.filter((item) => item > pivot);

  const equal = array.filter((item) => item === pivot);

  return [...quicksort(left), ...equal, ...quicksort(right)];
}

console.log(quicksort(array));