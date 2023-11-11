function somar() {
  let tn1 = window.document.getElementById("txtn1");
  let tn2 = window.document.getElementById("txtn2");
  let res = window.document.getElementById("res");
  let n1 = Number(tn1.value); //transforma o texto em numero
  let n2 = Number(tn2.value);
  var soma = n1 + n2;

  res.innerHTML = `A soma é entre ${n1} e ${n2} é igual a <strong>${soma}</strong>`;
}

function limpar() {
  let res = window.document.getElementById("res");
  res.innerHTML = "Resultado";
}
