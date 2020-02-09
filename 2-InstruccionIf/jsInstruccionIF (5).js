/*
Al ingresar una edad solo debemos informar si la persona
NO es adolescente.
**/
function mostrar()
{
//tomo la edad  
var inputEdad

	inputEdad = document.getElementById('edad').value;
	if ((inputEdad <13)|| (inputEdad >17)){
		alert("No Es Adolescente");
	}

}//FIN DE LA FUNCIÓN