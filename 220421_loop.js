// 1. for ... of loop

const snacks = ['sunchip', 'cheetos', 'chocochip'];
for (const snack of snacks) {
    console.log(snack);
} /* sunchip
cheetos
chocochip */

const snack1 = snacks.forEach(el => {
    console.log(el);
}); /* sunchip
cheetos
chocochip */

for (const snack2 in snacks) {
    console.log(snack2);
} /* 0
1
2 */

/* for...of returns each element in an array, it is like forEach. I need to know what the difference is. 

If I use for...in however, it returns the index number not the item name itself.*/

for (let i = 0; i < snacks.length; i++){
    console.log(snacks[i]);
}

/* sunchip
cheetos
chocochip */ 

/* If we used for loop, I code like this too. */