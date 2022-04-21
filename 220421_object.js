// 1. This

const mySelf = {
    name: 'denyce',
    like: 'books',
    say(){
        return `Hi, my name is ${this.name} and I like ${this.like} `
    }
};

console.log(mySelf.say());

// -> My name is denyce and I like books 

/* 'this' refers to the object itself. If I change 'this' to 'mySelf', it still works the same. But it is recommended to use 'this' instead of calling the object's name for simpler and clearer code. 

Arrow function cannot be used in the object syntax with 'this', since the arrow function would adhere 'this' to the global scope which does not have the value we are looking for. 

It can be used with object's name being called but it is not a good practice once again. */



// 2. Getters

const hubby = {
    name: 'hunter',
    age: 33,
    hobby: 'video game',
    get saying(){
        if (this.hobby === 'video game') {
            return `Hi, my name is ${this.name} and I like playing ${this.hobby}`
        } else {
            return `Hi, my name is ${this.name} and I am ${this.age} years old`
        };
    }
}

console.log(hubby.saying);

// -> Hi, my name is Hunter and I like playing video game

/* In my understanding, getter is similar to method. The difference that I know of are 1. write 'get' in front of function (method) and 2. invoke without parentheses (). I need to learn more about the detail. */



// 3. Setter

const friend = {
    name: 'yejin',
    age: 31,
    _hobby: 'singing',
    get hobby(){
        return `${this.name} ${this._hobby}`
    },
    set hobby(newHobby){
        [this.name, this._hobby] = newHobby.split(' ');
        }
}

friend.hobby = 'yoonseo drawing';

console.log(friend.hobby); // -> yoonseo drawing
console.log(friend.name); // -> yoonseo
console.log(friend._hobby); // -> drawing

/* getter and setter is very hard to understand.. I need to study more and read further material to grasp the reason behind its usage as well as the immutability of object. */



// 4. Factory function

const country = (capital, continent, language, greeting) => {
    return {
         capital : capital,
         continent : continent,
         language : language,
         greet () {
             console.log(greeting)
         }
    }
};

const korea = country('Seoul', 'Asia', 'Korean', '안녕하세요!');
const theUK = country('London', 'Europe', 'English', 'Hello!');
const france = country('Paris', 'Europe', 'French', 'Bon Jour!');
const brazil = country('Brasilia', 'South America', 'Portuguese', 'Bom Dia!')

console.log(korea.capital);
console.log(theUK.language);
console.log(france.continent);
brazil.greet();

/* -> Seoul
English
Europe
Bom Dia! */

// factory function helps make multiple objects easier. //



// 5. Destructuring

const niece = {
    _name : 'gianna',
    _age : '5',
    favorite : {
        color : 'mint',
        animal : 'rabbit'
    }
}

const _name = niece._name;
console.log(_name); // -> gianna

const {_age} = niece;
console.log(_age); // -> 5

const {color} = niece.favorite;
console.log(color); // -> mint

/* Use {} and omit object name with . and we do not have to re-type the same keyword */



// 6. Built-in Object Methods
// 6-1. Object.keys()

const family = {
    mom : 'sun',
    dad : 'ok',
    brother : 'jun'
};

const relation = Object.keys(family);
console.log(relation); // -> [ 'mom', 'dad', 'brother' ]

/* Object.keys method returns an array of keywords(property) used in the object */



// 6-2. Object.entries()

const whoThere = Object.entries(family);
console.log(whoThere);
// -> [ [ 'mom', 'sun' ], [ 'dad', 'ok' ], [ 'brother', 'jun' ] ]

/* Object.entries method returns pairs (in array) of keyword and its own value existing in the object. */


// 6-3. Object.assign()

const inLaws = {
    'father-in-law' : 'bob',
    'mother-in-law' : 'michele',
    'sister-in-law' : 'alana'
}
const addedFamily = Object.assign(inLaws,family);
console.log(addedFamily);
console.log(family);
console.log(inLaws);

/* Object.assign() method copies all the properties of the source object (second parameter, here family) to the target object (first parameter, here inLaws) and changes the target object. */

const directFamily = Object.assign({husband : 'hunter'}, family);
console.log(directFamily);

/* Object.assign() can also have a pair of key-value as a parameter. If I do not wish to change the object, I need to put it in the source object parameter (second) once again. */

