const fadeIn = (el, timeout, display) =>{
el.style.opacity = 0;
el.style.display = display || 'block';
el.style.transition = `opacity ${timeout}ms`;
setTimeout(() => {
el.style.opacity = 1;
},10); 
};
const fadeOut = (el, timeout) =>{
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;

    setTimeout(() => {
el.style.display = 'none';
    }, timeout);
};
const block = document.querySelector('.menu__avtive'); // тег блока //
const btn = document.querySelector('.main__menu-btn');  // тег html для кнопки//
const btn2 = document.querySelector('.menu_clouse');
const btn3 = document.querySelector('.menu__opacity');
let flag = false;

 btn.addEventListener('click', (e) => {
     let display = block.style.display;
if (!flag) {
    fadeIn(block, 300, 'flex');    //  время  //
    flag = true;
}else {
    fadeOut(block, 500);      // время //
    flag = false;
}
});

btn2.addEventListener('click', (e) => {
    let display = block.style.display;
if (!flag) {
   fadeIn(block, 500, 'flex');    //  время  //
   flag = true;
}else {
   fadeOut(block, 500);      // время //
   flag = false;
}
});

btn3.addEventListener('click', (e) => {
    let display = block.style.display;
if (!flag) {
   fadeIn(block, 500, 'flex');    //  время  //
   flag = true;
}else {
   fadeOut(block, 500);      // время //
   flag = false;
}
});


const counters = document.querySelectorAll('.progress__wrapper__list h2'),
      lines = document.querySelectorAll('.progress__line span');

counters.forEach((item, i) =>{
    lines[i].style.width = item.innerHTML
})
