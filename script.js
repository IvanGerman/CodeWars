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

let OrderPeople = function(people){
  return people.sort( (a, b) => {
    return a.age - b.age;
  } ); 
  
}