const form= document.getElementById('form');
const nombre= document.getElementById('nombre');
const correo= document.getElementById('correo');
const titulo= document.getElementById('titulo');
const descripcion= document.getElementById('descripcion');

form.addEventListener('submit',function(event){

    event.preventDefault();
    
    let prob = Array(
        {
            usuario: nombre.value,
            correo: correo.value,
            titulo: titulo.value,
            descripcion: descripcion.value

        }
    )
    console.log(prob);
});


