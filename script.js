let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let btn = document.getElementById('btn');
let vale = document.getElementById('vale');
let mountains2 = document.getElementById('mountains2');
let mountains1 = document.getElementById('montains1');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.left = value * 3 + 'px';
    moon.style.top = value * 2 + 'px';;
    vale.style.marginRight = value * 5 + 'px';
   
    btn.style.top = value * 1 + 'px'
    mountains2.style.top = value * 1 + 'px';
    mountains1.style.top = value * 0 + 'px';
});