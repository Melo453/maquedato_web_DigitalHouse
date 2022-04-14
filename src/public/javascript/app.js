addEventListener('DOMContentLoaded', ()=>{
    const menu__btn = document.querySelector('.menu__btn');
    let quit = document.querySelector('.menu__quit')
    if (menu__btn) {
        menu__btn.addEventListener('click', () =>{
            const menu_items = document.querySelector('.menu__items');
            menu_items.classList.toggle('show');
            menu__btn.classList.toggle('hidden')
            quit.classList.toggle('show__btn')
            quit.classList.remove('hidden')
        });
    }
    if(quit){
        quit.addEventListener('click', () =>{
            const menu_items = document.querySelector('.menu__items');
            menu_items.classList.toggle('show');
            quit.classList.toggle('hidden')
            menu__btn.classList.toggle('show__btn')
            menu__btn.classList.remove('hidden')
        });
    }
});

const config = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    autoplay: 2000,
    breakpoints:{
        1300: {
            perView: 3
        },
        800: {
            perView: 1
        }
    }
});
config.mount();

const email = document.getElementById('email');
const form = document.getElementById('form');
const parrafo = document.getElementById('warning');

form.addEventListener("submit", a => {
    a.preventDefault();
    let warning = "";
    let join = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML = ""
    if(!regexEmail.test(email.value)){
        warning += `Please insert a valid email`;
        join = true;
    }
    if(join){
        parrafo.innerHTML = warning;
    }
    if(!join){
        warning = `Email enviado`
        parrafo.innerHTML = warning;
    }
});


window.onload = () =>{
    var load = document.getElementById('container__loading');
    load.style.visibility = 'hidden';
    load.style.opacity = '0'
}