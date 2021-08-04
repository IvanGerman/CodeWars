const getSquares = function (num) {
  if (num === 1) {
    alert("there are no consecutive perfect squares for number 1");
    return;
  };
  if (num > 999999) {
    alert(" the number you typed in is too big");
    return;
  };
  if (num < 1) {
    alert(" the number you typed in is too small");
    return;
  };
  if (num % 2 === 0) {
    alert(" no even numbers allowed");
    return;
  }

  let secondNumber = ((num - 1) / 2) ** 2;
  let firstNumber = secondNumber + num;
  return (firstNumber + "-" + secondNumber);
};

getSquares(9);