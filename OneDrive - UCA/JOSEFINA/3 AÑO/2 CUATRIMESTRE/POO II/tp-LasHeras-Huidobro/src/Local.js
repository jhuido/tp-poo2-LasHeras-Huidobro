const Paquete=require('../src/Paquete.js');

function Local(nombre){
    this.nombre=nombre;
    this.generarPaquete=function(){
        var paquete=new Paquete();
        return paquete;
    }
}

module.exports=Local;