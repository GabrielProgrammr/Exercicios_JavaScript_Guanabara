function tabuada (){
    var num = parseInt(document.getElementById('num').value)
    var res = document.getElementById('tab')
    var tabuada =' ';
    
    if (num.value == 0) {
    alert('[ERRO] Digite um número')

    } else {
    for (var c = 1; c <=10; c++){
        tabuada += num+" x "+c+" = "+num*c+"<br />"

    res.innerHTML = tabuada }
    }

}
   