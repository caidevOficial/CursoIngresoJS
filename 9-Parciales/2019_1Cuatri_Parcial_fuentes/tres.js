/*
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/

function mostrar()
{
	var valor ;
	var porcentaje ;
	var aplicarDescuento ;

	valor = parseInt(prompt("Por favor, ingrese el monto:"));
	porcentaje = prompt("Por favor, ingrese el monto de descuento a aplicar (Solo el numero):");

	aplicarDescuento = valor - (valor*(porcentaje/100));
	elPrecioFinal = aplicarDescuento;

	document.getElementById('elPrecioFinal').value = elPrecioFinal;
}
