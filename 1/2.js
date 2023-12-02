const input = require('./input1');

const charNumMap = {
  one: 'o1e',
  two: 't2o',
  three: 't3e',
  four: 'f4r',
  five: 'f5e',
  six: 's6x',
  seven: 's7n',
  eight: 'e8t',
  nine: 'n9e',
};

const main = () => {
  let result = 0;
  const lines = input.split('\n');

  lines.forEach((line) => {
    let clonedLine = line;

    Object.keys(charNumMap).forEach((key) => {
      while (clonedLine.includes(key)) {
        clonedLine = clonedLine.replace(key, charNumMap[key]);
      }
    });

    let firstNumber = 0;
    let lastNumber = 0;

    for (let char of clonedLine) {
      if (!isNaN(char)) {
        lastNumber = char;
      }
    }

    for (let char of clonedLine.split('').reverse().join('')) {
      if (!isNaN(char)) {
        firstNumber = char;
      }
    }

    result += parseFloat(`${firstNumber}${lastNumber}`, 10);
  });

  return result;
};

console.log(main());
