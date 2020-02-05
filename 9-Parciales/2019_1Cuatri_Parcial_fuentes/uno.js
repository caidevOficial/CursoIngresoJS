/*
Realizar el algoritmo que  pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.
*/
function mostrar()
{
	var arista;
	var perimetro;

	arista = parseFloat(prompt("Por favor, decime el largo ( en centimetros) de un arista/lado del triángulo rectángulo: "));
	perimetro = 3 * arista;

	alert("El perimetro de dicho triángulo es de " + perimetro + " centimetros.");
}
