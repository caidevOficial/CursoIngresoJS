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
	var num;
	var numCopia;
	var cantidadPares;
	
	num = document.getElementById('numero').value;
	numCopia = num;
	cantidadPares = 0;
	
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
	var num;
	var numCopia;
	var cantidadImpares;

	num = document.getElementById('numero').value;
	numCopia = num;
	cantidadImpares = 0;
	
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

function NumerosDivisibles(){
	var num;
	var numCopia;
	var cantidadDivisibles;

	num = document.getElementById('numero').value;
	numCopia = num;
	cantidadDivisibles = 0;
	
	while ((numCopia>0)){
 		if (numCopia%2==0){
 			cantidadDivisibles ++;
 			numCopia--;
 		}
 		else{
 			numCopia--;
 		}
 	}
alert("El numero : "+ num + " tiene "+ cantidadDivisibles +" numeros divisibles");

}

function VerificarPrimo(){
	var num;
	var contador;
	var esPrimo;
	var cantidadDivisores;

	num = document.getElementById('numero').value;
	contador=0;
	esPrimo = false;
	cantidadDivisores=0;

	do{
		alert("Ingrese un numero correcto");
		break;
	}while (isNaN(num));


	while (contador<num){
		
		contador++;
		
		if(num%contador==0){
			cantidadDivisores++;
			contador++;
		}
		else{
			contador++;
		}
	}
	if (cantidadDivisores==2){
		esPrimo=true;
		alert("El numero "+ num + " Es Primo.");
	}
	else{
		alert(num + " No es un numero Primo.");
	}
}
