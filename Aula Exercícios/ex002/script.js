function verifica(){
    var agora = new Date()
   // var hora = agora.getHours()
    var hora = 8
    var titulo = window.document.querySelector('div#msg')
    var foto = window.document.getElementById('img')
    var body = window.document.querySelector('body')

    if (hora > 0 && hora < 12){
        foto.src = 'manha.jpg'
        body.style.background = "rgb(219 202 6 / 75%)"
        titulo.innerHTML = "Agora é de manhã"
        
      
    }else if(hora >= 12 && hora < 18){
        body.style.background = "rgb(143 80 1 / 68%)"
        titulo.innerHTML = "Agora é de tarde"
        foto.src = 'tarde.jpg'
    }else if(hora < 23){
        foto.src = 'noite.jpg'
        body.style.background = "rgb(104 104 104)"
        titulo.innerHTML = "Agora é de noite"
       
    }

}