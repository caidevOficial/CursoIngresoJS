/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1 = parseFloat(document.getElementById('PrecioUno').value);
	var precio2 = parseFloat(document.getElementById('PrecioDos').value);
	var precio3 = parseFloat(document.getElementById('PrecioTres').value);
	var suma3;

	suma3 = precio1 + precio2 + precio3;

	alert(" La suma de los 3 productos es de: $" + suma3);
}
function Promedio () 
{
	var precio1 = parseFloat(document.getElementById('PrecioUno').value);
	var precio2 = parseFloat(document.getElementById('PrecioDos').value);
	var precio3 = parseFloat(document.getElementById('PrecioTres').value);
	var promedio3;

	promedio3 = (precio1 + precio2 + precio3)/3;

	alert(" El promedio de los 3 productos es de: $" + promedio3);

}
function PrecioFinal () 
{
	var precio1 = parseFloat(document.getElementById('PrecioUno').value);
	var precio2 = parseFloat(document.getElementById('PrecioDos').value);
	var precio3 = parseFloat(document.getElementById('PrecioTres').value);
	var precioFinal_IVA;

	precioFinal_IVA = (precio1 + precio2 + precio3)*1.21; // IVA de 21%

	alert(" El precio final de los 3 productos ( Con IVA incluido) es de: $" + precioFinal_IVA);
}