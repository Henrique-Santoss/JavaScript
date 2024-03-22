function carregar () {
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('imagem')
    var data = new Date() 
    var hora = data.getHours ()
    msg.innerHTML = (`Agora são ${hora} horas.`)
    if ( hora > 0 && hora < 12 ) {
        //Bom Dia!
        img.src = 'manha.png'
        document.body.style.background = '#f0d5c0'
    } else if ( hora >= 12 && hora < 18 ) {
        //Boa Tarde!
        img.src = 'tarde.png'
        document.body.style.background = "#ea6500"
    } else {
        //Boa Noite!
        img.src = 'Noite.png'
        document.body.style.background = "#022c56"
    }
}