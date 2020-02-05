/****
Pedir mediante prompt el porcentaje, el valor y luego dar el monto con el descuento aplicado en un ALERT.
*/

function porcentaje(){
	var valor;
	var porcentaje;
	var aplicarDescuento;

	valor = parseInt(prompt("Por favor, ingrese el monto: "));
	porcentaje = prompt("Por favor, ingrese el monto de descuento a aplicar ( Solo el numero): ");

	aplicarDescuento = valor + (valor * (porcentaje/100));

	alert(" El monto con el descuento aplicado es de: $" + aplicarDescuento);


}