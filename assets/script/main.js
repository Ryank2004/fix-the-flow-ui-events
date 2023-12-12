let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


// button 1
let frontend = document.querySelector('a:nth-of-type(1)')
console.log("frontend",frontend)

frontend.addEventListener('click', function() {
  frontend.classList.toggle('sizeBigger')
})

// button 2
let design = document.querySelector('a:nth-of-type(2)')
console.log("design", design)

document.addEventListener('keydown', keyX)

function keyX(event) {

    if (event.key === 'x') {
        design.classList.toggle('backgroundColor');
    }
}

// button 3
let and = document.querySelector('a:nth-of-type(3)')

and.addEventListener('dblclick', function(){
  and.classList.toggle('rotate')
})

// button 4
let development = document.querySelector('a:nth-of-type(4)')

document.addEventListener('keydown', keyCDown);
document.addEventListener('keyup', keyCUp);

function keyCDown(event) {

    if (event.key === 'c') {
        development.classList.add('backgroundColor');
    }
}
function keyCUp(event) {

    if (event.key === 'c') {
      development.classList.remove('backgroundColor');
    }
}
console.log("keyup" ,keyCUp)

// button 5
let sprint5 = document.querySelector('a:nth-of-type(5)');

sprint5.addEventListener('mouseover', function() {
    sprint5.classList.add('hoverSize');
});

sprint5.addEventListener('mouseout', function() {
    sprint5.classList.remove('hoverSize');
});

// button 6
let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('wheel', wheelHandler)
fix.addEventListener('animationend', wheelHandler)

function wheelHandler() {
  fix.classList.toggle('discoDance')
}

// button 7
let mouseoutInteraction = document.querySelector('a:nth-of-type(7)')

mouseoutInteraction.addEventListener('mouseout', exitHandler)
mouseoutInteraction.addEventListener('animationend', exitHandler)

function exitHandler() {
  mouseoutInteraction.classList.toggle('nietWegGaan')
}