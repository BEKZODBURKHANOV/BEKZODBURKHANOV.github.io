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
const block = document.querySelector('.promo'); // тег блока //
const btn = document.querySelector('.first');  // тег html для кнопки//

let flag = false;

 btn.addEventListener('click', (e) => {
     let display = block.style.display;
if (!flag) {
    fadeIn(block, 1000, 'grid');    //  время  //
    flag = true;
}else {
    fadeOut(block, 500);      // время //
    flag = false;
}
});