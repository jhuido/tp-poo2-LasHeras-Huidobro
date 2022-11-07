const Paquete=require('../src/Paquete.js');

function Local(nombre){
    this.nombre=nombre;
    this.proceso=[];

    this.generarPaquete=function(){
        var paquete=new Paquete();
        proceso[0]=paquete;
        return paquete;
    }
}

module.exports=Local;