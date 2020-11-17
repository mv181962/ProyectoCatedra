

var cajon=new Array();

function guardar_datos(){
    var problema = new Object();
    problema.titulo=document.getElementById('txttitulo').value;
    problema.nombre=document.getElementById('txtnombre').value;
    problema.correo=document.getElementById('txtcorreo').value;
    problema.descripcion=document.getElementById('txtdescripcion').value;

    cajon.push(problema);
    console.log(cajon); 
    crear_fila(problema.titulo,problema.nombre,problema.correo,problema.descripcion);
    guardar_local();
    get_local()

}

function crear_fila(d1,d2,d3,d4){
    var table =document.getElementById('datos');
    tablerows=table.getElementsByTagName('tr');
    var numfilas = tablerows.length;

    row=table.insertRow(numfilas);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);

    cell1.innerHTML=d1;
    cell2.innerHTML=d2;
    cell3.innerHTML=d3;
    cell4.innerHTML=d4;
}

function guardar_local(){

    localStorage.setItem('problema',JSON.stringify(cajon));
}

function get_local(){
    var storage = localStorage.getItem('problema');

    alert('Guardado Exitoso');
}



