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

//Reloj digital
(function actualizarDatos() {
  //Obtener datos de tiempo y fecha
  var fecha = new Date(),
    ampm,
    horas = fecha.getHours(),
    minutos = fecha.getMinutes(),
    segundos = fecha.getSeconds(),
    diaSemana = fecha.getDay(), //comienza desde 0
    dias = fecha.getDate(),
    mes = fecha.getMonth(), //comienza desde 0
    year = fecha.getFullYear();

  //Obtenemos nuestros elementos HTML
  var elementoHoras = document.getElementById("horas"),
    elementoMinutos = document.getElementById("minutos"),
    elementoSegundos = document.getElementById("segundos"),
    elementoAmpm = document.getElementById("ampm"),
    elementoDiaSemana = document.getElementById("diaSe"),
    elementoDia = document.getElementById("dia"),
    elementoMes = document.getElementById("mes"),
    elementoYear = document.getElementById("year");

  //Declarar Arreglo de dias y meses
  var arraySemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ],
    arrayMes = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

  //Asignamos datos de fecha
  elementoDiaSemana.textContent = arraySemana[diaSemana];
  elementoDia.textContent = dias;
  elementoMes.textContent = arrayMes[mes];
  elementoYear.textContent = year;

  //Transformar el reloj de 24 a 12 Horas
  if (horas >= 12) {
    horas = horas - 12;
    ampm = "PM";
  }

  //Agregmos 0 a los minutos tambien a los segundos
  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  //Agregar condicional para evitar la hora 00
  if (horas == 0) {
    horas = 12;
  }

  //Asignar elementos de tiempo
  elementoHoras.textContent = horas;
  elementoMinutos.textContent = minutos;
  elementoSegundos.textContent = segundos;
  elementoAmpm.textContent = ampm;

  setInterval(actualizarDatos, 1000);
})();

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

// //Sobre Mi Adorable Perruco
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
//Arrays
const eleccion = [" 1-Dibujo Manga ", " 2-Kakashi ", " 3-Dragones "];

document.querySelector("#comentario").addEventListener("click", function () {
  const elegir = String(document.querySelector("#comentar").value);
  prompt(
    `¿Que dibujo te gusta mas de estos 3? : \n\ ${eleccion} \n\ 🌟🌟🌟🌟🌟`
  );
  alert(`Excelente Elección! \n\ Gracias Por El Comentario 🙂`);
});
console.log(eleccion);

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

const cursorRounded = document.querySelector('.rounded');
const cursorPointed = document.querySelector('.pointed');

(() => {
  const mouseFollower          = document.querySelector('.mouse-follower');
  const mouseFollowerSibling   = document.querySelector('.mouse-follower-sibling');

   if( mouseFollower && mouseFollowerSibling ) {
       window.addEventListener('mousemove', ( e ) => {
          const mousePosition = {x: e.x, y: e.y };
          const shapeTl = gsap.timeline();

          shapeTl.to(mouseFollower, mousePosition, 0);
          shapeTl.to(mouseFollowerSibling, 1,{x: e.x, y: e.y, ease: Power2.easeIn}, '-=1');
      });
   }
})(); 
