const Local=require('../src/Local.js');

test("Crear Local",()=>{
    var local1=new Local("Local");
    expect(local1.nombre).toBe("Local");
})

test("Local genere Paquete",()=>{
    var local1=new Local("Local");
    var paquete=local1.generarPaquete();
    expect(paquete.tiempo).toBe(0);
})

test("Ubicacion del paquete",()=>{
    var local1=new Local("Local");
    var paquete=local1.generarPaquete();
    expect(paquete.ubicacionActual).toBe("Cola de salida");
})
