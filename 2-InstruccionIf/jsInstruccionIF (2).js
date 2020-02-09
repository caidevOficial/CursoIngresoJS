/**
Al ingresar una edad debemos informar solo si la persona es mayor de edad.
**/
function mostrar()
{
//tomo la edad  
var inputEdad

	inputEdad = document.getElementById('edad').value;
	if (inputEdad >= 18){
		alert("Mayor de Edad");
	}


}//FIN DE LA FUNCIÓN