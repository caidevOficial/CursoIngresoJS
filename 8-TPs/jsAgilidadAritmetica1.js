/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/

//Aun esta incompleto!

var numero1;
var numero2;
var operador;
var respuesta;

function comenzar()
{
	numero1 = parseInt(Math.random() * 10 + 1);
	numero2 = parseInt(Math.random() * 10 + 1);
	eleccionOperador = Math.random();
	operador = eleccionOperador.nextInt(4);
	
	switch (operator){
	case "+":
	respuesta = numero1+numero2;
	break;
	case "-":
	respuesta = numero1-numero2;
	break;
	case "*":
	respuesta = numero1*numero2;
	break;
	case "/":
	respuesta = numero1/numero2;
	break;
	default:
	operatorSwitch= "";
}

document.getElementById('PrimerNumero').value = numero1;
document.getElementById('Operador').value = operador;
document.getElementById('SegundoNumero').value = numero2;

}//FIN DE LA FUNCIÓN
function Responder()
{
	

}//FIN DE LA FUNCIÓN
