/*
3.	Piedra, Papel o Tijera (v 2.0):
Ahora debemos informar cuantas veces se ganó, perdió o empató desde la última recarga de página
*/

var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = parseInt(Math.random() * 3 + 1);
}	//FIN DE LA FUNCIÓN

function piedra()
{
	if (eleccionMaquina==3){
		ContadorDeGanadas ++;
		alert(" Ganaste!");
	}
	else{
		if (eleccionMaquina==2){
			ContadorDePerdidas ++;
			alert("Perdiste :( ");
		}
		else{
			ContadorDeEmpates ++;
			alert("Empate!");
		}
	}
}//FIN DE LA FUNCIÓN

function papel()
{
	if (eleccionMaquina==1){
		ContadorDeGanadas ++;
		alert(" Ganaste!");
	}
	else{
		if (eleccionMaquina==3){
			ContadorDePerdidas ++;
			alert("Perdiste :( ");
		}
		else{
			ContadorDeEmpates ++;
			alert("Empate!");
		}
}//FIN DE LA FUNCIÓN

function tijera()
{
	if (eleccionMaquina==2){
		ContadorDeGanadas ++;
		alert(" Ganaste!");
	}
	else{
		if (eleccionMaquina==1){
			ContadorDePerdidas ++;
			alert("Perdiste :( ");
		}
		else{
			ContadorDeEmpates ++;
			alert("Empate!");
		}
	}
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById('ganadas').value = parseInt(ContadorDeGanadas);
	document.getElementById('empatadas').value = parseInt(ContadorDeEmpates);
	document.getElementById('perdidas').value = parseInt(ContadorDePerdidas);
}