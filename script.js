let text = document.getElementById('text');
let pic = document.getElementById('picsideup');
let ring = document.getElementById('ring');

window.addEventListener('scroll',() =>{
    let value = window.scrollY;

    text.style.marginTop = value + 'px';
    picsideup.style.left = value + 'px';
    ring.style.left = value * -1 + 'px';
})

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 15){
        counter = 0;
    }
}, 2500);