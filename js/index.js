// Your code goes here
document.querySelectorAll('.nav-link').forEach (el =>{
    el.addEventListener('mouseover', () => {
        el.style.transform = 'scale(1.2)';
    })
})
document.querySelectorAll('.nav-link').forEach (el =>{
    el.addEventListener('mouseout', () => {
        el.style.transform = 'scale(1)';
    })
})
document.querySelectorAll('.img-content').forEach (el => {
    el.addEventListener('click', () => {
        el.style.transform = 'scale(1.5)';
    })
})
document.querySelectorAll('.img-content').forEach (el => {
    el.addEventListener('dblclick', () => {
        el.style.transform = 'scale(1)';
    })
})

document.querySelectorAll('h2').forEach (el => {
    window.addEventListener('resize', () => {
        el.style.color = 'blue';
    })
})

const h1 = document.querySelector('.logo-heading');
 
  h1.addEventListener('mousedown', () => {
     h1.textContent = 'OUCH?!?!?!';
 })
 h1.addEventListener('mouseup', () => {
    h1.textContent = 'WHY?!?!?!';
})

const dest = document.querySelectorAll('.destination');
dest.forEach (el => {
    el.addEventListener('copy', () => {
        el.textContent = 'LOLOLOLOL';
        el.style.color = 'green';
    })
})


dest.forEach (el => {
    el.addEventListener('cut', () => {
        el.textContent = 'whywouldanyonedothis?!';
        el.style.color = 'blue';
        el.style.fontSize = '3rem';
    })
})
dest.forEach (el => {
    el.addEventListener('paste', () => {
        el.textContent = 'oh no!';
        el.style.color = 'red';
        el.style.fontSize = '3rem';
    })
})

const foot = document.querySelector('footer');
const fp = document.querySelector('.footer p');
fp.addEventListener('click', ()=> {
    fp.style.color = 'red';
    event.stopPropagation();

});
 foot.addEventListener('click', () =>{
     foot.style.backgroundColor = 'black';
     
 })

 document.querySelectorAll('.nav-link').forEach (el =>{
    el.addEventListener('click', () => {
        event.preventDefault();
        console.log('halt!');
    })
})
