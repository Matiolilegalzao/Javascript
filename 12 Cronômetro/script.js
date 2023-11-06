let seg = 0,
  min = 0,
  hora = 0;
let timer;

function incrementaSeg() {
  if (seg < 10) {
    document.getElementById("segundos").value = "0" + seg;
  } else {
    document.getElementById("segundos").value = seg;
  }
  if (min < 10) {
    document.getElementById("minutos").value = "0" + min;
  } else {
    document.getElementById("minutos").value = min;
  }
  if (hora < 10) {
    document.getElementById("horas").value = "0" + hora;
  } else {
    document.getElementById("horas").value = hora;
  }

  seg++;

  if (seg > 59) {
    min++;
    seg = 0;
  }
  if (min > 59) {
    hora++;
    min = 0;
  }
}

function iniciar() {
  incrementaSeg();
  timer = setInterval(incrementaSeg, 1000);
}
function parar() {
  clearInterval(timer);
}
function reset() {
  seg = 0;
  min = 0;
  hora = 0;
  parar();
  incrementaSeg();
}
