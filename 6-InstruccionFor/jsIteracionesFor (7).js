/*
al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado 
y mostrar la cantidad de numeros divisores encontrados.
*/

function mostrar()
{
	var numero;
	var divisores;
	var inicioRecorrido;

	divisores=0;

	numero=prompt("ingrese el numero: ");
	for(inicioRecorrido=0;inicioRecorrido<=numero;inicioRecorrido++){
		if (numero%inicioRecorrido==0){
			divisores++;
		}
	}
alert("El numero "+numero+" tiene "+divisores+" divisores.");


}//FIN DE LA FUNCIÓN