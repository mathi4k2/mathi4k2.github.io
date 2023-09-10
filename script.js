const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato y que el peso sea hasta 30 para el metodo Holliday-Segar:
    if (DATO > 0 && DATO <=30 ){
        ERROR.style.display = 'none'
        //extrae el volumen de la funcion calcVol
        let volumen = calcVol(DATO);
        //calcula el mantenimiento horario
        let mantenimiento=volumen/24
        //calcula el mantenimiento y medio
        let mantmedio=mantenimiento*1.5
        //muestra en pantalla el volumen diario, mantenimiento y mantenimiento y medio, se limita el mantenimiento a 2 decimales 
        FLU.innerHTML = 'Volumen diario: ' + volumen + ' cc';
        MAN.innerHTML = 'Mantenimiento:  ' + mantenimiento.toFixed(2) + ' cc/hr <br> Mantenimiento y medio: '+ mantmedio.toFixed(2) +'cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    //calculo por superficie corporal si se superan los 30 kg
    } else if (DATO > 30){
        ERROR.style.display = 'none'
        //extrae la superficie de la funcion calcVol
        console.log("Dato mayor a 30")
        console.log(DATO)
        let aux=parseFloat(DATO);
        console.log("auxiliar: "+aux)
        let volu = superfCorp(aux);
        console.log(volu)
        //calcula el volumen multiplicando por 1500 y 2000 respectivamente
        let vol1= volu*1500
        let vol2= volu*2000
        //calcula el volumen por hora
        let cc1=vol1/24;
        let cc2=vol2/24;
        //muestra en el html el volumen diario y mantenimiento horario
        FLU.innerHTML ='Volumen diario: ' + vol1.toFixed(2) + ' cc (*1500) /' + vol2.toFixed(2) + 'cc (*2000)';
        MAN.innerHTML = 'Mantenimiento: ' + cc1.toFixed(2) +' cc/hr (*1500) <br>'+ cc2.toFixed(2) +'cc/hr (*2000)';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }
    //pantalla de error si no se ingresa un dato
    else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})
//funcion para devolver volumen o superficie corporal (devuelve volumen si peso hasta 30 kilos, para valores mayores devuelve superficie corporal)
function calcVol(peso){
    let vol;
    //hasta los 10 kg
    if (peso<=10){
        vol=peso*100;
    }
    //hasta los 20 kilos
    else if (peso<=20){
        vol=1000+((peso-10)*50);
    }
    //hasta los 30 kilos 
    else if (peso<=30){
        vol=1500+((peso-20)*20);
    }
    //metodo de superficie corporal superando los 30 kg, devuelve la superficie y el volumen se calcula en el HTML
    return vol;
}

function superfCorp(peso){
        vol=((peso*4)+7)/(peso+90);
        return vol
}