let num;
let res = 0;
let aux = 0;
let ultimaOperacao;

function getNumber() {
  let txtres = document.getElementById("resultado");
  res = Number(txtres.value);
}
function adicao() {
  getNumber();
  aux = res;
  res = 0;
  let inputResultado = document.getElementById("resultado");
  inputResultado.value = 0;
  ultimaOperacao = "soma";
}
function subtracao() {
  getNumber();
  aux = res;
  res = 0;
  let inputResultado = document.getElementById("resultado");
  inputResultado.value = 0;
  ultimaOperacao = "subtracao";
}

function multiplicacao() {
  getNumber();
  aux = res;
  res = 0;
  let inputResultado = document.getElementById("resultado");
  inputResultado.value = 0;
  ultimaOperacao = "multiplicacao";
}
function divisao() {
  getNumber();
  aux = res;
  res = 0;
  let inputResultado = document.getElementById("resultado");
  inputResultado.value = 0;
  ultimaOperacao = "divisao";
}

function addnumber(index) {
  let txtnum = document.getElementsByClassName("number")[index];
  num = Number(txtnum.value);
  let inputResultado = document.getElementById("resultado");
  inputResultado.value = inputResultado.value * 10 + num;
}

function calcular() {
  getNumber();
  let inputResultado = document.getElementById("resultado");
  if (ultimaOperacao == "soma") {
    inputResultado.value = res + aux;
  } else if (ultimaOperacao == "subtracao") {
    inputResultado.value = aux - res;
  } else if (ultimaOperacao == "multiplicacao") {
    inputResultado.value = aux * res;
  } else {
    inputResultado.value = aux / res;
  }
}
