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
//     alert(" no even numbers almined");
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


// function decToBin(d) {
  
//   if (d === 1) {
//     return '1';
//   };
//   if (d === 0) {
//     return '0';
//   };
//   return decToBin(Math.floor(d / 2)) + (d % 2);
// };

// console.log(decToBin(0));


//-----------------------------------------------------------------------------------------
//Brackets Issue

// const OPEN_BRACKETS = ['(', '{'];
// const BRACKETS_PAIR = {
//   [')']: '(',
//   ['}']: '{'
// };

// function areBracketsOK(str) {

//   let stack = [];

//   for (let i = 0; i < str.length; i++) {
//     let currentSymbol = str[i];

//     if (OPEN_BRACKETS.includes(currentSymbol)) {

//       stack.push(currentSymbol);

//     } else {

//       if (stack.length === 0) {
//         return false;
//       };

//       let topElement = stack[stack.length - 1];
//       if (BRACKETS_PAIR[currentSymbol] === topElement) {
//         stack.pop();
//       } else {
//         return false;
//       };
//     }
//   }
//   return stack.length === 0;
// }


// console.log(areBracketsOK('()()()'));
// console.log(areBracketsOK('()(()()'));
// console.log(areBracketsOK('(()()())'));


//-----------------------------------------------------------------------------------------------------
// Brackets Issue extended version

// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];


// function check(str, bracketsConfig) { 

//   const openBrackets = [];
//   const bracketsPairs = {};
//   const similarPairElements = [];
  
//   for ( let i = 0; i < bracketsConfig.length; i++ ) {
//     openBrackets.push(bracketsConfig[i][0]);
//     bracketsPairs[bracketsConfig[i][1]] = bracketsConfig[i][0];
//     if ( bracketsConfig[i][0] === bracketsConfig[i][1] ) {
//       similarPairElements.push(bracketsConfig[i][0]);
//     }
//   };

//   let stack = [];

//   for (let i = 0; i < str.length; i++) {
//     let currentSymbol = str[i];

//     if (openBrackets.includes(currentSymbol)) {

//       if ( stack.includes(currentSymbol) && similarPairElements.includes(currentSymbol) ) {
//         stack.pop();
//         continue;
//       };

//       stack.push(currentSymbol);

//     } else {

//       if (stack.length === 0) {
//         return false;
//       };

//       let topElement = stack[stack.length - 1];
//       if (bracketsPairs[currentSymbol] === topElement) {
//         stack.pop();
//       } else {
//         return false;
//       };
//     }
//   }
//   return stack.length === 0;

// };

// console.log(check('||', config4)); 
//console.log(check('([{}])', config3));
//check('111115611111111222288888822225577877778775555666677777777776622222', config6);


//-----------------------------------------------------------------------------------------------------
// Towel Sort


// function towelSort (matrix) {

//   if ( matrix === undefined || matrix.length === 0 ) {
//     return [];
//   };
  
//   let resultArray = [];

//   for ( let i = 0; i < matrix.length; i++ ) { //debugger

//     if ( i % 2 !== 0 ) { console.log('i:',matrix[i]);
//       matrix[i] = matrix[i].reverse(); console.log('matrix[i] = ', matrix[i]);
//     };

//     for ( let j = 0; j < matrix[i].length; j++ ) { console.log('matrix[i][j] = ', matrix[i][j]);
//        resultArray.push(matrix[i][j]);
//     };
//   };
//   console.log('resultArray = ', resultArray);
//   return resultArray;
// };

// const matrix = [
//   [1, 2],
//   [3, 4],
// ];
// towelSort(matrix);




//-----------------------------------------------------------------------------------------------------
// Matrix creation

// function getMatrix(number) {
   
//   let firstArr = [];
 
//   for ( let i = 0; i < number; i++ ) {
//     let secondArr = [];
//     for ( let j = 0; j < number; j++ ) {
//       if ( i === j ) {
//         secondArr.push(1);
//       } else {
//         secondArr.push(0)
//       }
//     };
//     firstArr.push(secondArr);
//   }

//   return firstArr;
// };

// // another solution
// function getMatrix2(number) {
//   const matrix = [];
//   for (let i = 0; i < number; i++) {
//     matrix[i] = Array(number).fill(0)
//     matrix[i][i] = 1;
//   }
//   return matrix;
// } 

// console.log(getMatrix(5)); 


//-----------------------------------------------------------------------------------------------------
// Basics 04: Rotate Matrix

// let rotateMatrix = arr => { 

//   const subArrNumber = arr[0].length; 
//   const subArrLength = arr.length;    
//   const resultArr = [];

//   for ( let i = subArrNumber - 1; i >= 0; i-- ) {
    
//     const temporaryArr = [];
//     for ( let j = 0; j < subArrLength; j++ ) {
//       temporaryArr.push(arr[j][i]);
//     };

//     resultArr.push(temporaryArr);
//   }
//   return resultArr;
// }

// console.log(rotateMatrix([[-1,4,5],[2,3,4]]));

//-----------------------------------------------------------------------------------------------------
// Convert Hash To An Array


// function convertHashToArray(hash){
//   let hashSorted = Object.keys(hash).sort().reduce((r, k) => (r[k] = hash[k], r), {});
//   return Object.entries(hashSorted);
// };

// console.log(convertHashToArray({name: "Jeremy", age: 24})); 


//-----------------------------------------------------------------------------------------------------
// Element equals its index

//function indexEqualsValue(a) { 

  // const allIndexes = [];
  // for ( let i = 0; i < a.length; i++ ) {
  //   if ( a[i] == i ) {
  //     allIndexes.push(i);
  //   }
  // }
  
  // if ( allIndexes.length === 0 ) {
  //   return -1;
  // } else {
  //   return Math.min(...allIndexes);
  // };


  // for ( let i = 0; i < a.length; i++ ) {
  //   if ( a[i] == i ) {
  //     return i;
  //   }
  // };
  // return -1;


//   function findInd(arr, min, max) {

//     if ( min > max ) {
//       return -1;
//     }

//     let avg = Math.floor( (max + min) / 2 );

//     if ( arr[avg] === avg ) {
//       let value = findInd( arr, min, avg - 1 );
//       return value !== -1 && value < avg ? value : avg;
//     };

//     if ( arr[avg] > avg ) {
//       return findInd( arr, min, avg - 1 );
//     } else {
//       return findInd( arr, avg + 1, max );
//     };
  
//   };

//   return findInd( a, 0, a.length - 1 );
// }

// console.log(indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]));


//-----------------------------------------------------------------------------------------------------
// Array.diff


// function arrayDiff(a, b) {

//   // works for simple tests
//   // let a2 = [...new Set(a)];

//   // for (let i = 0; i < b.length; i++) {
    
//   //   for (let j = 0; j < a2.length; j++) {

//   //      if ( a2[j] === b[i] ) {

//   //        const index = a2.indexOf(a2[j]);
//   //        a2.splice(index, 1);

//   //      };
//   //   } 
//   // }
//   // return a2;
//   return a.filter( element => !b.includes(element) );
// };

// console.log(arrayDiff([1,2,3], [1,2]));  



//-----------------------------------------------------------------------------------------------------
//Absent vowel

function absentVowel(x){

  if ( x.match(/a/gi) === null) return 0;
  if ( x.match(/e/gi) === null) return 1;
  if ( x.match(/i/gi) === null) return 2;
  if ( x.match(/o/gi) === null) return 3;
  if ( x.match(/u/gi) === null) return 4;
  
};

console.log(absentVowel("John Doe hs seven red pples under his bsket" ));