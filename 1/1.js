const input = require('./input1');

const main = () => {
  let result = 0;
  const lines = input.split('\n');

  lines.forEach((line) => {
    let firstNumber = 0;
    let lastNumber = 0;

    for (let char of line) {
      if (!isNaN(char)) {
        firstNumber = char;
      }
    }

    for (let char of line.split('').reverse().join('')) {
      if (!isNaN(char)) {
        lastNumber = char;
      }
    }

    result += parseFloat(`${lastNumber}${firstNumber}`, 10);
  });

  return result;
};

console.log(main());
