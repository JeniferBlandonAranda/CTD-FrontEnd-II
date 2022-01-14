let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

function obtenerDatosDelUsuario() {
  datosPersona.nombre = prompt('Ingresa tu nombre')
  datosPersona.edad = parseInt(prompt('Ingresa el año en que naciste'))
  datosPersona.ciudad = prompt('Ingresa la ciudad en donde vives')
  datosPersona.interesPorJs = confirm('Te interesa Javascript?')
}

function renderizarDatosUsuario() {
  const d = new Date();
  obtenerDatosDelUsuario();
  document.getElementById("nombre").innerText = datosPersona.nombre
  document.getElementById("edad").innerText = parseInt(d.getFullYear()) - datosPersona.edad
  document.getElementById("ciudad").innerText = datosPersona.ciudad
  document.getElementById("javascript").innerText = datosPersona.interesPorJs ? "Si" : "No";
}

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "Lenguajes: HTML y CSS",
    bimestre: "Bimestre: 1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Lenguajes: Javascript",
    bimestre: "Bimestre: 2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "Lenguajes: React JS",
    bimestre: "Bimestre: 3er bimestre",
  },
];

function recorrerListadoYRenderizarTarjetas() {
  const contenedor = document.querySelector('#fila');

  function crearNoticia(imgUrl, lenguajes, bimestre) {
    const template = ` 
    <div class="caja">
        <img src="${imgUrl}">
        <h2>${lenguajes}</h2>
        <p>${bimestre}</p>
    </div>`;
    contenedor.innerHTML += template;
  }

  listado.forEach((entry) => {
    crearNoticia(entry.imgUrl, entry.lenguajes, entry.bimestre);
  });

}

function mostrarYOcultarDescripcionCompleta() {
  document.querySelector(".sobre-mi").classList.toggle('sobre-mi-completo');
}
