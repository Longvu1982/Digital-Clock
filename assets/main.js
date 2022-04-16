const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const clockContain = $('.container')
const firstBlock = $('.first')
const secondBlock = $('.second')
const thirdBlock = $('.third')
const forthBlock = $('.forth')
const firstNumbers = firstBlock.querySelectorAll('span')
const secondNumbers = secondBlock.querySelectorAll('span')
const thirdNumbers = thirdBlock.querySelectorAll('span')
const forthNumbers = forthBlock.querySelectorAll('span')
const blocks = $$('.num')
console.log(blocks)

// Check if mouse is down
let isDown = false
document.addEventListener('mousedown', ()=>{
    isDown = true;
})
// document.addEventListener('touchstart', (e)=>{
//     isDown = true;
//     console.log(e)
// })
document.addEventListener('mouseup', ()=>{
    isDown = false;
})
// document.addEventListener('touchend', ()=>{
//     isDown = false;
// })

// Object turn on mouse move
let rotateY = 0;
let rotateX = 0;
let abc = 0
document.addEventListener('mousemove', (e)=>{
        if(isDown) {
        rotateX -= e.movementY
        rotateY += e.movementX
        clockContain.style.transform = `perspective(1000px) 
                                rotateY(${rotateY}deg)
                                rotateX(${rotateX}deg)`
    }
})

// var previousTouch
// document.addEventListener('touchmove', (e)=>{
//     const touch = e.touches[0];

//     if (previousTouch) {
//         // be aware that these only store the movement of the first touch in the touches array
//         e.movementX = touch.pageX - previousTouch.pageX;
//         e.movementY = touch.pageY - previousTouch.pageY;
//     };

//     previousTouch = touch;
//     if(isDown) {
//     if (e.movementX && e.movementY) {
//         rotateX -= e.movementY
//         rotateY += e.movementX
//         console.log('rotatex', rotateX)
//         clockContain.style.transform = `perspective(1000px) 
//                                 rotateY(${rotateY}deg)
//                                 rotateX(${rotateX}deg)`
//     }
   
// }
// })

// Hover effect


let time = new Date
console.log(time.getMinutes())

setInterval(()=>{

    
    let time = new Date
    let seconds = time.getSeconds()
    let minutes = time.getMinutes()
    let hours = time.getHours()
    forthNumbers.forEach(element => {
        element.innerText = minutes % 10
    });
    thirdNumbers.forEach(element => {
        element.innerText = Math.floor(minutes / 10);
    });
    secondNumbers.forEach(element => {
        element.innerText = Math.floor(hours % 10);
    });
    firstNumbers.forEach(element => {
        element.innerText = Math.floor(hours / 10);
    });


    forthBlock.style.transform = `rotateX(${-minutes % 60 * 90}deg)`
    if (minutes % 10 == 0) {
        thirdBlock.style.transform = `rotateX(${-minutes / 10 * 90}deg)`
    }
    
    secondBlock.style.transform = `rotateX(${-hours % 60 * 90}deg)`
    if (hours % 10 == 0) {
        thirdBlock.style.transform = `rotateX(${-hours / 10 * 90}deg)`
    }
    
})