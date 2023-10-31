const emoji = new Array(2);
emoji[0] = String.fromCodePoint(0x1F449)
emoji[1] = String.fromCodePoint(0x1F3C1); 

function contar(){
    let txtinicio = window.document.getElementById("inicio")
    let txtfim = window.document.getElementById("fim")
    let txtpasso = window.document.getElementById("passo")
    let txtres = window.document.getElementById("res")
 
    if(txtpasso.value != 0 && txtinicio.value != 0){
        let inicio = Number(txtinicio.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)
        txtres.innerHTML = "Aguardando Calculo..."


        i = inicio
        if(passo > 0){
            while(i < fim){

                txtres.innerHTML += `${i} ${emoji[0]}`;
                i+=passo;
                
                if(i >= fim){
                    txtres.innerHTML += emoji[1]
                }
            }
        }else{
            while(i > fim){

                txtres.innerHTML += `${i} ${emoji[0]}`;
                i+=passo;
                
                if(i <= fim){
                    txtres.innerHTML += emoji[1]
                }
            }  
        }
    }else{
        txtres.innerHTML = "Erro"
    }
}