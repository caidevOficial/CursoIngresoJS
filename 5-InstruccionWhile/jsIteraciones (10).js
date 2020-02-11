/*
Al presionar el boton pedir  numeros  hasta que el usuario quiera, mostrar:</br>
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
**/

function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var sumNegativo = 0;
	var sumPositivo = 0;
	var positivos = 0;
	var negativos = 0;
	var ceros = 0;
	var pares = 0;
	var promPositivos = parseInt(sumPositivo)/parseInt(positivos);
	var promNegativos = parseInt(sumNegativo)/parseInt(negativos);
	var difer_Neg_Pos = sumPositivo - sumNegativo;

	var respuesta="si";

	while(respuesta!="no")
	{
		input = parseInt(prompt("ingresa un numero: "))
		if (input>0){
			positivos++;
			sumPositivo = sumPositivo + parseInt(input);
			if (input%2==0){
				pares ++;
			}
		}else{
			if (input<0){
				negativos ++;
				sumNegativo = sumNegativo + parseInt(input);
				if (input%2==0){
					pares ++;
				}
			}
			else {
				ceros ++;
			}
		}
		contador ++;
	respuesta = prompt("queres agregar otro numero?")
		
	}



alert("la suma de los negativos es: "+ sumNegativo);
alert("la suma de los positivos es: "+ sumPositivo);
alert("la cantidad de positivos es: "+ positivos);
alert("la cantidad de negativos es: "+ negativos);
alert("la cantidad de ceros es: "+ ceros);
alert("la cantidad de pares es: "+ pares);
alert("el promedio de los positivos es: "+ promPositivos);
alert("el promedio de os negativos es: "+ promNegativos);
alert("la diferencia entre positivos y negativos es: "+ difer_Neg_Pos);

}//FIN DE LA FUNCIÓN