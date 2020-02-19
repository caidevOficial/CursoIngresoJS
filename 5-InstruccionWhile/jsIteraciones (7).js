/*
Al presionar el boton pedir  numeros  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
**/

function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='SI';

	//mientras que la respuesta sea "SI", seguira pidiendo numeros y sumandolos entre si.
	//incrementara el contador en uno y corroborara que el usuario quiera seguir ingresando numeros 
	//para repetir el proceso.
	//caso contrario denotara la suma de numeros y el promedio de los mismos.

	while (respuesta == "SI"){
		acumulador = acumulador + parseInt(prompt("Dime un numero para sumar: "));
		contador ++;
		respuesta = prompt("Queres sumar otro numero? (ingrese SI para continuar o NO para terminar) ");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN