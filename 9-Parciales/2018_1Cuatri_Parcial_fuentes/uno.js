/* Realizar el algoritmo que  pida el ancho y el largo 
de un rectángulo por prompt y que muestre el perímetro por alert.*/

function mostrar()
{
	var ancho;
	var largo;
	var calcularPerimetro;

	ancho = parseInt(prompt("Por favor, ingrese el ancho del rectangulo: "));
	largo = parseInt(prompt("Por favor, ingrese el largo del rectangulo: "));

	calcularPerimetro = (ancho + largo) * 2;

	alert("El perímetro del rectángulo es: " + calcularPerimetro)
}
