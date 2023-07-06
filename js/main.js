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

let noPerderLocal = JSON.parse(localStorage.getItem("compradosArray")) || [];
//Eventos


document.addEventListener("click", ({ target }) => {
  
  if(target.classList.contains("btn")){
   const valoresObjeto = target.id;
   subirArrayLocal(valoresObjeto)
   llenarVacia();
  
  }
  if (target.classList.contains("btnQuitar")) {
    console.log(target)
    const valoresObjeto = target.id;
   restarArrayLocal(valoresObjeto);
   llenarVacia();
  }
  if (target.classList.contains("btnQT")) {
    borrarTodo();
  }
});


const borrarTodo = () => {
  
  localStorage.clear();
  noPerderLocal = [];
  llenarVacia();
}


// Funciones

const subirArrayLocal = (id) => {

  const coincidencia = noPerderLocal.find((elemento) => elemento.producto == id)

  if (!coincidencia) {
    noPerderLocal.push({
      producto: id,
      cantidad: 1
    })

    localStorage.setItem("compradosArray", JSON.stringify(noPerderLocal));
  }
  else {
    coincidencia.cantidad++;
    localStorage.setItem("compradosArray", JSON.stringify(noPerderLocal));
    console.log(coincidencia)
  }

}

const restarArrayLocal = (id) => {
const coincidencia = noPerderLocal.find((elemento) => elemento.producto == id )

if (coincidencia.cantidad > 1 ) {
  coincidencia.cantidad--;
  localStorage.setItem("compradosArray", JSON.stringify(noPerderLocal));
}

else { 
  const posicionElemento = noPerderLocal.findIndex((elemento) => elemento.producto == id)
if(posicionElemento!==-1){
noPerderLocal.splice(posicionElemento,1)
localStorage.setItem("compradosArray", JSON.stringify(noPerderLocal));
}
}}

const llenarVacia = () => {
  listaVacia.innerHTML = ""

  //const pintado = JSON.parse(localStorage.getItem("compradosArray")) || [];
  noPerderLocal.forEach((item) => {

    const nuevoArticulo = document.createElement("P");
    nuevoArticulo.textContent = `${item.producto} ${item.cantidad}`;

    const botonQuitar = document.createElement("BUTTON")
    botonQuitar.classList.add("btnQuitar");
    botonQuitar.textContent="quitar de la cesta";
    botonQuitar.setAttribute("id", item.producto)


    nuevoArticulo.append(botonQuitar);
    fragmento.append(nuevoArticulo);
    

  } ) 
  const botonQuitarTodo = document.createElement("BUTTON");
  botonQuitarTodo.classList.add("btnQT");
  botonQuitarTodo.textContent="ELIMINAR TODA LA CESTA"

  listaVacia.append(fragmento);
  listaVacia.append(botonQuitarTodo);
};
llenarVacia()
