addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".menu__btn");let t=document.querySelector(".menu__quit");e&&e.addEventListener("click",(()=>{document.querySelector(".menu__items").classList.toggle("show"),e.classList.toggle("hidden"),t.classList.toggle("show__btn"),t.classList.remove("hidden")})),t&&t.addEventListener("click",(()=>{document.querySelector(".menu__items").classList.toggle("show"),t.classList.toggle("hidden"),e.classList.toggle("show__btn"),e.classList.remove("hidden")}))}));const config=new Glide(".glide",{type:"carousel",startAt:0,perView:4,autoplay:2e3,breakpoints:{1300:{perView:3},800:{perView:1}}});config.mount();const email=document.getElementById("email"),form=document.getElementById("form"),parrafo=document.getElementById("warning");form.addEventListener("submit",(e=>{e.preventDefault();let t="",n=!1;parrafo.innerHTML="",/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)||(t+="Please insert a valid email",n=!0),n&&(parrafo.innerHTML=t),n||(t="Email enviado",parrafo.innerHTML=t)})),window.onload=()=>{var e=document.getElementById("container__loading");e.style.visibility="hidden",e.style.opacity="0"};