function clicar() {
  var area = window.document.getElementById("area");
  area.innerHTML = "Clicou";
  area.style.background = "red";
}

function entrar() {
  var area = window.document.getElementById("area");
  area.innerHTML = "Mouse detectado!";
}

function sair() {
  var area = window.document.getElementById("area");
  area.innerHTML = "Mouse não-detectado";
  area.style.background = "greenyellow";
}
