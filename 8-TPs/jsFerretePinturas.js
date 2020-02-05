/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
// FORMULA: (°F − 32) × 5/9 = °C
{
	var temp;
	var fahrenheit;
	var celsius;

	temp = parseFloat(document.getElementById('Temperatura').value);
	fahrenheit = temp;
	celsius = (fahrenheit -32) * (5/9);

	alert(fahrenheit + " grados Fahrenheit son " + celsius + " grados centigrados.")
}

function CentigradosFahrenheit () 
//FORMULA: (°C * 1.8) + 32 = °F
{
	var temp;
	var celsius;
	var fahrenheit;
	
	temp = parseFloat(document.getElementById('Temperatura').value);
	celsius = temp;
	fahrenheit = (celsius * 1.8) + 32;

	alert(celsius + " grados Centigrados son " + fahrenheit + " grados Fahrenheit.")

}