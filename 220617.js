// Map
const map = new Map();
console.log(map); // => Map(0) {}

const map2 = new Map([['name', 'denyce'], ['surname','an']]);
console.log(map2); 
// => Map(2) { 'name' => 'denyce', 'surname' => 'an' }

const map3 = new Map([['name', 'denyce'], ['name','hunter']]);
console.log(map3); // => Map(1) { 'name' => 'hunter' }

// when the duplicated key is created, it overwrites the existing one


// Map.size
console.log(map2.size); // => 2
// it cannot be set to different numbers


// Map.set()
const map4 = new Map();
map4.set('age', '32')
    .set('locataion', 'korea')
console.log(map4); 
// it can add new key/value pairs only at a time with chaining.


// Map.get()
console.log(map4.get('age')); // => 32
console.log(map4.get('name')); // => undefined

// it is different from Object's obj[key]. Always use get() / set()


// Map.has()
console.log(map3.has('name')); // => true
console.log(map3.has('age')); // => false
// it returns boolean


// Map.delete()
console.log(map4.delete('age')); // => true
console.log(map4.delete('name')); // => false
// it returns bollean (chaining unavailable) as well as does its job
console.log(map4); // => Map(1) { 'locataion' => 'korea' }


// Map.clear();
console.log(map3.clear()); // => undefined (always)
console.log(map3); // Map(0) {} cleared, empty Map


// Map.for ... of
const map5 = new Map([['maui', 'dog'], ['mj', 'cat']]);
for (let e of map5) {
    console.log(e);
}
// => [ 'maui', 'dog' ] [ 'mj', 'cat' ]
// for ... of deals the entry itself. 