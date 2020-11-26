var nombre;
var apellido;
var edad;
var correo;
var color;
var comentario;
expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function funcion(){
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    edad = document.getElementById("edad").value;
    correo = document.getElementById("correo").value;
    color = document.getElementById("color").value;
    comentario= document.getElementById("comentario").value;

    
    if(nombre=="" || apellido=="" || edad=="" || correo=="" || comentario==""){
        alert("Datos ingresados incompletos, por favor llene todas las casillas");
    }else{
        if( !expr.test(correo)){
            alert("Error: La direccion de correo " + correo + " es incorrecta, porfavor utilice un correo real");
        }else{
            if(edad>1 && edad<100){
                alert("Hola "+ nombre + " " + apellido + " " + "tu edad es " + edad + " " + "tu correo es " + correo + " " + "y tu color favorito es "+color);
            }else{
                alert("ingrese una edad realista");
            }
            
        }   
    }
};