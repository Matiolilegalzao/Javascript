document.addEventListener("DOMContentLoaded", function () {});

function verificarIdade() {
  let horaAtual = new Date();
  let ano = horaAtual.getFullYear();
  let txtidade = window.document.getElementById("data");
  let idade = Number(txtidade.value);

  let txtmsg = window.document.getElementById("msg");
  txtmsg.innerHTML = `Estamos em ${ano}, você tem ${ano - idade}`;
}
