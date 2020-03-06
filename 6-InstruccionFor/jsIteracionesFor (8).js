/*
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/

function mostrar()
{
	var numeroIngresado = prompt("ingrese un numero");

	var contador;
	var contadorDivisores;

	document.write(numeroIngresado + "<br>");
	for(contador=2; contador<numeroIngresado; contador++){
		if (numeroIngresado%contador==0){
			contadorDivisores++;
			document.write(numeroIngresado + " no es primo y es divisible por "+contador +"<br>");
		}
		
		if (contador==(numeroIngresado/2)){
			break;
		}
	}

	if (numeroIngresado==contador){
		console.log(" ATR PRRO!");
	}



}//FIN DE LA FUNCIÓN