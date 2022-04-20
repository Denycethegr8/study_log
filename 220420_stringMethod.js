// 1. .findIndex() method 

const randomNums = [184, 50, 265, 25, 856];
const lessThanTen = randomNums.findIndex(num => num < 100);
console.log(lessThanTen + '\n'); 
// -> 1 (the index 1, which is 50)

/* .findIndex() method runs through all elements in an array to find and return the first index -not the element itself - of an element that meets the condition */


// 2. .reduce() method

const numbers = [1, 2, 3, 4, 5];
const newNums = numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(newNums + '\n'); 
// -> 120 (multiplication of all elements 1*2*3*4*5)


/* .reduce() method takes callback function and other argument(s) as parameters. The function takes the first element or the last parameter as the first accumulator, and currentValue gets involved to create the next accumulator which returns and involves currentValue again till the function runs through all elements in an array and return the final and only value */

const newSum = numbers.reduce((accumulator1, currentValue1) => {
    console.log(`The value of accumulator: ${accumulator1}`);
    console.log(`The value of currentValue: ${currentValue1}`);
    return accumulator1 + currentValue1
    }, 10);
console.log(newSum + '\n');

/* This one shows how the iterator works. It first takes the last parameter as the first accumulator and logs the string. -> 'The value of accumulator: 10'

The first element in the array 1 becomes the first currentValue and the function logs the 2nd string. -> 'The value of currentValue: 1' 

The the function returns the added(or whatever the function is supposed to do) value of those two (accumulator and currentValue) to the accumulator back again and the circle goes on till it involves all elements in the array. 

-> 
The value of accumulator: 10
The value of currentValue: 1
The value of accumulator: 11
The value of currentValue: 2
The value of accumulator: 13
The value of currentValue: 3
The value of accumulator: 16
The value of currentValue: 4
The value of accumulator: 20
The value of currentValue: 5
25

*/


// 3. .some() method

const someNums = [51, 100, 5000, 200];
console.log(someNums.some(bigNums => bigNums > 1000) + '\n');
// -> true

/* .some() method checks whether the array contains any element which meet the condition stated in the callback function. It then returns true or false. */


// 4. .every() method

const animals = ['lion', 'tiger', 'otter', 'fox'];
const fourChar = animals.every(animalFour => animalFour.length >= 4);
console.log(fourChar + '\n'); //-> false

const threeChar = animalThree => animalThree.length >= 3;
console.log(animals.every(threeChar)); // -> true

/* .every() method checks whether every element meets the condition stated in the callback function. It then returns true or false. 

For this method, I used both function expression using method and just an arrow function expression.

The function using method can be logged only calling its name (in this case 'fourChar') as I have done since yesterday but the function without method should be called with method attached obviously. */


// 5. .concat() method

const multiLayer = [[1,2,3],[4,5,6],[7,8,9]];

const singleLayer = [10, 11]
const singleLayer2 = [12, 13]
console.log(multiLayer.concat(singleLayer, singleLayer2)); 
// -> [[1,2,3],[4,5,6],[7,8,9],10, 11, 12, 13]
console.log(multiLayer.reduce((acummArray, array2) => acummArray + array2));
// -> 1,2,34,5,67,8,9


/* .concat() method concatenate two or more arrays in one array. The difference betweeh .concat() and .reduce() dealing with string is that .concat() puts ',' between added elements from different arrays when.reduce() add right next to each other (when function does addition) and the return value is not an array 

.concat() removes outer array bracket '[]' and adds '.' in between elements from different arrays. If an array is a multi-layer array such as  [[1,2,3], [4,5,6]] it becomes [1,2,3],[4,5,6] before getting concatenated other elements from other arrays then put into a sole array */


// 6. .reduce() and .concat() together

const flatLayer = multiLayer.reduce((flattened, add) => {
    return flattened.concat(add);
});

console.log(flatLayer);

/* It was really hard to wrap my head around this one. 

1. the first returned array inside function is concatenated [1, 2, 3, 4, 5, 6]
2. the second time, [7,8,9] is concatenated to [1,2,3,4,5,6].
3. the final returned array is [1,2,3,4,5,6,7,8,9]

I am still not sure if I have to add [] as the 3rd parameter of callback function... */