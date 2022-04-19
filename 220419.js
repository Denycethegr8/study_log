// 1. Function as value //

function abcdefghijklmnop(){
    console.log('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
}

const alphabet = abcdefghijklmnop 
/* There is no parentheses as it is to refer to the function itself not the value it invokes */

//To call the function, do as below//

alphabet();



// 2. Function in function //

function makeSubarray(arr, select){
    return arr.filter(select);
}

/* Higher-Order-Function 
the parameter 'arr' gets an array and 'select' gets a function.
.filter() is method to filter the elements in an array based on the condition stated in the function in parenteses, in this case, function coming in 'select' parameter. */


let isEven = n => n % 2 === 0;

/* Callback fucntion in arrow function. As the function has name, it needs to be declared as a variable. This function tells whether the parameter 'n' is even/odd number returning truth/false based on the condition */

let array = [0,1,2,3,4,5];

console.log(makeSubarray(array, isEven)); //-> [0,2,4]


/*  -> makeSubarray(array, isEven) returns 'array.filter(isEven)'

The numbers in 'array' goes through 'isEven' function to be filtered then the numbers which are true to the condition returns, thus 0, 2, 4.

*/


// 3. Iteration //

const a = ['1', '2', '3', '4', '5'];

const each = a.forEach(i => {
    console.log(`${i} is my favorite number.`);
});

/* .forEach() puts every element in the array 'a' to the parameter 'i' and executes same code for each element of an array. It cannot be used with 'return' since it only returns 'undefined'. And it directly logs the string. */


const map = a.map(i2 => i2 * i2);
console.log(map);

/* .map returns new array after executing the function, in this case i2 * i2. Every element come back in to the array, only the element's values change */


const filter = a.filter(i3 => i3 % 2 === 0);
console.log(filter);

/* .filter returns filtered elements to the array. Elements go through parameter 'i3' and if the condition meeets, it comes back to the array. Not all elements come back in to the array and the value does not chage. */


/* I tried .forEach() method to substitute .map() and .filter() method but it only returned 'undefined'.

.map() and .filter() does the same thing when used instead of forEach, and it still worked..
-> const each2 = a.map(i => {
console.log(`${i} is my favorite number.`);
});
-> const each3 = a.filter(i => {
console.log(`${i} is my favorite number.`);
});


I tried .filter() method instead of .map() and the full array came back without any change
-> const map2 = a.filter(i2 => i2 * i2);
console.log(map2);


I tried .map() method instead of .filter() and the elements came back as boolean in the array.
-> const filter2 = a.map(i3 => i3 % 2 === 0);
console.log(filter2);

*/