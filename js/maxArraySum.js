/**
 * Finds the maximum sum of any 2 numbers in an array. Keeping in mind, we aren't accounting
 * for business logic on how it would handle invalid data in the array, so making assumption filtering
 * is good enough.
 * Regular array sort doesn't work correctly for what we need so simple number comparisons added.
 * 
 */

//Filter array
const filterArray = arr => {
  if (arr && arr.length > 0) {
    return arr.filter(val => val && typeof val === 'number')
  }
}

const isValid = arr => arr && arr.length > 3;

const inputSet1 = [-123, -9, 0, 4, 8, 10];
const inputSet2 = [];
const inputSet3 = undefined;
const inputSet4 = [NaN, "Test", 13];
const inputSet5 = [123, 4, -1259, 3, NaN, "Test", 13];

const compareNumbers = (a, b) => {
  return a - b;
}

const maxSum = inputSet => {
  console.log('testing input set', inputSet)
  const data = filterArray(inputSet);
  if (isValid(data)) {
    console.log('calculatiing input set ', inputSet)
    const length = data.length;
    data.sort(compareNumbers);
    console.log('input set sorted', data)
    const bottom = data[0] * data[1];
    const top = data[data.length - 2] * data[data.length - 1]
    if (top > bottom) {
      console.log('largest output is ', top);
      return top;
    } else if (bottom > top) {
      console.log('largest output is ', bottom);
      return bottom;
    }
    console.log('Equal sums found during calculation')
    return top;
  }
}

maxSum(inputSet1);
maxSum(inputSet2);
maxSum(inputSet3);
maxSum(inputSet4);
maxSum(inputSet5);