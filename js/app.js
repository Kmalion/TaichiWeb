const color__fondo=document.getElementById('color__fondo')
const color__fondo__equipos=document.getElementById('color__fondo__equipos')
const numero__paises=document.getElementById('numero__paises')
const numero__equipos=document.getElementById('numero__equipos')
let cantidad=0
let cantidad2=0

let tiempo=setInterval(() => {
    cantidad+=1
    color__fondo.style.height=`${cantidad}`
    numero__paises.textContent=cantidad
    if(cantidad===23)
        {
            clearInterval(tiempo)
        }
}, 200); 

let tiempo2=setInterval(() => {
    cantidad2+=10
    color__fondo__equipos.style.height=`${cantidad2}`
    numero__equipos.textContent=cantidad2
    if(cantidad2===5500)
        {
            clearInterval(tiempo2)
        }
}, 20); 
window.onscroll = function(){
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("mapa");
    elemento1.style.bottom = posicion * 0.1 + "px";
}