/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
//Piedra = 1
//Papel = 2
//Tijera = 3

function comenzar()
{
	eleccionMaquina = parseInt(Math.random() * 3 + 1);



}//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina==3){
		alert(" Ganaste!");
	}
	else{
		if (eleccionMaquina==2){
			alert("Perdiste :( ")
		}
		else{
			alert("Empate!")
		}
	}

}//FIN DE LA FUNCIÓN
function papel()
{
	if (eleccionMaquina==1){
		alert(" Ganaste!");
	}
	else{
		if (eleccionMaquina==3){
			alert("Perdiste :( ")
		}
		else{
			alert("Empate!")
		}
	}

}//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina==2){
		alert(" Ganaste!");
	}
	else{
		if (eleccionMaquina==1){
			alert("Perdiste :( ")
		}
		else{
			alert("Empate!")
		}
	}

}//FIN DE LA FUNCIÓN