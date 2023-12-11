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
let design = document.querySelector('a:nth-of-type(2)');
console.log("design", design);

document.addEventListener('keydown', keyX);

function keyX(event) {

    if (event.key = 'x') {
        design.classList.toggle('backgroundColor');
    }
}

// button 3
