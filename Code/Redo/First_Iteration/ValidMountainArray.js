var arr = [0,3,2,1]

const mountainArray = (arr) => { 
  let n = arr.length;
  if(n < 3) return false;
  let i = 0;
  while(i + 1 < n && arr[i] < arr[i + 1]){ 
    i++
  }
  if (i === 0 || i === n - 1) return false;

  while( i + 1 < n && arr[i] > arr[i + 1]){ 
    i++
  }
  return i === n - 1
}

console.log(mountainArray(arr))