

//para fazer esse código funcionar, adicionei o comando "onload" ao Body vinculado a função carregar  
function carregar() {
    
    var img = document.getElementById('imagem')     
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `<h3>Agora são ${hora} horas e ${minuto} minutos.</h3>`
    if(hora >= 0 && hora < 12) {// Dia
        msg2.innerHTML = `<h3>Bom dia!!</h3>` 
        img.src = 'imagens/dia.png'
    } else if(hora >= 12 && hora < 18){ //tarde
        msg2.innerHTML = `<h3>Boa tarde!!</h3>` 
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#F0A290'
    } else {//noite
        msg2.innerHTML = `<h3>Boa noite!!</h3>` 
        img.src = 'imagens/noite.png'
        document.body.style.background = '#201676'
    }
}