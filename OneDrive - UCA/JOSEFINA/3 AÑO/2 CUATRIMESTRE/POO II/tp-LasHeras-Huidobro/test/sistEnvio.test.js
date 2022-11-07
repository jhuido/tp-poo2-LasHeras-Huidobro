const Local=require('../src/Local.js');

test("Crear Local",()=>{
    var local1=new Local("Local");
    expect(local1.nombre).toBe("Local");
})