let contactos=["Jose Vasquez","Leyla Vasquez","Nahum Reyes"];
imprimirContactos(contactos);
console.log("");

const arrayContactosAñadidos=nuevoContacto(contactos, "Karla Castillo"); 
console.log("");
eliminarContacto(arrayContactosAñadidos);

function nuevoContacto(listaContactos,nombreContacto) {
    console.log("");
    console.log("Agrega un contacto");
    listaContactos.push(nombreContacto);
    imprimirContactos(listaContactos);
    return listaContactos;
}

function eliminarContacto(arraysContactos) {
    console.log("");
    console.log("Elimina un contacto");
    arraysContactos.pop();
    imprimirContactos(arraysContactos);
}

function imprimirContactos(contactos) {
    let contacto;
    for (contacto of contactos)
    {
        console.log(contacto)
    }
}