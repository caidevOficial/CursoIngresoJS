/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var monto;
	var descuentoDel25;
	var montoConDescuento;
	var resultado;

	monto = document.getElementById('importe').value;
	monto = parseInt(monto);

	descuentoDel25 = 0.75;
	montoConDescuento = (monto * descuentoDel25);
	resultado = montoConDescuento;

	document.getElementById('resultado').value = resultado
}
