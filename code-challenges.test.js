// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe ( "shuffle" , () => {
  const Expected1 = ["yellow", "blue", "pink", "green"]
  const Expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    expect (shuffle(colors1)).toEqual(expect.arrayContaining(Expected1))
    expect (shuffle(colors2)).toEqual(expect.arrayContaining(Expected2))

  })
})

//GOOD FAIL:

// FAIL  ./code-challenges.test.js
// shuffle
//   ✕ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)
// ● shuffle › takes in an array, removes the first item from the array and shuffles the remaining content

//   ReferenceError: shuffle is not defined


// b) Create the function that makes the test pass.


// PSEUDOCODE:

// INPUT: An array of strings
// OUTPUT: An array of strings that had the element in the 0 index removed and the remaining elements shuffled
// PROCESS:
// Create a function called shuffle that will remove the element in the 0th index and shuffle the remaining elements
// Create a for loop that will Loop through the array in reserve order
// Use mutating method .shift , which removes the first element of an array
// Once .shift has been applied, use the fisher gates algorithm which takes an element and swapts it with another element at a random position
// Create a variable called randomPosition and set it equal to a random position by using Math.random. 
// Since math.random produces a decimal, we will wrap it in math.floor since we want a whole number.
// Swap elements
// Return array
// callback function and use test variables given


const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


function shuffle(array) {
  array.shift
  for (let i = array.length - 1; i > 0; i--) {
    let randomPosition = Math.floor(Math.random() * (i + 1))
    let newArr = array[i]
    array[i] = array[randomPosition]
    array[randomPosition] = newArr
  }
  return array
} 

console.log(shuffle(colors1))
console.log(shuffle(colors2))


// PASSING TEST:

// console.log
//     [ 'blue', 'yellow', 'pink', 'purple', 'green' ]
//       at Object.log (code-challenges.test.js:78:9)
//   console.log
//     [
//       'aquamarine',
//       'periwinkle',
//       'ochre',
//       'saffron',
//       'chartreuse',
//       'indigo'
//     ]
//       at Object.log (code-challenges.test.js:80:9)
//  PASS  ./code-challenges.test.js
//   shuffle

 

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.


describe ( "endTally", () => {
  it ("takes in an object that contains up votes and down votes and returns the end tally.", () => {
    expect (endTally(votes1)).toEqual((11))
    expect (endTally(votes2)).toEqual((-31))
  })
})


// GOOD FAIL:

// FAIL  ./code-challenges.test.js
// endTally
//   ✕ takes in an object that contains up votes and down votes and returns the end tally. (1 ms)
// ● endTally › takes in an object that contains up votes and down votes and returns the end tally.

//   ReferenceError: endTally is not defined


// b) Create the function that makes the test pass.


// PSEUDOCODE:

// Input: Object values
// Output: Number representing the end tally (difference)
// PROCESS:
// Create a function called endTally which that takes in an object that contains up votes and down votes and returns the end tally.
// Use the object.value method, to get an array of the objects value.This static method returns an array of  given objects own enumerable string-keyednproperty values
// Use the .reduce method, to iterate over the array. This method executes a user-supplied "reducer". 
// To get the total value, we will be subtracting , since downvotes has the number that will be reduced from the upvotes. Subtracting the upvotes an downvotes gives us the difference, which is what we need.
// Callback function using given variables


const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

const endTally = obj => {
  return Object.values(obj).reduce((a,b) => {
  return a - b 
})
}

console.log(endTally(votes1))
console.log(endTally(votes2))

// PASSING TEST:
// console.log
//     11
//       at Object.log (code-challenges.test.js:159:9)
//   console.log
//     -31
//       at Object.log (code-challenges.test.js:160:9)
//  PASS  ./code-challenges.test.js
//   endTally



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe ("noDups", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values. ", () => {
    expect (noDups(dataArray1,dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// GOOD FAIL:
// FAIL  ./code-challenges.test.js
//   noDups
//     ✕ takes in two arrays as arguments and returns one array with no duplicate values. 
//   ● noDups › takes in two arrays as arguments and returns one array with no duplicate values. 
//     ReferenceError: noDups is not defined


// b) Create the function that makes the test pass.


// PSEUDOCODE:

// Input: Arrays made up of strings 
// Output: Combination of the ariginal arrays with no duplicates
// PROCESS:
// Create a function called noDups, which takes in two arrays and returns one array with no duplicate values
// Create a variable for the new combined arrray called comArr
// Use set which lets you store unique values of any type. Set doesnt support duplicate items, therefore it will remove all the redundant items found in its collection.
// Callback function and use test variables given as arguments


const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// // // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

const noDups = (arr1, arr2) => {
  let comArr = [...new Set([...arr1,...arr2])]
  return comArr
} 
console.log(noDups(dataArray1,dataArray2))

// PASSING TEST:

// console.log
//     [
//       'array',
//       'object',
//       'number',
//       'string',
//       'Boolean',
//       'null',
//       'undefined'
//     ]
//       at Object.log (code-challenges.test.js:198:9)
//  PASS  ./code-challenges.test.js
//   noDups





