function verificaVelocidade() {
  let txtveloc = window.document.getElementById("velocidade");
  let veloc = Number(txtveloc.value);

  let txtres = window.document.getElementById("result");
  if (veloc > 60) {
    txtres.innerHTML = `"Você está a ${veloc}Km/h, você foi multado!"`;
  } else {
    txtres.innerHTML = `"Você está a ${veloc}Km/h."`;
  }
}

function verificaNacionalidade() {
  let txtnacio = window.document.getElementById("nacio");
  txtresultado = window.document.getElementById("result2");

  if (
    txtnacio.value == "Brasil" ||
    txtnacio.value == "Brasileiro" ||
    txtnacio.value == "brasil" ||
    txtnacio.value == "brasileiro"
  ) {
    txtresultado.innerHTML = '"Você é brasileiro"';
  } else {
    txtresultado.innerHTML = '"Você é estrangeiro"';
  }
}
