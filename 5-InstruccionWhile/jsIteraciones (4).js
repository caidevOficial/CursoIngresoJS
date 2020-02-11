/*al presionar el boton pedir un numero entre 0 y 9 inclusive.**/

function mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 10.");

	//Forma 1
	while ((numero <0) || (numero>9)){
		numero = prompt("ingrese un número entre 0 y 10.");
	}
}//FIN DE LA FUNCIÓN