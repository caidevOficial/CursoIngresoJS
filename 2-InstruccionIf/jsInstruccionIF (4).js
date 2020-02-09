/**
Al ingresar una edad debemos informar 
si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/
function mostrar()
{
//tomo la edad  
var inputEdad

	inputEdad = document.getElementById('edad').value;
	if ((inputEdad >=13)&&(inputEdad <=17)){
		alert("Es Adolescente");
	}


}//FIN DE LA FUNCIÓN