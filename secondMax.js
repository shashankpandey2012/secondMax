
/**
 * Returns the second max number from the array of string numbers.
 *
 * @param {array} array of String numbers.
 * @returns {?number || ?string} Returns the secondMax item present in the array
 *   if no item is present in array or all numbers are same returns -1.
 *   if item string length is not a number or length > 1024 then returns -1.
 */
function getSecondMax(array) {
  try {
    const len = array.length;
    if (len !== undefined) {
      if (len === 0) {
        // No Item in Array
        return -1;
      } else {
        let largest = Number.MIN_SAFE_INTEGER;
        let secondLargest = Number.MIN_SAFE_INTEGER;
        for(let i = 0; i< len; i++) {
          // console.log("Num", array[i]);
          // console.log("Largest", largest);
          // console.log("Second Largest", secondLargest);
          if (typeof parseInt(array[i]) === 'number' && array[i].length <= 1024 ) {
            let parsedNum = parseInt(array[i]);
            if (parsedNum > largest) {
              secondLargest = largest;
              largest = parsedNum;
            }
            if (parsedNum < largest && parsedNum > secondLargest) {
              secondLargest = parsedNum;
            }
          } else {
            // If item is not a number or length is more than 1024 return -1
            secondLargest = Number.MIN_SAFE_INTEGER;
            break;
          }
        }
        if (secondLargest === Number.MIN_SAFE_INTEGER) {
          // No Item found second largest may be bcz of all numbers are same or
          // Item Length is greater the 1024 or
          // Item is not a number
          return -1;
        }
        return secondLargest.toString();
      }
    } else {
      // Provide an array
      return "Provide an array";
    }
  } catch(e) {
    return -1;
  }
}

// const num = getSecondMax(["5", "4", "3" , "2"]);
// console.log('The Second Largest Number is : ', num);

const testCases = [
  {
    array: ["3", "-2"],
    output: "-2"
  },
  {
    array: ["5", "5", "4", "2"],
    output: "4"
  },
  {
    array: ["4", "4", "4"],
    output: -1
  },
  {
    array: [],
    output: -1
  },
  {
    array: ["-214748364801","-214748364802"],
    output: "-214748364802"
  },
  {
    array: ["Hello", "2"],
    output: -1
  }
];

testCases.forEach((testCase) => {
  const num = getSecondMax(testCase.array);
  if (num === testCase.output) {
    console.log("Test Passed ++ ");
  } else {
    console.log("Test Failed --");
  }
});
