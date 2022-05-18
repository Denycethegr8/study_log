let stringOne = 'Easy come easy go will you let me go';
let stringTwo = 'Mama I just killed a man'

// 1. .charAt();
console.log(stringOne.charAt(2));


// 2. .charCodeAt();
console.log(stringOne.charCodeAt(2));


// 3. .concat();
console.log(stringOne.concat(stringTwo));


// 4. .endsWith();
console.log(stringOne.endsWith('me go'));


// 5. .fromCharCode();
console.log(String.fromCharCode(115));


// 6. .includes();
console.log(stringOne.includes('easy'));


// 7. indexOf();
console.log(stringOne.indexOf('go'));


// 8. lastIndexOf();
console.log(stringOne.lastIndexOf('go'));


// 9. .match();
console.log(stringOne.match(/go/g));


// 10. .repeat();
console.log(stringOne.repeat(2));


// 11. replace();
console.log(stringOne.replace(/go/g, "GO"));


// 12. search();
console.log(stringOne.search('go'));


// 13. .slice();
console.log(stringTwo.slice(2, 10));


// 14. .split();
console.log(stringTwo.split(" "));


// 15. .startsWith();
console.log(stringTwo.startsWith('M'));


// 16. substr();
console.log(stringTwo.substr(2, 6));


// 17. substring(); -> similar to slice
console.log(stringTwo.substring(2, 10));


// 18. toLowerCase();
console.log(stringTwo.toLowerCase());


// 19. toUpperCase();
console.log(stringTwo.toUpperCase());


// 20. trim();
let stringThree = '    Hi He he  '
console.log(stringThree.trim());