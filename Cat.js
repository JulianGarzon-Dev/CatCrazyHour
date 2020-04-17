var p = document.getElementById("Cat");
var papel = p.getContext("2d");
var cantidad = aleatorio(1, 1);
var cantidad2 = aleatorio2(1, 1);

var fondo = {
    url: "acuario.png",
    cargaOK: false
}

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargafondo);

var fish1 = {
    url: "fish1.png",
    cargaOK: false
}

var fish2 = {
    url: "fish2.png",
    cargaOK: false
}

fish1.objeto = new Image();
fish1.objeto.src = fish1.url;
fish1.objeto.addEventListener("load", cargafish1);

fish2.objeto = new Image();
fish2.objeto.src = fish2.url;
fish2.objeto.addEventListener("load", cargafish2);

function cargafondo() {
    fondo.cargaOK = true;
    //dibujar();
}

function cargafish1() {
    fish1.cargaOK = true;
    //dibujar();
}

function cargafish2() {
    fish2.cargaOK = true;
    //dibujar();
}

function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

function aleatorio2(min, max) {
    var resultado2;
    resultado2 = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado2;
}