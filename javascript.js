let lista_imagenes = [
  "./imagenes/mokemap.png",
  "./imagenes/mokepons_mokepon_capipepo_attack.png",
  "./imagenes/mokepons_mokepon_hipodoge_attack.png",
  "./imagenes/mokepons_mokepon_ratigueya_attack.png",
];

let imagen_slider = document.getElementById("imagen-slider");

let boton_izquierdo = document.getElementById("boton-izquierda");

let boton_derecha = document.getElementById("boton-derecha");

let indice = 0;

function iniciar_programa() {
  imagen_slider.src = lista_imagenes[indice];
}

function siguiente() {
  if (indice == lista_imagenes.length - 1) {
    indice = -1;
  }
  indice++;
  imagen_slider.src = lista_imagenes[indice];
}

function atras() {
  if (indice == 0) {
    indice = lista_imagenes.length;
  }
  indice--;
  imagen_slider.src = lista_imagenes[indice];
}

window.addEventListener("load", iniciar_programa);
