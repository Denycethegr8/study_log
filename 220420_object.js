// 1. Object

let object1 = {
    property1 : 'Silver',
    property2 : 'Long',
    property3 : 'Sturdy',
    12345 : '6789'
};

console.log(object1.property1); // -> Silver

/* The object can be assigned to variables and it uses curly braces {} to desginate object literal (a comma-separated list of name-value pairs) */

/* The object's properties can be accessed by the usual property dot notation. */


console.log(object1[12345]); // -> 6789

/* If the keys have numbers, spaces or any other special characters including string, dot notation does not work so we have to use box bracket [] */


let returnProp = (obj, prop) => obj[prop];
console.log(returnProp(object1, 'property1')); // -> Slver

/* Brackets also can be used in function.*/


// 2. Object with function property -> Object method

let dog = {
    appearance :'cute',
    character : 'lively',
    activity :'bark',
    comment () {
        console.log('Dogs are cute');
    }   
}

dog.comment();

/* the comment property becomes a method. It can omit 'fuction' between parantheses and curly braces */


// 3. Nested objects

let family = {
        denyce : {
            name: 'denyce',
            age: '31years old',
            'hobbies': {
                books: 'classics',
                workout:'weight training'
                },
        hunter : {
            name: 'hunter',
            age: '33years old',
            'hobbies': {
                game: 'ps5',
                books: 'sci-fi',
                workout: 'weight training'
            }
        }
    }
}

// to find property key and its value, do as below:

let denycebook = family.denyce['hobbies'].books;

console.log(denycebook); // -> classics

/* Write the object's name from the big category to the last, using dot notaion and box brackets based on its key type. */


// 4. Pass By Reference

const food = {
    green : 'vegetable' ,
    red : 'meat' ,
    white : 'cream',
}

let addYel = (yel) => food.yellow = 'cheese';
let changeRed = (red) => food.red = 'tomato';

console.log(addYel(food)); // -> cheese
changeRed(food); // -> to invoke the function 'changeRed'
console.log(food); 
/* -> { green: 'vegetable', red: 'tomato', white: 'cream', yellow: 'cheese' } 

the value of property red changed to 'tomato' and property yellow got added with its value 'cheese'. When the function invokes, the object changes even if the variable is set with const. */


// 5. for...in statement


const myFriends = {
    'high school' : {
        eunji : {
            occupation: 'cartoonist',
            age: 30,
            pet: 'Tansan'
        },
        yoonseo : {
            occupation: 'video artist',
            age: 31,
            pet: 'June'
        }
    },
    university : {
        heejin : {
            occupation: 'teacher',
            age: 31,
            pet: 'Merry'
        },
        yejin : {
            occupation: 'salesperson',
            age: 31,
            pet: 'none'
        }
    }
}

for (const name in myFriends["high school"]){
    console.log(`${name} is ${myFriends["high school"][name].age} years old.`);
};
/* -> eunji has Tansan
yoonseo has June */

for (const property in myFriends['high school']){
    console.log(`One of my high school friends is a ${myFriends['high school'][property].occupation} and lives with ${myFriends['high school'][property].pet}.`)
}
/* -> One of my uni friends is a teacher and has Merry as a pet.
One of my uni friends is a salesperson and has none as a pet. */

for (const property in myFriends['high school'].eunji){
    console.log(`Eunji's ${property} is ${myFriends['high school'].eunji[property]}`)
}


/* This one again was hard to understand when the first case used only 'name' and the second one needs to be called from the beginning which is 'myFriends'. 

As far as I understood, regarding the first case, 'name' is a direct property of 'high school' and its value (name) is what I wanted to take from the list. Its hierarchy is also higher than 'pet'. 

About the second case, 'uniFriends' is a direct property of university but its value (name) is not what I wanted. And the value I want, 'occupation' is on the same hierarchy as 'pet' 

Lastly, the third case, 'property' is a direct property of 'yejin' and its values (all properties) were what I wanted so I do not have to put any sub dot notation or box brackets. 

So my guess is if the property that I want to take is a direct child of for ... in object, it is simple, else it is not. */