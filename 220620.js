// 1. Filter unique array members
/* Create a function unique(arr) that should return an array with unique items of arr */
function unique(arr) {
    return Array.from(new Set(values));
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(unique(values)) // [ 'Hare', 'Krishna', ':-O' ]


// 2. Filtered anagrams
/* Write a function aclean(arr) that returns an array cleaned from anagrams. */
function aclean(array) {
    const anaMap = new Map();
    for (const val of array) {
        const sortedVal = val.toLowerCase().split('').sort().join('');
        anaMap.set(sortedVal, val)
    }
    return Array.from(anaMap.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // [ 'PAN', 'hectares', 'era' ]


// 3. Iterable keys
/* We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.

But that doesn’t work:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
keys.push("more");

Why? How can we fix the code to make keys.push work? */

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys); // [ 'name', 'more' ]