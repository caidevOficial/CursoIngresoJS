/*
Al presionar el boton pedir  numeros  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
**/

function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while (respuesta == "si"){
		acumulador = acumulador + parseInt(prompt("Dime un numero para sumar"))
		contador ++;
		respuesta = prompt("Queres sumar otro numero?");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN