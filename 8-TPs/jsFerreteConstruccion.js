/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var ancho;
	var largo;
	var calcularPerimetro;
	var cantidadAlambre;

	ancho = parseFloat(document.getElementById('Ancho').value);
	largo = parseFloat(document.getElementById('Largo').value);

	calcularPerimetro = (ancho + largo) * 2;
	cantidadAlambre = calcularPerimetro*3;

	alert("Necesitas " + cantidadAlambre + " metros de alambre para ese terreno.")
}
function Circulo () 
{
	var radio;
	var diametro;
	var pi;
	var perimetroCircular;
	var cantidadAlambre;
	
	radio = parseFloat(document.getElementById('Radio').value);
	diametro = radio * 2;
	pi = 3.141; //truncado a sus primeras 3 posiciones decimales.

	perimetroCircular = diametro * pi;
	cantidadAlambre = perimetroCircular * 3;

	alert("Necesitaras " + cantidadAlambre + " metros de alambre para ese terreno.")
}
function Materiales () 
{
	var ancho;
	var largo;
	var calcularPerimetro;
	var cantidadAlambre;
	// Datos de Perimetro 4mts ( 1mt x 1mt)
	var bagCemento = 2; // 2 unidades.
	var bagCal = 3; // 3 unidades.
	var perimetroBase = 4; // 1 mt x 1 mt.
	var calcularCal;
	var calcularCemento;
	var calcularPerimetro

	largo = parseFloat(document.getElementById('Largo').value);
	ancho = parseFloat(document.getElementById('Ancho').value);
	
	calcularPerimetro = (ancho + largo) * 2;
	calcularCemento = (calcularPerimetro * bagCemento) / perimetroBase;
	calcularCal = (calcularPerimetro * bagCal) / perimetroBase;

	alert("Para esas medidas necesitas " + calcularCemento + " bolsas de cemento y " + calcularCal + " bolsas de cal.")
	
	
}