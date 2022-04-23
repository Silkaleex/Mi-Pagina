let x = 20;
let y = 10;

let suma = x + y;
console.log(suma);

let primero = `En la montaña hay `;
let segundo = `Una gran helada debido a las bajas temperaturas`;
let frase = primero + segundo;
console.log(frase);

let arreglo = ["Ramon", "Juan Carlos", "Juan Antonio", "Pepe", "Rafa", "Alex"];
console.log(arreglo[0]);

let eliminar = arreglo.pop();
console.log(eliminar);

let añadir = arreglo.push("Jose");
console.log(añadir);

let posicionI = 4;
let posicionF = 5;

let elementosEliminados = arreglo.splice(posicionI, posicionF);
console.log(elementosEliminados);

let copiarArray = arreglo.slice();
console.log(copiarArray);
console.log(Object.keys(arreglo));

let animales = [];
animales.push("tigre", "delfin", "cuervo", "conejo", "camaleon");
console.log(animales.length);
animales[5] = "scorpion";
console.log(Object.keys(animales));

let modificacion = document.querySelector("#texto");
modificacion.style.backgroundColor = "darkred";
modificacion.style.padding = "100px";
modificacion.style.margin = "0px auto";
modificacion.style.border = "5px solid red";
modificacion.style.borderRadius = "50%";

let boton = document.querySelector("#btn");
let boton1 = document.querySelector("#btn1");

let parrafo = document.querySelector("#texto aside p");

//click
boton.addEventListener("click", function () {
  modificacion.style.border = "5px solid purple";
  modificacion.style.backgroundColor = "#8700FF";
  modificacion.style.transition = "1s all";
  parrafo.style.border = "5px groove #D29FFF";
  parrafo.style.backgroundColor = "purple";
  parrafo.style.transition = "1s all";
  parrafo.style.color = "#D19DFF";
});

boton1.addEventListener("click", function () {
  modificacion.style.border = "5px solid red";
  modificacion.style.backgroundColor = "darkred";
  modificacion.style.transition = "1s all";
  parrafo.style.border = "10px groove darkred";
  parrafo.style.backgroundColor = "#ff3f3f";
  parrafo.style.transition = "1s all";
  parrafo.style.color = "darkred";
});

let diseño = document.querySelector("body");
diseño.style.backgroundColor = "#D2C200";
