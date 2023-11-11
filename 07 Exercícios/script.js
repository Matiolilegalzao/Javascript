document.addEventListener("DOMContentLoaded", function () {
  let horaAtual = new Date();
  let hora = horaAtual.getHours(); // Adicione () para chamar o método getHours
  let minutos = horaAtual.getMinutes();
  let txthora = window.document.getElementById("hora");
  let body = document.body;
  let image = window.document.getElementById("imgprincipal");

  if (minutos > 9) {
    if (hora < 12) {
      body.style.backgroundColor = "#ffda47"; //manhã
      txthora.innerHTML = `Agora são ${hora}:${minutos}, bom dia!`;
      image.src = "images/amanhecer.jfif";
    } else if (hora < 18) {
      body.style.backgroundColor = "#ff7930"; //tarde
      txthora.innerHTML = `Agora são ${hora}:${minutos}, boa tarde!`;
      image.src = "images/tarde.jpg";
    } else {
      body.style.backgroundColor = "#1F2D6A"; //noite
      txthora.innerHTML = `Agora são ${hora}:${minutos}, boa noite!`;
      image.src = "images/noite.jpg";
    }
  } else {
    if (hora < 12) {
      body.style.backgroundColor = "#ffda47"; //manhã
      txthora.innerHTML = `Agora são ${hora}:0${minutos}, bom dia!`;
      image.src = "images/amanhecer.jfif";
    } else if (hora < 18) {
      body.style.backgroundColor = "#ff7930"; //tarde
      txthora.innerHTML = `Agora são ${hora}:0${minutos}, boa tarde!`;
      image.src = "images/tarde.jpg";
    } else {
      body.style.backgroundColor = "#1F2D6A"; //noite
      txthora.innerHTML = `Agora são ${hora}:0${minutos}, boa noite!`;
      image.src = "images/noite.jpg";
    }
  }
});
