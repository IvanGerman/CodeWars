let Calculator = {
  average: function (...numbers) {

    if (numbers.length === 0) {
      return 0;
    };

    let averageNumber = 0;
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i];
    };
    averageNumber = sum / numbers.length
    return averageNumber;
  }
};

Calculator.average(2, 4, 3);