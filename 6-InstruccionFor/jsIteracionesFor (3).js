/*
al presionar el boton pedir la cantidad 
de veces que quiero repetir el mensaje 
"Hola UTN FRA" 
*/

//Aun incompleto.
function mostrar()
{

var repeticiones = prompt("ingrese el número de repeticiones");
var cantidadRepeat = 0;
var numeros = "";
function mostrar()
{
	for (cantidadRepeat = 0; cantidadRepeat < (parseInt(repeticiones)); cantidadRepeat++) {
  		numeros += "Hola UTN FRA " + parseInt(cantidadRepeat) + "<br>";
	}
	document.write(numeros);
}


}//FIN DE LA FUNCIÓN