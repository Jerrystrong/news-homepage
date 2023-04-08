const menuButtonOpen=document.querySelector('.menu-open');
const menuButtonClose=document.querySelector('.menu-close');
const nav=document.querySelector('.nav');
//open and close menu button for phone layout
menuButtonOpen.addEventListener('click',()=>{
    nav.classList.add('openNav');
})
menuButtonClose.addEventListener('click',()=>{
    nav.classList.remove('openNav');
})