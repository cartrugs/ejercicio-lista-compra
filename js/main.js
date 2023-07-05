// Variables

const leche = document.querySelector("#leche");
const mantequilla = document.querySelector("#mantequilla");
const cacao = document.querySelector("#cacao");
const agua = document.querySelector("#agua");
const papelHigienico = document.querySelector("#papelHigienico");
const pastaDientes = document.querySelector("#pastaDientes");
const azucar = document.querySelector("#azucar");
const boton = document.querySelector(".btn");
const listaVacia = document.querySelector("#listaVacia");

const fragmento = document.createDocumentFragment();
const arrayAnyadidos = [];

//Eventos

document.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("btn")) {
    arrayAnyadidos.push(ev.target.id);
  }
  subirArrayLocal()
 
  llenarVacia();
  
  
});
console.log(arrayAnyadidos);

// Funciones

const subirArrayLocal = () => {
    let comprados = arrayAnyadidos;
    console.log(comprados)
    localStorage.setItem('compradosArray', JSON.stringify(comprados));
    console.log(comprados);
    return comprados
}

const llenarVacia = () => {
    const otroArray = subirArrayLocal()
    console.log(otroArray);
    otroArray.forEach((item) => {
    const nuevoArticulo = document.createElement("P");
    nuevoArticulo.textContent = item;
    console.log(nuevoArticulo);
    fragmento.append(nuevoArticulo);
  });

  listaVacia.append(fragmento);
};


