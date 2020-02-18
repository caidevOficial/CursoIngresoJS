/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una 
aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
	//var num = document.getElementById('numero').value;

function NumerosPares(){
	var num = document.getElementById('numero').value;
	var numCopia = num;
	var cantidadPares = 0;
	while ((numCopia>0)){
 		if (numCopia%2==0){
 			cantidadPares ++;
 			numCopia--;
 		}
 		else{
 			numCopia--;
 		}
 	}
alert("pares hasta el numero: " + cantidadPares);
}

function NumerosImpares(){
	var num = document.getElementById('numero').value;
	var numCopia = num;
	var cantidadImpares = 0;
	while ((numCopia>0)){
 		if (numCopia%2!=0){
 			cantidadImpares ++;
 			numCopia--;
 		}
 		else{
 			numCopia--;
 		}
	}
alert("pares hasta el numero: " + cantidadImpares);
}


