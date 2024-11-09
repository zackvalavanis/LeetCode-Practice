var accounts = [[1,2,3],[3,2,1]]

var maximumWealth = function(accounts) {
  var max = 0;
  for(i = 0; i < accounts.length; i++){ 
    var sum = 0;
    var j = 0;
    var account = accounts[i]
    console.log(account)
    while(j < account.length){
      var number = account[j];
      sum += number
      console.log(sum)
      j++
    }
    if (sum > max){ 
      max = sum;
    }
  }
  return max 
};

console.log(maximumWealth(accounts))