/*
Bienvenidos (SWITCH +IF).
Se ingresa una hora.
Si está entre las 6 y las 11 mostrar:"es de mañana",
si es desde las 12 a las 19: "es de tarde",
de lo contrario informar que es de noche.
Informar si la hora no es válida.
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje  : "a dormir".

Aclaración: hacer un switch y dentro toda la lógica. 
*/

function mostrar()
{
	var horario = document.getElementById('laHora').value;
	var mensaje1;
	var mensaje2 = "";

	switch (horario){
		case "6":
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			mensaje1= "es de mañana";
		break;
		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
			mensaje1= "es de tarde";
		break;
		case "20":
		case "21":
		case "22":
		case "23":
		case "24":
		case "0":
			mensaje1 = "es de noche ";
			mensaje2 = ", a dormir!";
		break;
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
			mensaje1 = "es de noche";
		break;
		default:
			alert("horario invalido");
	}
		if ((horario>=6)&&(horario<12)){
			alert(mensaje1);
		}
		else {
			if ((horario>11)&&(horario<20)){
				alert(mensaje1);
			}
			else{
				if (horario<=24){
					alert(mensaje1+mensaje2);
				}
				else{
				alert(mensaje1);
				}
			}
		}
}
