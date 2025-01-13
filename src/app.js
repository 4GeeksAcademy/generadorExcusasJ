/* eslint-disable */
var datos = [];

function guardarDatos() {
  let campeonDatos = document.getElementById("campeon").value;
  let lineaDatos = document.getElementById("linea").value;
  let hechizoDatos = document.getElementById("hechizo").value;

  let nuevoDato = {
    campeon: campeonDatos,
    linea: lineaDatos,
    hechizo: hechizoDatos
  };

  datos.push(nuevoDato);

  document.getElementById("campeon").value = "";
  document.getElementById("linea").value = "";
  document.getElementById("hechizo").value = "";

  mostrar();
}

function mostrar() {
  console.log(datos);
}
