/*al presionar el boton pedir la CLAVE (ayuda: es utn750)**/

function mostrar()
{

	var clave = prompt("ingrese el número clave.");
	var claveReal = "utn750";

	while (clave != claveReal){
		clave = prompt("Clave incorrecta! ingrese el número clave.");
	} 

}//FIN DE LA FUNCIÓN
