function stray(numbers) {

  let singleNumber;
  let result = [];

  numbers.forEach((number, index) => number === numbers[0] ? result.push(index) : null);

  if (result.length === 1) {
    singleNumber = numbers[0]; 
    return singleNumber;
  } else {
    for ( let i = 0; i < numbers.length; i++ ) {
      if ( numbers[i] !== numbers[0] ) {   
        return numbers[i];
      }
    }
  }
};

stray([1, 1, 7, 1, 1]);

// another solution

function stray(numbers) {
  var a = numbers.sort();
  
  if(a[0] != a[1]) {
    return a[0]
  } 
  return a[a.length-1]
};

