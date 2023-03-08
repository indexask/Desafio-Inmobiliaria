const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
  },
];

const propiedaddiv = document.querySelector(".propiedades");
const button = document.querySelector("button");
button.addEventListener("click", validacion);
const body = document.querySelector("body");
body.addEventListener("load", filtropopiedades(0, 0, 5000));

function filtropopiedades(quartos, desde, hasta) {
  let i = 0;
  propiedaddiv.innerHTML = "";
  for (propiedad of propiedadesJSON) {
    if (
      propiedad.rooms >= quartos &&
      propiedad.m >= desde &&
      propiedad.m <= hasta
    ) {
      propiedaddiv.innerHTML += `
      <div class="propiedad">
        <div class="img" style="background-image: url('${propiedad.src}')"></div>
        <section>
          <h5>${propiedad.name}</h5>
          <div class="d-flex justify-content-between">
            <p>Cuartos: ${propiedad.rooms}</p>
            <p>Metros: ${propiedad.m}</p>
          </div>
          <p class="my-3">${propiedad.description}</p>
          <button class="btn btn-info ">Ver más</button>
        </section>
      </div>
      `;
      i++;
    }
  }
  const propiedadtotal = document.querySelector("#propiedadestotal");
  propiedadtotal.innerHTML = i;
}

function validacion() {
  let cuartos = document.querySelector("#cuartos").value,
    desde = document.querySelector("#desde").value,
    hasta = document.querySelector("#hasta").value;
  (cuartos = Number(cuartos)), (desde = Number(desde)), (hasta = Number(hasta));
  if (cuartos == "" || desde == "" || hasta == "") {
    alert("Ninguno de los valores pueden estar sin rellenar o ser 0");
  } else if (cuartos < 1) {
    alert("No existe propiedad sin ningun cuarto, verifique numero digitado");
  } else if (desde < 6 || hasta < 6) {
    alert("No existe propiedad con menos de 6m2");
  } else if (hasta < desde) {
    alert(
      `Error, hasta no puede ser menor a desde tiene que ser igual o mayor a ${desde}.`
    );
  } else {
    filtropopiedades(cuartos, desde, hasta);
  }
}
