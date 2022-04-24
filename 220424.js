// Recursive function

// 1. to countdown from i to j

function countdown(i, j){
if (i < j){
    return i;
} else {
    console.log(i);
    countdown(i-1, j);
    }
}

countdown(10, 1);
/*
10
9
8
7
6
5
4
3
2
1
*/


// if it was in a for loop

function countdown2(i, j){
for (let counter = i; counter >= j; counter--){
    console.log(counter);
}
}

countdown2(10, 1);

/*
10
9
8
7
6
5
4
3
2
1
*/



// 2. the sum of the first n elements of an array arr

function sum(arr, n){
if (n <= 0) return 0;
else {
    return arr[n-1] + sum(arr, n-1);
}
}

console.log(sum([1,2,3,4,5], 3)); // -> 6 (1+2+3)

// if it was in a for loop

function sum2(arr2, n2){
let result = 0;
for (let i = 0; i < n2; i++){
    result += arr2[i];
} return result;
}

console.log(sum2([1,2,3,4,5], 3));



// 3. to countdown in an array

function countDwnArr1(n){
    if (n < 1) return [];
    else {
        const newArr2 = countDwnArr1(n-1);
        newArr2.unshift(n);
        return newArr2;
    }
}

console.log(countDwnArr1(5));


// if it was in a for loop

function countDwnArr(n){
    let newArr = [];
    for (i = n; i > 0; i--){
        newArr.push(i);
    } return newArr;
}

console.log(countDwnArr(5));
