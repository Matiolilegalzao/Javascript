let horaAtual = new Date();
let semana = horaAtual.getDay();
let hora = horaAtual.getHours();
let minutos = horaAtual.getMinutes();
let dia = horaAtual.getDate();
let mes = horaAtual.getMonth();
let ano = horaAtual.getFullYear();

switch (semana) {
  case 0:
    semana = "Domingo";
    break;
  case 1:
    semana = "Segunda";
    break;
  case 2:
    semana = "Terça-feira";
    break;
  case 3:
    semana = "Quarta-feira";
    break;
  case 4:
    semana = "Quinta-feira";
    break;
  case 5:
    semana = "Sexta-feira";
    break;
  case 6:
    semana = "Sábado";
    break;
}
if (minutos > 9) {
  console.log(
    `Hoje é ${semana}. Agora são ${hora}:${minutos} do dia ${dia}/${
      mes + 1
    } de ${ano}`
  );
} else {
  console.log(
    `Hoje é ${semana}. Agora são ${hora}:0${minutos} do dia ${dia}/${
      mes + 1
    } de ${ano}`
  );
}

if (hora < 13) {
  console.log("Bom dia!");
} else if (hora < 6) {
  console.log("Boa noite!");
} else {
  console.log("Boa tarde!");
}
