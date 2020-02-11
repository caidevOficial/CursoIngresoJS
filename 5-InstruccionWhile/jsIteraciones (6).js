/*
Al presionar el boton pedir 5 numeros e informar
la suma acumulada y el promedio.
**/

function mostrar()
{
	var contador=0;
	var acumulador=0;

	while (contador <5){
		acumulador = acumulador + parseInt(prompt("Dime un numero para sumar"))
		contador ++;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN