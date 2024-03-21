// import { example } from './dataFunctions.js';
import { filterData, sortDataPrice, filterDataObj, sortData, computeStats} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

// muestra los datos en index
const root = document.querySelector("#root");
document.querySelector("main").appendChild(root);
root.appendChild(renderItems(data));

// menu responsive
const menuNormal = document.querySelector(".menu-normal");
const menuBoton = document.querySelector(".menu-boton");
const contenedor = document.querySelector(".contenedor");

const cerrarFiltros  = document.querySelector(".cerrar-filtros");

menuBoton.addEventListener("click", function() {
  menuNormal.style.display = "flex";
  contenedor.style.display = "flex";
  contenedor.style.flexDirection = "column";
  menuNormal.style.flexDirection = "column"
  menuBoton.style.display = "none";
  cerrarFiltros.style.display = "flex";
  
})

cerrarFiltros.addEventListener("click", function() {
  menuBoton.style.display = "block"
  menuNormal.style.display = "none"
  cerrarFiltros.style.display ="none"
})


// FUNCIONES USADAS EN LOS EVENTOS

function filtrarPelaje(data, pelajeSelec) {
  let gatosFiltrados = data;

  if (pelajeSelec === "pelo-corto") {
    gatosFiltrados = filterData(data, "pelajeGato", "Pelo corto");
  } else if (pelajeSelec === "pelo-semilargo") {
    gatosFiltrados = filterData(data, "pelajeGato", "Pelo semilargo");
  } else if (pelajeSelec === "pelo-largo") {
    gatosFiltrados = filterData(data, "pelajeGato", "Pelo largo");
  } else if (pelajeSelec === "sin-pelo") {
    gatosFiltrados = filterData(data, "pelajeGato", "Sin pelo");
  }

  return gatosFiltrados;
}

function filtrarPersonalidad(data, personalidadSelec) {
  let gatosFiltrados = data;

  if (personalidadSelec === "tranquilo") {
    gatosFiltrados = filterDataObj(data, "personalidad", "tranquilo");
  } else if (personalidadSelec === "carinoso") {
    gatosFiltrados = filterDataObj(data, "personalidad", "carinoso");
  } else if (personalidadSelec === "sociable") {
    gatosFiltrados = filterDataObj(data, "personalidad", "sociable");
  } else if (personalidadSelec === "energico") {
    gatosFiltrados = filterDataObj(data, "personalidad", "energico");
  } else if (personalidadSelec === "jugueton") {
    gatosFiltrados = filterDataObj(data, "personalidad", "jugueton");
  }

  return gatosFiltrados;
}

function ordenar(data, ordenSelec) {
  let gatosOrdenados = data;

  if (ordenSelec === "asc")  {
    gatosOrdenados = sortData(data, "name", "asc");
  } else if (ordenSelec === "desc") {
    gatosOrdenados = sortData(data, "name", "desc"); 
  } else if (ordenSelec === "precio-asc") {
    gatosOrdenados = sortDataPrice(data, "precioCachorro", "asc"); 
  }else if (ordenSelec === "precio-desc") {
    gatosOrdenados = sortDataPrice(data, "precioCachorro", "desc"); 
  }

  return gatosOrdenados;
}

// EVENTOS SELECT

const selectPelaje = document.querySelector("#pelajeGato");
const selectPersonalidad = document.querySelector("#personalidad");
const selectOrden = document.querySelector("#orden");

const conteo = document.getElementById("conteo");

// evento para select pelaje
selectPelaje.addEventListener("change", function (evento) { // event: la informacion del evento, cuando haces un cambio viaja la informacion de que has seleccionado o que has seleccionado previamente
  
  //insertar las funciones
  const gatosFiltradosPelaje = filtrarPelaje(data, evento.target.value);
  const gatosFiltradosPelajePersonalidad = filtrarPersonalidad(gatosFiltradosPelaje, selectPersonalidad.value);
  const gatosFiltradosOrdenados = ordenar(gatosFiltradosPelajePersonalidad, selectOrden.value) //si no esta seleccionado el select entonces la funcion retorna gatos filtrados

  root.innerHTML = "";
  root.appendChild(renderItems(gatosFiltradosOrdenados));
  conteo.textContent = "Cantidad: " + gatosFiltradosOrdenados.length; // muestra la cantidad
  //---------------------Funcionalidad del boton ver mas------cambios Adri
  let botonesVer= [];
  botonesVer = document.querySelectorAll("li");

  for (let i = 0; i < gatosFiltradosOrdenados.length; i++) {
    botonesVer[i].addEventListener("click", function () {

      sessionStorage.setItem("gatito", JSON.stringify(gatosFiltradosOrdenados[i]));
      //sessionStorage.setItem("gatito", JSON.stringify(data[i]));
      //console.log(JSON.stringify(data[i]));
      window.location.href = "gato.html";
    });
  }
  //-----------------------

});


// evento para select personalidad
selectPersonalidad.addEventListener("change", function (evento) {

  // insertar las funciones
  const gatosFiltradosPelaje = filtrarPelaje(data, selectPelaje.value);
  const gatosFiltradosPelajePersonalidad = filtrarPersonalidad(gatosFiltradosPelaje, evento.target.value);
  const gatosFiltradosOrdenados = ordenar(gatosFiltradosPelajePersonalidad, selectOrden.value);

  root.innerHTML = "";
  root.appendChild(renderItems(gatosFiltradosOrdenados));
  conteo.textContent = "Cantidad: " + gatosFiltradosOrdenados.length; // muestra la cantidad

  //---------------------Funcionalidad del boton ver mas------ cambios Adri
  let botonesVer= [];
  botonesVer = document.querySelectorAll("li");

  for (let i = 0; i < gatosFiltradosOrdenados.length; i++) {
    botonesVer[i].addEventListener("click", function () {

      sessionStorage.setItem("gatito", JSON.stringify(gatosFiltradosOrdenados[i]));
      //sessionStorage.setItem("gatito", JSON.stringify(data[i]));
      //console.log(JSON.stringify(data[i]));
      window.location.href = "gato.html";
    });
  }
  //-----------------------

});

// evento para ordenar
selectOrden.addEventListener("change", function (evento) {

  // insertar las funciones
  const gatosFiltradosPelaje = filtrarPelaje(data, selectPelaje.value);
  const gatosFiltradosPelajePersonalidad = filtrarPersonalidad(gatosFiltradosPelaje, selectPersonalidad.value);
  const gatosFiltradosOrdenados = ordenar(gatosFiltradosPelajePersonalidad, evento.target.value);

  root.innerHTML = "";
  root.appendChild(renderItems(gatosFiltradosOrdenados));
  conteo.textContent = "Cantidad: " + gatosFiltradosOrdenados.length;

  //--------------------- Funcionalidad del boton ver mas------ cambios Adri
  let botonesVer= [];
  botonesVer = document.querySelectorAll("li");

  for (let i = 0; i < gatosFiltradosOrdenados.length; i++) {
    botonesVer[i].addEventListener("click", function () {

      sessionStorage.setItem("gatito", JSON.stringify(gatosFiltradosOrdenados[i]));
      //sessionStorage.setItem("gatito", JSON.stringify(data[i]));
      //console.log(JSON.stringify(data[i]));
      window.location.href = "gato.html";
    });
  }
  //-----------------------

});

// evento para boton borrar filtros
const botonBorrar = document.getElementById("botonBorrar");
botonBorrar.addEventListener("click", function () {
  root.innerHTML = "";
  root.appendChild(renderItems(data));
  conteo.textContent = "Cantidad: " + data.length;
  selectPelaje.value = "none";
  selectPersonalidad.value = "none";
  selectOrden.value = "sin-orden";
  // console.log(computeStats(data));

  //Funcionalidad de los botones ver mas
  let botonesVer= [];
  botonesVer = document.querySelectorAll("li");

  for (let i = 0; i < data.length; i++) {
    botonesVer[i].addEventListener("click", function () {

      sessionStorage.setItem("gatito", JSON.stringify(data[i]));
      //sessionStorage.setItem("gatito", JSON.stringify(data[i]));
      //console.log(JSON.stringify(data[i]));
      window.location.href = "gato.html";
    });
  }
})

// al cargar la página, establece los valores por defecto
window.addEventListener("load", function () {
  selectPelaje.value = "none";
  selectPersonalidad.value = "none";
  selectOrden.value = "sin-orden";
});




//Funcionalidad de los botones ver mas
let botonesVer= [];
botonesVer = document.querySelectorAll("li");

for (let i = 0; i < data.length; i++) {
  botonesVer[i].addEventListener("click", function () {

    sessionStorage.setItem("gatito", JSON.stringify(data[i]));
    //sessionStorage.setItem("gatito", JSON.stringify(data[i]));
    //console.log(JSON.stringify(data[i]));
    window.location.href = "gato.html";
  });
}

//Botón estadísticas
const estadisticasBoton = document.getElementById("stats");
const estadisticasDiv = document.querySelector(".div-stadisticas")
estadisticasBoton.addEventListener("click", function() {
  estadisticasDiv.style.display = "block";
  estadisticasDiv.textContent = "El precio promedio de cada gato es: " + computeStats(data);
  
})