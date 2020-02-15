/*
al presionar el boton mostrar 10 repeticiones 
con numeros ASCENDENTE, desde el 1 al 10.
*/
var i;
var numeros = "";
function mostrar()
{
	for (i = 1; i < 11; i++) {
  		numeros += "numero " + i + "<br>";
	}
	document.write(numeros);
}