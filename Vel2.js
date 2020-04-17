var m;
var n;
var o;
var b = document.getElementById("vel1");
var c = document.getElementById("vel2");
var d = document.getElementById("stop");
b.addEventListener("click", velocidad1);
c.addEventListener("click", velocidad2);
d.addEventListener("click", stop);

function velocidad1(evento) {
    //    location.reload();
    m = 2000;
    n = 4000;
    o = 6000;
    dibujar();
}

function velocidad2(evento) {
    //    location.reload();
    m = 1000;
    n = 2000;
    o = 3000;
    dibujar();
}

function stop(evento) {
    location.reload();
}