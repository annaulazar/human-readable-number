
module.exports = function toReadable (number) {
  let numbers = String(number).split('').map((value) => Number(value));
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let decades = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
      if (i === 0 && numbers.length > 1 && numbers[numbers.length - 2] !== 1 && numbers[numbers.length - 1] !== 0
          || numbers.length === 1) {
          result.push(units[numbers[numbers.length - 1]]);
      }
      else if (i === 1 && numbers[numbers.length - 2] === 1) {
          let temp = Number([1, numbers[numbers.length - 1]].join(''));
          result.push(units[temp]);
      }
      else if (i === 1 && numbers[numbers.length - 2] !== 0) {
          result.push(decades[numbers[numbers.length - 2]]);
      }
      else if (i === 2) {
          result.push('hundred');
          result.push(units[numbers[0]]);
      }
  }

  return result.reverse().join(' ')
}



// console.log(module.exports(109))
