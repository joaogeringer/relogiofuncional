//sistema de relogio analogico simples

//setando variaveis com LET para data hora minuto e segundo
function relogio(){
    let data=new Date();
    let hora=data.getHours();
    let minuto=data.getMinutes();
    let segundo=data.getSeconds();

    if(hora<10){
        hora=0+hora;
    }
    if(minuto<10){
        minuto=0+minuto;
    }
    if(segundo<10){
        segundo=0+segundo;
    }
//fazendo a junção dos dados obtidos nas operaçoes anteriores
    let horas=hora+":"+minuto+":"+segundo;
    document.getElementById("rel").value=horas;
}
//setInterval trabalha apenas com milissegundos
let tempo=setInterval(relogio,1000);