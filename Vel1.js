function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.objeto, 0, 0);
    }

    if (fish1.cargaOK) {
        for (v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 6);
            var y = aleatorio(0, 6);
            x = x * 190;
            y = y * 90;
            var timer1 = setTimeout(function() {
                papel.drawImage(fish1.objeto, x, y);
            }, m);
        }
    }
    if (fish2.cargaOK) {
        for (v = 0; v < cantidad2; v++) {
            var w = aleatorio2(0, 6);
            var r = aleatorio2(0, 6);
            w = w * 190;
            r = r * 90;
            var timer1 = setTimeout(function() {
                papel.drawImage(fish2.objeto, w, r);
            }, n);
        }
    }
    var timer3 = setTimeout(function() {

        dibujar();
    }, o);

}