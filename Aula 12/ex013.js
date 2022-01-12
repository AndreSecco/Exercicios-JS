var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)

if(hora >0 && hora < 5 ){
    console.log('Boa madrugada')
}else if (hora < 12){
    console.log('Agora é de manhã')
}else if(hora < 18){
    console.log('Agora é de tarde')
}else if(hora <23){
    console.log('Agora é de noite')
}else if(hora >0 && hora < 5 ){
    console.log('Boa madrugada')
}