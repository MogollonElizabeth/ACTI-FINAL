const entrada = require('prompt-sync')();

class jerarquias{

    constructor(numero1,numero2,numero3){
        this.array=[numero1,numero2,numero3]
        this.arrayuno=[];
        this.arraydos=[];
    }

 demayoramenor(){
    let copiar=[...this.array];
    while(copiar.length>0){
        let empezar=this.array[0];
    
        let indiceborrar=0;
        
        for(let i=0 ; i<copiar.length; i++){
        if(empezar<copiar[i]){
            empezar=copiar[i]; 
            indiceborrar=i;        
   }
}
this.arrayuno.push(empezar)
copiar.splice(indiceborrar,1)
}
return this.arrayuno;
}
demenoramayor(){
    while(this.array.length>0){
        let empezar=this.array[0];
    
        let indiceborrarr=0;
        
        for(let i=0 ; i<this.array.length; i++){
        if(empezar>this.array[i]){
            empezar=this.array[i]; 
            indiceborrarr=i;        
   }
}
this.arraydos.push(empezar)
this.array.splice(indiceborrarr,1)
}
return this.arraydos;
}
}

let arrys=[];

for (let i=0; i<3; i++){
    let nume= i+1
    let guardar= parseInt(entrada("ingresa el: " + nume + " Numero "))
    arrys.push(guardar)
}

const nuevo= new jerarquias(arrys[0],arrys[1],arrys[2])
console.log("El número de en medio es: " + arrys[1])
const lisuno=nuevo.demayoramenor();
const lisdos=nuevo.demenoramayor();

const prim= document.getElementById("uno");
const seg= document.getElementById("dos");
const terr= document.getElementById("tres");

for(let i=0; lisuno.length; i++){
    prim.innerText=lisuno[0];


}