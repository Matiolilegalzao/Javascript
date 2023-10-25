document.addEventListener("DOMContentLoaded", function () {
  let horaAtual = new Date();
  let hora = horaAtual.getHours(); // Adicione () para chamar o método getHours

  let body = document.body;
  if (hora < 12) {
    body.style.backgroundColor = "#ffda47";
  } else if (hora < 18) {
    body.style.backgroundColor = "#ff7930";
  } else {
    body.style.backgroundColor = "#170073";
  }
});
