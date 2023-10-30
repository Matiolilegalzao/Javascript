function contar(){
    let txtinicio = window.document.getElementById("inicio")
    let txtfim = window.document.getElementById("fim")
    let txtpasso = window.document.getElementById("passo")
    let txtres = window.document.getElementById("res")

    let inicio = Number(txtinicio.value)
    let fim = Number(txtfim.value)
    let passo = Number(txtpasso.value)

    for(let i = inicio; i <=fim;i++){
        txtres.innerHTML = `${i}`
    } 
}