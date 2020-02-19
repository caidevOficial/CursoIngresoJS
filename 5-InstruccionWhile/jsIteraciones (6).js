/*
Al presionar el boton pedir 5 numeros e informar
la suma acumulada y el promedio.
**/

function mostrar()
{
	var contador=0;
	var acumulador=0;
	var limite=5;

	//pide mediante prompt "limite" (5) numeros, los suma entre si y 
	//aumenta el contador hasta que el limite sea igual a 5.
	while (contador <limite){
		acumulador = acumulador + parseInt(prompt("Dime un numero para sumar"))
		contador ++;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/limite;

}//FIN DE LA FUNCIÓN