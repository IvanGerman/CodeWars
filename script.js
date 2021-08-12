// const getSquares = function (num) {
//   if (num === 1) {
//     alert("there are no consecutive perfect squares for number 1");
//     return;
//   };
//   if (num > 999999) {
//     alert(" the number you typed in is too big");
//     return;
//   };
//   if (num < 1) {
//     alert(" the number you typed in is too small");
//     return;
//   };
//   if (num % 2 === 0) {
//     alert(" no even numbers allowed");
//     return;
//   }

//   let secondNumber = ((num - 1) / 2) ** 2;
//   let firstNumber = secondNumber + num;
//   return (firstNumber + "-" + secondNumber);
// };

// getSquares(9);


//---------------------------------------------------------------------------------------------

//Bubblesort Once

// function bubblesortOnce(a) {

//   const clonedA = [...a];

//   for (let j = 0; j < clonedA.length; j++) {
//     if (clonedA[j] > clonedA[j + 1]) {
//       let x = clonedA[j];
//       clonedA[j] = clonedA[j + 1];
//       clonedA[j + 1] = x;
//     }
//   };

//   return clonedA;
// };

// bubblesortOnce([54, 7, 5, 3, 1, 2, 4, 6, 3]);


//--------------------------------------------------------------------------------------
//Sort with Arrow Functions

// let OrderPeople = function(people){
//   return people.sort( (a, b) => {
//     return a.age - b.age;
//   } ); 
// };


//---------------------------------------------------------------------------------------
// Who's Online?

// const whosOnline = (friends) => {
  
//   let output = {
//     online: [],
//     offline: [],
//     away: []
//   };

//   friends.forEach(element => {
    
//     if ( element.status == "offline" ) {
//       output.offline.push(element.username);
//     };

//     if ( element.status == "online" ) {

//       if ( element.lastActivity <= 10 ) { 
//         output.online.push(element.username);
//       } else {
//         output.away.push(element.username);
//       }
//     };
//   });
  
//   if ( output.online.length == 0 ) { 
//     delete output.online;
//   };
//   if ( output.offline.length == 0 ) {
//     delete output.offline;
//   };
//   if ( output.away.length == 0 ) {
//     delete output.away;
//   };  
//   return output;
// };

// whosOnline([{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }])

//-------------------------------------------------------------------------------------
//Homogenous arrays

// function filterHomogenous(arrays) {
  
//   let result;
//   let resultArr = [];

//   function proveHomo(arr) {

//     if (arr.length == 1) {
//       return true;
//     };
//     if (arr.length == 0) {
//       return false;
//     };

//     for ( let i = 0; i < arr.length -1; i++ ) {
      
//       if ( typeof(arr[i]) !== typeof(arr[i+1]) ) {
//         return false;
//       };
//     };
//     return true;
//   };
 
//   for ( let i = 0; i < arrays.length; i++ ) {
    
//     result = proveHomo(arrays[i]);
//     if (result) {
//       resultArr.push(arrays[i]);
//     }
//   };
//   arrays = resultArr; 

//   return arrays;
// };

// filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3], ['n', 'm', 5, 6]]);

// //another solution

// let filterHomogenous = a => a.filter(b => b.length > 0 && b.every(e => typeof e == typeof b[0]));


//-----------------------------------------------------------------------------------
//Are arrow functions odd?


// function odds(values){

//   return values.filter( (element) => {
//      if ( element % 2 !== 0) {
//        return element;
//      }
//   } ); 
// };

//odds([1, 2, 3, 4, 5, 6]);


//-----------------------------------------------------------------------------------------
//Test Your Knowledge Of Function Scope

// let  add = function(x) {
    
//   return function(y) { return x + y; };
// };

// add(3)(5);


//-----------------------------------------------------------------------------------------
//Run your String


// function runYourString (arg, obj) {

//   return new Function(obj.param, obj.func)(arg);

// };

// runYourString(4, {
//   param: 'num',                   
//   func: 'return Math.sqrt(num)'  
// });


//-----------------------------------------------------------------------------------------
//Factorial Factory

// function factorial (n) {
  
//   if ( n > 1 ) {
//     return n*factorial(n-1);
//   } else {
//     if ( n < 0 ) {
//       return null;
//     } else {
//       return 1;
//     };
//   };
// }

// console.log(factorial(5)); 


//-----------------------------------------------------------------------------------------

//Recursion 101

 

// function solve( a, b ) {
//   while ( a >= (2 * b) || b >= (2 * a) ) {
//     if ( a === 0 || b === 0 ) {
//       return [a, b];
//     } else if ( a >= ( 2 * b ) ) {
//       a = a % ( 2 * b );
//     } else if ( b >= 2 * a ) {
//       b = b% ( 2 * a );
//     }
//   }
//   return [a, b];

// };

// console.log(solve(6,19));

// //another solution

// function solve(a,b){
//   console.log(a,b)
//   if (a === 0 || b === 0){
//     return [a,b]
//   }

//   if(a >= 2*b){
//     a = a% (2*b)
//     return solve(a,b)
//   }

//   if(b >= 2*a){
//     b = b%(2*a)
//     return solve(a,b)
//   }
  
//   return[a,b]
// }

//-----------------------------------------------------------------------------------------
//Decimal to binary converter


function decToBin(d) {
  
  if (d === 1) {
    return '1';
  };
  if (d === 0) {
    return '0';
  };
  return decToBin(Math.floor(d / 2)) + (d % 2);
};

console.log(decToBin(0));