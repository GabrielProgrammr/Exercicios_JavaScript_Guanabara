function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}.`

    if (hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#dfcab5'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'fototarde2.png'
        document.body.style.background = '#e76601'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#021c2d'
    }
}