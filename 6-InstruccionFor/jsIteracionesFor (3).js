/*
al presionar el boton pedir la cantidad 
de veces que quiero repetir el mensaje 
"Hola UTN FRA" 
*/

//Aun incompleto.
function mostrar()
{
	var repeticiones = prompt("ingrese el número de repeticiones");
	var cantidadRepeat=0;
	var numeros = "";


	for (cantidadRepeat = cantidadRepeat; cantidadRepeat <= (parseInt(repeticiones)-1); cantidadRepeat++) {
  		numeros += "Hola UTN FRA " + (parseInt(cantidadRepeat)+1) + "</br>";
	}
	document.write(numeros);
}//FIN DE LA FUNCIÓN