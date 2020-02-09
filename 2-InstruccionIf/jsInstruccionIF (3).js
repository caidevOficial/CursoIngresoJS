/*
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
**/
function mostrar()
{
//tomo la edad  
var inputEdad

	inputEdad = document.getElementById('edad').value;
	if (inputEdad >= 18){
		alert("Mayor de edad")
	}
	else{
		alert("Menor de Edad")
	}

}//FIN DE LA FUNCIÓN