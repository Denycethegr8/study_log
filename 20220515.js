const member = [ 
{name: 'Alice', age:15},
{name: 'Harry', age:23},
{name: 'Elisabeth', age: 52},
{name: 'Darcy', age: 63},
{name: 'Molly', age: 10},
{name: 'David', age: 8},
{name: 'Gianna', age: 6}
];

// 1. .filter
const overForty = member.filter(member => member.age > 40);
console.log(overForty);


// 2. .map
const mapMember = member.map(member => member.age);
console.log(mapMember); 


// 3. .find (find the very first element meeting the condition)
const findMember = member.find(member => member.age > 33);
console.log(findMember);


// 4. .forEach (does not return array)
const forEachMember = member.forEach(member => console.log(`Hi, my name is ${member.name} and I am ${member.age} years old`));


// 5. .some
const someMember = member.some(member => member.age > 62);
console.log(someMember); 


// 6. .every
const everyMember = member.every(member => member.age > 10);
console.log(everyMember);


// 7. .reduce (element should be set at the second param)
const addAllAge = member.reduce((currentTotal, member) => {
    return member.age + currentTotal}, 0);
console.log(addAllAge);


// 8. .includes
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.includes(2));
console.log(numbers.includes(6));