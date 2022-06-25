// querySelectorAll
const itemList = document.querySelectorAll('li');

console.log(itemList);

const odd = document.querySelectorAll('li:nth-child(odd)');
const even = document.querySelectorAll('li:nth-child(even)');

for(let i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'pink';
    odd[i].addEventListener('mouseenter', () => odd[i].style.backgroundColor = 'purple');
    odd[i].addEventListener('mouseleave', () => odd[i].style.backgroundColor = 'pink');
    even[i].style.backgroundColor = 'skyblue';
    even[i].addEventListener('mouseenter', () => even[i].style.backgroundColor = 'purple');
    even[i].addEventListener('mouseleave', () => even[i].style.backgroundColor = 'skyblue');
}


// addEventListener
const header = document.querySelector('header');

header.addEventListener('mouseenter', ()=> mouseEnter())
header.addEventListener('mouseleave', ()=> mouseLeave())

const mouseEnter = () => header.style.backgroundColor = 'purple';
const mouseLeave = ()=> header.style.backgroundColor = 'skyblue'


// parentNode
const item = document.querySelector('li');
console.log(item.parentNode);
console.log(item.parentNode.parentNode)

item.parentNode.parentNode.style.backgroundColor = 'salmon';


// childNode & children
const unLi = document.querySelector('ul');

console.log(unLi.childNodes);
console.log(unLi.children);

unLi.children[1].style.color = 'red';

unLi.firstElementChild.textContent = 'no.1';
unLi.lastElementChild.textContent = 'Last'


// sibling
unLi.nextElementSibling.textContent = 'next sibling'
unLi.previousElementSibling.textContent = 'sibling 1'


// createElement & appendChild & insert
const newDiv = document.createElement('div');

newDiv.className = 'hello';
newDiv.id = 'newDivID'
newDiv.setAttribute('title', 'hello newDiv')

console.log(newDiv);


const newDivText = document.createTextNode('hello, world');

newDiv.appendChild(newDivText);

const contentDiv = document.querySelector('#content-div');
const input = document.querySelector('input');

contentDiv.insertBefore(newDiv, input);

newDiv.style.fontSize = '30px';


// eventlistener with callback function

const submit = document.querySelector('button');

let n = 0;

submit.addEventListener('click', () => mouseclick());

function mouseclick() {
    n++;
    console.log(`mouse clicked ${n}times`);
    header.textContent = header.textContent === 'changed' ? 'Hello' : 'changed';
    item.parentNode.parentNode.style.backgroundColor = item.parentNode.parentNode.style.backgroundColor === 'salmon' ? 'violet' : 'salmon';
}

const button2 = document.createElement('button');

unLi.appendChild(button2);

button2.setAttribute('type', 'submit');
button2.textContent = 'hello';
button2.className = 'button2';
button2.id = 'button2';

button2.addEventListener('click', buttonClick);

function buttonClick(e) {
    console.log(e.altKey);
}

button2.addEventListener('dblclick', ()=> button2.textContent = 'dblclicked');


// mouse events
const box = document.querySelector('#box');

box.addEventListener('mouseenter', mouse);
// box.addEventListener('mouseleave', mouse);
box.addEventListener('mouseover', mouse);
// box.addEventListener('mouseout', mouse);

let output = document.querySelector('#output');

function mouse(e){
    console.log(e.type);
    box.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+', 0)'
}

box.addEventListener('mousemove', mouse);


// keyboard events
const keyText = document.querySelector('input[type="text"]');

keyText.addEventListener('keydown', (e) => output.textContent = e.target.value);


