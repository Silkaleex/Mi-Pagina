"use strict";
// //Al Entrar en la pagina
// var nombre = prompt("Ingresa tu Nombre");

// if (nombre) {
//   alert(`Bienvenido " + nombre + " Gracias por Entrar en mi pagina web.`);
// } else {
//   alert(`Escribe tu Nombre Por Favor`);
// }

// console.log(nombre);

//En consola se mostrara el dia actual
const hoy = new Date(); // {}
//console.log( hoy );
let dia = hoy.getDay(); // 0:domingo, 1:Lunes.....

let diasDeLaSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "viernes",
  "Sabado",
];

console.log(`Hoy estamos a: ` + hoy);

//Flechas de la Imagen
var contenedor = document.querySelector(".slider"),
  btnIzquierdo = document.getElementById("btn-izquierda"),
  btnDerecho = document.getElementById("btn-derecha");

//Evento pra el boton derecho
btnDerecho.addEventListener("click", function () {
  contenedor.scrollLeft += contenedor.offsetWidth;
});
//Evento pra el boton izquierdo
btnIzquierdo.addEventListener("click", function () {
  contenedor.scrollLeft -= contenedor.offsetWidth;
});

//Evento con el titulo Mis Dibujos
var boton = document.getElementById("misdibujos");
boton.addEventListener("click", edicion);

boton.className = "midibujo";
boton.style.backgroundColor = "blue";
boton.style.color = "aqua";
boton.style.fontSize = "40px";

//Boton Scroll Top
var flecha = document.getElementById("direccion");

//Detectamos el scroll en Nuestra Pagina Web
window.addEventListener("scroll", function () {
  var scroll = document.documentElement.scrollTop,
    fullSize = document.documentElement.offsetHeight,
    sizeVP = document.documentElement.clientHeight;

  if (scroll > 100) {
    flecha.classList.add("show");
  } else {
    flecha.classList.remove("show");
  }

  //Modificar cuando llegue al final de la pagina
  if (fullSize == scroll + sizeVP) {
    flecha.classList.add("scrollFinal");
  } else {
    flecha.classList.remove("scrollFinal");
  }
});

//Detectamos evento click en el boton
flecha.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

//Detectar evento click en el evento
flecha.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

//Sobre Mi Adorable Perruco
// const myDog = {
//   name: "Richi",
//   pleasures: ["water", "eat", "sleeping", "play with the stick"],
//   colour: "canela",
//   "color Eyes": "brown",
//   race: "cooker Spanish-English",
//   legs: 4,
//   contidion: "nervous",
//   "preferred food": "Salchicha de Frankfurt",
//   affectionate: "sometimes",
//   Warrior: "always",
// };

// console.log(myDog);

// eventos
const botones = document.querySelector(".boton");
const pinturas = document.querySelector(".pinturas");
const cierreBoton = document.querySelector(".off-boton");
const abrirBotones = document.querySelectorAll(".letra");

const open = function () {
  botones.classList.remove("hidden");
};

const close = function () {
  botones.classList.add("hidden");
};

for (let i = 0; i < abrirBotones.length; i++)
  abrirBotones[i].addEventListener("click", open);
cierreBoton.addEventListener("click", close);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !boton.classList.contains("hidden")) {
    close();
  }
});

const aviso = document.querySelector("#cuadro");

aviso.addEventListener("click", () => {
  alert("Todos los derechos reservados © ");
});

const cursorRounded = document.querySelector(".rounded");
const cursorPointed = document.querySelector(".pointed");

(() => {
  const mouseFollower = document.querySelector(".mouse-follower");
  const mouseFollowerSibling = document.querySelector(
    ".mouse-follower-sibling"
  );

  if (mouseFollower && mouseFollowerSibling) {
    window.addEventListener("mousemove", (e) => {
      const mousePosition = { x: e.x, y: e.y };
      const shapeTl = gsap.timeline();

      shapeTl.to(mouseFollower, mousePosition, 0);
      shapeTl.to(
        mouseFollowerSibling,
        1,
        { x: e.x, y: e.y, ease: Power2.easeIn },
        "-=1"
      );
    });
  }
})();
