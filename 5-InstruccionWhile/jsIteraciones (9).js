/*
Al presionar el boton pedir  numeros  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
**/

//prueba mensaje para commit en consola
//prueba mensaje para commit en consola

function mostrar()
{

	var contador=0;
	// declarar variables
	var minimo;
	var maximo = 0;
	var respuesta='si';

	input = parseInt(prompt("ingresa un numero: "))
	maximo = input;
	minimo = input;
	respuesta = prompt("queres agregar otro numero?")
		
	while(respuesta!='no')
	{
		input = parseInt(prompt("ingresa un numero: "))
		if (input>maximo){
			maximo = input;
			contador ++;
		}
		else if (input<minimo){
			minimo = input;
			contador ++;
		}
		respuesta = prompt("queres agregar otro numero?")
	}

document.getElementById('minimo').value=minimo;
document.getElementById('maximo').value=maximo;

}//FIN DE LA FUNCIÓN