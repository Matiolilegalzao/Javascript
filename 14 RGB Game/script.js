function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function clickButton(buttonNumber){ //função que retorna qual o botão que apertei
  if(buttonNumber == correctButton){
    alert("acertou")
  }else {
    alert("errou")
  }
}
function newColor(){
  
  correctButton = randomNumber(0, 5); //escolhe qual botão será o correto
  console.log(correctButton)
  document.getElementById("newColor") //atribui newColor() ao li
  let botões = document.querySelectorAll(".btn"); //cria um vetor com todos os .btn

  for (let i = 0; i < botões.length; i++) {
    let R = randomNumber(0, 255);
    let G = randomNumber(0, 255);
    let B = randomNumber(0, 255);
    botões[i].style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")"; //atribui cor aos botões

    if(i === correctButton){  //quando o contador chega no botão correto a ser escolhido, muda o html para o rgb
    let rgbcode = document.getElementById("rgbcode");
        botões[i].style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")";
    rgbcode.innerHTML = `rgb(${R}, ${G},${B})`;

    }
  }
}