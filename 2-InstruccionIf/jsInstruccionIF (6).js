/*
Al ingresar una edad debemos informar si la persona es 
mayor de edad (mas de 18 años) o 
adolescente (entre 13 y 17 años) o 
niño (menor a 13 años).
**/
function mostrar()
{
//tomo la edad  
var inputEdad

	inputEdad = document.getElementById('edad').value;
	
	if (inputEdad >=18){
		alert("Es Adulto");
	}
	if (inputEdad <13){
		alert("Es niño");
	}

	if ((inputEdad >=13) && (inputEdad <=17)){
		alert("Es Adolescente");
	}
}//FIN DE LA FUNCIÓN