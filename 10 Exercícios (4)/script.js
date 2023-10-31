function gerarTabela() {
    let select = document.getElementById("tabuada");
    select.innerHTML = ""

    let txtnumero = document.getElementById("numero");
    let numero = Number(txtnumero.value);

    let i
    for(i = 1; i<=10;i++){
        let option = document.createElement("option");
        option.text = `${numero} * ${i} = ${numero * i}`
        select.add(option)
    }

}   