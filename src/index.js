  module.exports = function toReadable(number) {
  const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const numDeclension = ['thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];
  const exceptions = ['ten', 'eleven', 'twelve'];
  const endings = ['een', 'y'];

  const inputToString = number + '';
   
  const checker = x => typeof x === 'undefined' ? "" : ` ${x}`

  const getTwo = (x) => {
    let ans = '';
    if (+x === 0) return ""
    if (+x >= 1 && +x <= 9) return numbers[+x - 1]
    if (+x === 14) return 'fourteen'
    if (+x >= 10 && +x <=12) return exceptions[x[x.length-1]];
    if (+x > 12 && +x < 20) return numDeclension[x[x.length-1] - 3] + endings[0];
    if (+x >= 20 && +x < 30) return 'twenty' + checker(numbers[x[x.length-1] - 1]);
    if (+x >= 30 && +x < 100) return numDeclension[x[x.length-2] - 3] + endings[1] + checker(numbers[x[x.length-1] - 1]);
  }

  if (inputToString.length === 1) {
    if (number === 0) return 'zero'
    return numbers[number - 1];
  }

  if (inputToString.length === 2) {
    return getTwo(inputToString.slice(-2));
  }

  if (inputToString.length === 3) {
      return (numbers[+inputToString[0] - 1] + " hundred" + " " + getTwo(inputToString.slice(-2))).trim()
  }

}
