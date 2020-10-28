// Your code goes here
// The variables
const nav = document.querySelector('.nav');
const inverseContent = document.querySelector('.inverse-content')
const image = document.querySelector('.img-content img')

/* 
    #01
    Using the focus event lisenter on the nav links
*/

nav.addEventListener('focus', (e) =>{
    console.log(e.target)

    e.target.style.background = 'pink'


},true) // this booleans makes it so its invoked once the event listener is added


/* 
    #02
    Using the blur event to change background color to default
*/

nav.addEventListener('blur', (e) => {
    e.target.style.background = ''
},true)


/* 
    #03
    Going to use the key down event
*/
document.addEventListener('keydown', (e) => {
    console.log(e.keyCode)
    if(e.keyCode === 27){
        alert('So... whats up dog')
    }
})

/* 
    #04
    going to be using the mouseOver event
*/

inverseContent.addEventListener('mouseover', (e) => {
    e.target.style.background = 'navy'
    e.target.style.color = 'white'
})

/* 
    #05 
    image zoom
*/
let scale = 1

function zoom(e){
    e.preventDefault();

    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.125,scale), 4)

    // apply
    image.style.transform = `scale(${scale})`

}

image.onwheel = zoom


/* 
    #06
    Load event
*/
window.addEventListener('load', () => alert('Dont ESCape'))


/*
    #07
    Going to use the mouse hover to make p tags small
*/
const destinationP = document.querySelectorAll('.destination p')
function small(e){
    e.target.style.fontSize = '12px';
}

Array.from(destinationP).forEach((p) =>{
    p.addEventListener('mousedown', small)
})

/* 
    #08 
    Going to use the dblclick
*/
const headers = document.querySelectorAll('h4')
Array.from(headers).forEach((head) => {
    head.addEventListener('dblclick', (e) => e.target.style.border = '5px solid navy')
})

// #09 Online
window.addEventListener("online", () => {
console.log("Youre connected ");
});

// #10 ofline

window.addEventListener("offline", () => {
console.log("You have lost connection");
});