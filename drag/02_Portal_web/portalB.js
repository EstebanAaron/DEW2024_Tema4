/*
  Sergio Andres Arcila Laguna 2DAWBs
*/
const SPAN_NUMERO_STRONGS = document.querySelector("#numero_de_strongs");
const LOS_STRONGS = document.querySelectorAll("strong");
const INPUTS_MENU = document.querySelectorAll("menu input");
const LOS_PARRAFOS = document.querySelectorAll("p");
const LOS_ARTICULOS = document.querySelectorAll("article");

let parrafoArrastrando;

window.onload = function () {
  contarNumeroStrongs();
  anhadirFuncionalidadCheckboxs();
  anahdirFuncionalidadMoverParrafos();
  anhadirFuncionalidadLeerMas();
};

function contarNumeroStrongs() {
  SPAN_NUMERO_STRONGS.textContent = LOS_STRONGS.length;
}

function anhadirFuncionalidadCheckboxs() {
  INPUTS_MENU.forEach((e) => e.setAttribute("data-contador", 0));
  INPUTS_MENU[0].addEventListener("click", ponerItalicaStrongs);
  INPUTS_MENU[1].addEventListener("click", ponerSubrayadoStrongs);
  INPUTS_MENU[2].addEventListener("click", ponerVerdeStrongs);
  INPUTS_MENU[3].addEventListener("click", ponerRojoStrongs);
}

function ponerItalicaStrongs() {
  let clase = "italica";
  ++this.dataset.contador % 2 ? ponerClaseDada(clase) : quitarClaseDada(clase);
}

function ponerSubrayadoStrongs() {
  let clase = "subrayado";
  ++this.dataset.contador % 2 ? ponerClaseDada(clase) : quitarClaseDada(clase);
}

function ponerVerdeStrongs() {
  let clase = "verde";
  ++this.dataset.contador % 2 ? ponerClaseDada(clase) : quitarClaseDada(clase);
}

function ponerRojoStrongs() {
  let clase = "rojo";
  ++this.dataset.contador % 2 ? ponerClaseDada(clase) : quitarClaseDada(clase);
}

function ponerClaseDada(clase) {
  LOS_STRONGS.forEach((e) => e.classList.add(clase));
}

function quitarClaseDada(clase) {
  LOS_STRONGS.forEach((e) => e.classList.remove(clase));
}

function anahdirFuncionalidadMoverParrafos() {
  LOS_PARRAFOS.forEach((parrafo) => {
    parrafo.draggable = "true";
    parrafo.addEventListener("dragstart", arrastrando);
  });
  LOS_ARTICULOS.forEach((e) => {
    e.addEventListener("drop", soltar);
    e.addEventListener("dragover", encima);
  });
}

function arrastrando(e) {
  parrafoArrastrando = e.target;
}

function encima(e) {
  e.preventDefault();
}

function soltar(e) {
  console.log(e.nodeValue);
  e.target.appendChild(parrafoArrastrando);
  seleccionarPadreArticle(e.target);
}

function seleccionarPadreArticle(e) {
  while (e.node) {}
}

function anhadirFuncionalidadLeerMas() {
  LOS_ARTICULOS.forEach((e) => {
    for (let i = 3; i < e.children.length; i++) {
      e.children[i].style.display = "none";
    }
    e.appendChild(crearLink());
  });
}

function crearLink() {
  let leerMas = document.createElement("p");
  let link = document.createElement("a");
  link.textContent = "Leer más..";
  link.href = "#";
  link.addEventListener("click", verRestoAriculo);
  leerMas.appendChild(link);
  return leerMas;
}

function verRestoAriculo() {
  let articulo = this.parentNode.parentNode;
  for (let i = 0; i < articulo.children.length; i++) {
    articulo.children[i].style.display = "block";
  }
}
