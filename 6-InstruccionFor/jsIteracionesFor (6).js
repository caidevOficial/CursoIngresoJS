/*
al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado 
y mostrar la cantidad de numeros pares encontrados.
*/

function mostrar()
{
	var pares=0;
	var numero;

	for(numero=prompt("escribi un numero");(numero>0);numero--){
		console.log(pares);
		if (numero%2==0){
			pares++;
		}
	}
	alert("hay pares: "+pares);

}//FIN DE LA FUNCIÓN