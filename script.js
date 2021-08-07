function createPhoneNumber(numbers){

  let s = '(';
  
  let stringArr = [];
  stringArr = numbers.map(String); 
  for ( let i = 0; i < 3; i++ ) { ;
    s = s + numbers[i]; 
  };

  s += ') ';
  
  for ( let i = 3; i < 6; i++ ) { ;
    s = s + numbers[i]; 
  };
  
  s += '-';

  for ( let i = 6; i < 10; i++ ) { ;
    s = s + numbers[i]; 
  };
  
  return s;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//another solution

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
};
