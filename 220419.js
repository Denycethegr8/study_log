// 1. Function as value 

function abcdefghijklmnop(){
    console.log('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
}

const alphabet = abcdefghijklmnop 
/* There are no parentheses as it is to refer to the function itself not the value it invokes */

//To call the function, do as below

alphabet();



// 2. Function in function 

function makeSubarray(arr, select){
    return arr.filter(select);
}

/* Higher-Order-Function 
the parameter 'arr' gets an array and 'select' gets a function.

.filter() is a method to filter the elements in an array based on the condition stated in the function in parentheses, in this case, function coming in 'select' parameter. */


let isEven = n => n % 2 === 0;

/* Callback fucntion in arrow function. As the function has a name, it needs to be declared as a variable. This function tells whether the parameter 'n' is an even/odd number returning truth/false based on the condition */

let array = [0,1,2,3,4,5];

console.log(makeSubarray(array, isEven)); //-> [0,2,4]


/*  -> makeSubarray(array, isEven) returns 'array.filter(isEven)'

The elements in 'array' go through 'isEven' function to be filtered then the elements which are true to the condition return, thus 0, 2, 4.

*/


// 3. Iteration 

const a = ['1', '2', '3', '4', '5'];

const each = a.forEach(i => {
    console.log(`${i} is my favorite number.`);
});

/* .forEach() puts every element in the array 'a' to the callback function's parameter 'i' and executes same code for each element of an array. It cannot be used with 'return' since it only returns 'undefined'. And it directly logs the string. */


const map = a.map(i2 => i2 * i2);
console.log(map);

/* .map returns new array after executing the callback function, in this case i2 * i2. Every element come back into the array, only the element's values change */


const filter = a.filter(i3 => i3 % 2 === 0);
console.log(filter);

/* .filter returns filtered elements to the array. Elements go through callback function's parameter 'i3' and if they meet the condition, they come back into the array. Not all elements do and the values do not chage. */


/* I tried .forEach() method to substitute .map() and .filter() method but it only returned 'undefined'.

.map() and .filter() does the same thing when used instead of forEach, and it still worked..
-> const each2 = a.map(i => {
console.log(`${i} is my favorite number.`);
});
-> const each3 = a.filter(i => {
console.log(`${i} is my favorite number.`);
});


I tried .filter() method instead of .map() and all the elements in the array came back without any change.
-> const map2 = a.filter(i2 => i2 * i2);
console.log(map2);


I tried .map() method instead of .filter() and all the elements came back as boolean in the array.
-> const filter2 = a.map(i3 => i3 % 2 === 0);
console.log(filter2);

*/