let contactos=[{
    id:1,
    nombres: "Jose",
    apellidos: "Vasquez",
    telefono:"+504 96921696",
    ubicacion:{
        ciudad:"Siguatepeque",
        direccion:"Barrio Fatima"
}
}]

imprimirContactos(contactos);
function imprimirContactos(arrayContactos) {
    for (let i=0;i<=arrayContactos.length-1;i++)
    {
        console.log(arrayContactos[i].id + ". " + arrayContactos[i].nombres + " " + arrayContactos[i].apellidos);
        console.log("Movil: " + arrayContactos[i].telefono);
        console.log("Ubicacion: " + arrayContactos[i].ubicacion.ciudad + ", " + arrayContactos[i].ubicacion.direccion );
    }
        console.log(" ");
}

function agregarContacto(id, nombres, apellidos, telefono, ciudad, direccion ){
    let nuevo={//funcion
        id:id,
        nombres:nombres,
        apellidos:apellidos,
        telefono:telefono,
        ubicacion:{
            ciudad:ciudad,
            direccion:direccion
        }
    }
    contactos.push(nuevo);
}

agregarContacto(2, "Leyla", "Vasquez", "+504 94757879", "Siguatepeque", "Barrio Parnaso" );
agregarContacto(3, "Nahum", "Reyes", "+504 98457485", "Siguatepeque", "Barrio Parnaso" );
agregarContacto(4, "Karla", "Castillo", "+504 97485747", "Zacapa", "Barrio Arriba" );

imprimirContactos(contactos);

function eliminarContacto(contactos) {
    console.log("");
    console.log("Elimina un contacto");
    contactos.pop();
    imprimirContactos(contactos);
}