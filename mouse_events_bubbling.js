const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');

div2.addEventListener('mouseenter', (e) => {
    console.log('The mouse entered the child.')
    e.currentTarget.style.backgroundColor = 'pink'
});
// div2.addEventListener('mouseover', () => console.log('The mouse is over the child.'))
div2.addEventListener('mouseleave', (e) => { 
    console.log('The mouse left the child.')
    e.currentTarget.style.backgroundColor = 'blueviolet'
});
// div2.addEventListener('mouseout', () => console.log('The mouse is out the child.'))

div1.addEventListener('mouseenter', entering)
// div1.addEventListener('mouseover', overing)
div1.addEventListener('mouseleave', leaving)
// div1.addEventListener('mouseout', outing)

// div4.addEventListener('mouseenter', () => console.log('The mouse entered the child.'));
div4.addEventListener('mouseover', (e) => {
    console.log('The mouse is over the child.')
    e.currentTarget.style.backgroundColor = 'purple'
})
// div4.addEventListener('mouseleave', () => console.log('The mouse left the child.'))
div4.addEventListener('mouseout', (e) => {
    console.log('The mouse is out the child.')
    e.currentTarget.style.backgroundColor = 'lightgreen'
})

// div3.addEventListener('mouseenter', entering)
div3.addEventListener('mouseover', overing)
// div3.addEventListener('mouseleave', leaving)
div3.addEventListener('mouseout', outing)

function entering(e) { 
    e.currentTarget.style.backgroundColor ='grey';
    console.log('The mouse entered the parent.')
}

function overing(e) { 
    e.currentTarget.style.backgroundColor ='pink';
    console.log('The mouse is over the parent.')
}

function leaving(e) { 
    e.currentTarget.style.backgroundColor ='yellow';
    console.log('The mouse left the parent.');
}

function outing(e) { 
    e.currentTarget.style.backgroundColor ='orange';
    console.log('The mouse is out the parent.');
}


