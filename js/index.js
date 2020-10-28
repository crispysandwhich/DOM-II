// Your code goes here


/* 
    #01
    Using the focus event lisenter on the nav links
*/
const nav = document.querySelector('.nav');

nav.addEventListener('focus', (e) =>{
    console.log(e.target)

    e.target.style.background = 'pink'


},true)

/* 
    #02
    Using the blur event to change background color to default
*/

nav.addEventListener('blur', (e) => {
    e.target.style.background = ''
},true)