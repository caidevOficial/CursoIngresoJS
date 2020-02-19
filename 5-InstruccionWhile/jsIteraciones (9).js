/*
Al presionar el boton pedir  numeros  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
**/

//prueba mensaje para commit en consola
//prueba mensaje para commit en consola

function mostrar()
{

	// declarar variables
	var contador=0;
	var minimo;
	var maximo = 0;
	var respuesta='SI';

	//input = "";// = parseInt(prompt("ingresa un numero: "))
	respuesta = prompt("queres agregar otro numero? (responde con SI para continuar y NO para terminar");
	
	//mientras la respuesta sea SI, comparara los numeros ingresados, el menor lo guardara en minimo y
	//el mayor en maximo. Al dejar de ingresar numeros, denotara el minimo y maximo de los ingresados.

	while(respuesta=='SI')
	{
		input = "";// = parseInt(prompt("ingresa un numero: "))
		input = parseInt(prompt("ingresa un numero: "))
		maximo = input;
		minimo = input;
	
		if (input>maximo){
			maximo = input;
			contador ++;
		}
		else if (input<minimo){
			minimo = input;
			contador ++;
		}
		respuesta = prompt("queres agregar otro numero? (responde con SI para continuar y NO para terminar")
	}

document.getElementById('minimo').value=minimo;
document.getElementById('maximo').value=maximo;

}//FIN DE LA FUNCIÓN