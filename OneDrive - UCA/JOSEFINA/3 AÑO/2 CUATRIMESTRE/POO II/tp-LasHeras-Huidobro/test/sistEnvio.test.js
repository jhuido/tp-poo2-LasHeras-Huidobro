const Local=require('../src/Local.js');

test("Crear Local",()=>{
    var local1=new Local("Local");
    expect(local1.nombre).toBe("Local");
})

test("Local genere Paquete",()=>{
    var local1=new Local("Local");
    var paquete=local1.generarPaquete();
    expect(paquete.ubicacion).toBe("Local");
})