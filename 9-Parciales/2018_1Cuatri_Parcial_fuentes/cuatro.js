/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:  
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, 
muestro el mensaje 
"la suma es xxx y supero el 10".
*/

//Hay que arreglar el ultimo else

function mostrar()
{
	var num1 = prompt("Decime el primer numero: ")
	var num2 = prompt("Decime el segundo numero: ")
	var suma;

	if (num1==num2){
		alert(num1+num2);
	}
	else{
		if (parseInt(num1)>parseInt(num2)){
			alert(parseInt(num1)-parseInt(num2));
		}
		else{
			if ((num1<num2) && ((num1<num2)<11)){
				suma = parseInt(num1)+parseInt(num2);
				alert(suma);
				if (suma>10){
					alert("la suma es " + suma + " y supero el 10");
				}
			}
		}
	}

}
