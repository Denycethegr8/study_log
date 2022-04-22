// Loop practice

const friends = ['harry', 'hermione', 'ron'];
let intro = 'My friends are called'
for (const friend of friends) {
    intro = `${intro} ${friend},`
}
console.log(intro);

// -> My friends are called harry, hermione, ron,


let intro2 = 'My friends are called'
for (const friend of friends) {
    console.log(`${intro2} ${friend},`)
}

/* My friends are called harry,
My friends are called hermione,
My friends are called ron,*/

/* The difference between the 1st case and the 2nd one is that the 'intro' holds the input and keeps adding the elements in the array till the end and then it gets loged. Thus, it logs just one sentence.

The second one, on the other hand, the sentence gets logged each time when each element comes in to the 'friend' parament. Thus, it logs three sentences. */

let intro3 = 'My friends are called'
for (let i = 0; i < friends.length; i++){
    if (i === friends.length-1){
        intro3 = `${intro3} and ${friends[i]}.`
    } else {
        intro3 = `${intro3} ${friends[i]},`
    }
}
console.log(intro3);

/* To differenciate the input way of the last element, we have to use for loop instead of for... of loop */

/* If I get to work with an array and I do not need to deal with its index position, it is better to use for...of loop instead of for, while and do..while loop since it is easier and less bugsome. */


// some examples of for loop using return

let output = 'output : ';
function isSquare(n) {
    for (let i = 1; i <= n; i++){
        let sqRoot = Math.sqrt(i);
        if (sqRoot != Math.floor(sqRoot)){
            continue; 
        } else {
            if (i === n){
                output += `${i}`;
            } else {
            output += `${i}, `;
            }
        }
    } return output;
}

console.log(isSquare(16));


let output2 = 'output : ';
function isEven(n) {
    for (let i = 0; i <= n; i++){
        if (i % 2 === 0){
            output2 += `${i}, `;
        }
    } return output2;
}

console.log(isEven(4));



// shortening for loop

counter = 0;
for (; counter < 3;){
    console.log(counter++);
}

for (counter = 0; counter < 3; counter ++){
    console.log(counter);
}

/* Above two for loop does the exactly the same work. If the loop's beginning condition is already declared, we do not have to set a beginning again. The first one is very simple but could be confusing at times for me. */ 


// continu and break

for (i = 0; i < 6; i++){
    if (i % 2 === 0) continue;
    console.log(i);
} /* ->
1
3
5
*/

/* The condition before 'continue' does not get executed but it jumps to the next code. */

for (i = 0; i < 10; i++){
    if (i === 5) break;
    console.log(i);
} /* -> 
1
2
3
4
*/

/* The condition before 'break' works as a new limit and if the limit is met, it jumps to the next code */


