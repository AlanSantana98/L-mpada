const turnOn = document.getElementById ('turnOnOff')
const lamp = document.getElementById('lamp')

function isLampBrokem() {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if(!isLampBrokem()) {
        lamp.src = './img/ligada.jpg';   
    }
}

function lampOff () {
    if(!isLampBrokem()) {
        lamp.src = './img/desligada.jpg';
    }
    }
 
 function  lampBrokem() {
    lamp.src = './img/quebrada.jpg';
 }  

 function lampOnOff(){
    if(turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
 }

turnOnOff.addEventListener("click", lampOnOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBrokem);



// aula 2, 18 minutos e 32 segundos //