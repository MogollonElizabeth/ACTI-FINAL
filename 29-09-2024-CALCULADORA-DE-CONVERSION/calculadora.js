const temperatura = document.getElementById('dato')
const temperaturade = document.getElementById('temperatura')
const temperatura_a = document.getElementById('pasar_a')
const formu_a = document.getElementById('formulario')
const resu= document.getElementById('Resul')
let resultado=0;
function convertir(){
    formu_a.addEventListener('submit',()=>{
        event.preventDefault();
        let valor_dato= parseFloat(temperatura.value);
        let valor_de= temperaturade.value;
        let valor_a= temperatura_a.value;

        if(valor_de=="Elige"){
            resu.innerText="Por favor ingresa la temperatura que deseas convertir"
        }else if(valor_a=="Elige"){
            resu.innerText="Por favor ingresa la temperatura a la cual deseeas convertir"
        }else{
        
        if(valor_de=='Grados' && valor_a=='Grados fahrenheit'){
            resultado= (valor_dato*(9/5))+32;
            temperatura.value="";
            

        }else if(valor_de=='Grados' && valor_a=='Grados kelvin'){
            resultado= valor_dato+273.15
            temperatura.value="";

        }else if (valor_de=='Grados fahrenheit' && valor_a=='Grados'){
            resultado= (5/9)*(valor_dato-32);
            temperatura.value="";
        }else if (valor_de=='Grados fahrenheit' && valor_a=='Grados kelvin'){

            resultado= (5/9)*(valor_dato-32)+273.15;

        }else if(valor_de=='Grados kelvin' && valor_a=='Grados'){
            resultado= valor_dato-273.15
            temperatura.value="";

        }else if(valor_de=='Grados kelvin' && valor_a=='Grados fahrenheit'){

            resultado= ((9/5)*(valor_dato-273.15))+32
            temperatura.value="";
        }else{
            resultado=valor_dato;
            temperatura.value="";
        }

        if (isNaN(resultado)){
            console.log("");
        }else{
        resu.innerHTML=` el resultado de la operacion es ${resultado} ${temperatura}.`
    }   
    }   
    })
    

}
convertir();
