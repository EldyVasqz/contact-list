//Cree mi objeto de contactos con sus carateristicas
let contactos=[
    {
    id:1,
    nombres: "Jose",
    apellidos: "Vasquez",
    telefono:"+504 96921696",
    ubicacion:{
        ciudad:"Siguatepeque",
        direccion:"Barrio Fatima"
   }
}]

//Imprimi la lista original

imprimirContactos(contactos);

//Agregue 3 contactos nuevos

agregarContacto(2, "Leyla", "Vasquez", "+504 94757879", "Siguatepeque", "Barrio Parnaso" );
agregarContacto(3, "Nahum", "Reyes", "+504 98457485", "Siguatepeque", "Barrio Parnaso" );
agregarContacto(4, "Karla", "Castillo", "+504 97485747", "Zacapa", "Barrio Arriba" );

//Imprimo la lista con los nuevos contactos agregados

imprimirContactos(contactos);

//Elimino el ultimo contacto

eliminarContacto(contactos);

//Actualizo el nombre y la direccion del primero contacto

actualizarContactos (1, "Socorro", "Barrio Altos de Fatima");

//Imprimo la lista con los ultimos cambios

imprimirContactos(contactos);


   function imprimirContactos(arrayContactos) {
    for (let i=0;i<=arrayContactos.length-1;i++)
    {
//Recorro todos los contactos y concateno el id con el nombre, el apellido y la ubicacion usando el console.log y + 
        console.log(arrayContactos[i].id + ". " + arrayContactos[i].nombres + " " + arrayContactos[i].apellidos);
        console.log("Movil: " + arrayContactos[i].telefono);
        console.log("Ubicacion: " + arrayContactos[i].ubicacion.ciudad + ", " + arrayContactos[i].ubicacion.direccion );
    }
        console.log(" ");
}

//Creo la funsion para agregar nuevos contactos y sus caracteristicas y la funsion recibe lo que quiero agregar (creo un objeto nuevo para agregarlo al objeto contactos y al final usando push se lo agrego al objeto pricipal)
function agregarContacto(id, nombres, apellidos, telefono, ciudad, direccion ){
    let nuevo={
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

//Creo la funsion para eliminar el ultimo contacto agregado (utilizo la funsion pop para eliminar el ultimo contacto)
function eliminarContacto(contactos) {
    console.log("");
    console.log("Elimina un contacto");
    contactos.pop();
    imprimirContactos(contactos);
}  
//Creo la funsion para actualizar las caracteristicas de un contacto (Uso un for donde recorro todos los contactos y solo cambio en el id especificado)
function actualizarContactos(idN, nombresN, direccionN){
        for(contacto of contactos)
        {
            if(contacto.id==idN){ 
                contacto.nombres=nombresN;
                contacto.ubicacion.direccion=direccionN;
            }
        }
     
        }