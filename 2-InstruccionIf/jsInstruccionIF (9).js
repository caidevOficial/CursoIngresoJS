/*
Al presionar el Boton, mostrar un numero Random del 1 al 10 inclusive 
**/
function mostrar()
{
//Genero el número RANDOM entre 1 y 10 
	var aleatorio;
	
	aleatorio = parseInt(Math.random() * 10 + 1);
	alert(aleatorio);

}//FIN DE LA FUNCIÓN