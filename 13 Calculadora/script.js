let num
let res;
function getNumber() {
    let txtres = document.getElementById("resultado");
    res = Number(txtres.value);
}
function adicao(){
    getNumber();
    alert(res)
}

function addnumber(){
    let txtnum
    txtnum = document.getElementById("number");
    num = Number(txtnum.value)
    alert(num)
}