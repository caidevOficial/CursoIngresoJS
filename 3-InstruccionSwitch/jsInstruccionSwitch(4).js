/*
al seleccionar un mes  informar.
si tiene 28 dias.
si tiene 30 dias.
si tiene 31 dias.
*/

function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch (mesDelAño) {
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias.");
			break;
		case "Febrero":
			alert("Tiene 28 dias o 29 dias si el año es bisiesto");
			break;
		default:
			alert("Tiene 31 dias.");
	}
}//FIN DE LA FUNCIÓN