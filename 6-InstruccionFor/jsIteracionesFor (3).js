/*
al presionar el boton pedir la cantidad 
de veces que quiero repetir el mensaje 
"Hola UTN FRA" 
*/

function mostrar()
{
	var repeticiones = prompt("ingrese el número de repeticiones");
	var cantidadRepeat;
	var numeros = "";


	for (cantidadRepeat = 0; cantidadRepeat < (parseInt(repeticiones)); cantidadRepeat++) {
  		numeros += "Hola UTN FRA " + (parseInt(cantidadRepeat)+1) + "</br>";
	}
	document.write(numeros);
}//FIN DE LA FUNCIÓN