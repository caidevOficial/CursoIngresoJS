/*
A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman  xxxxx y xxxx,
 pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
*/

function mostrar()
{
  var suNombre;
  var nombrePareja;

  var suPeso;
  var pesoPareja;

  var sumaKilos;
  var promedioKilos;

  suNombre = prompt("Por favor, ingrese su nombre: ");
  nombrePareja = prompt("Por favor, ingrese el nombre de su pareja: ");

  suPeso = parseFloat(prompt("Por Favor, ingrese su peso en kilos ( solo el número): "));
  pesoPareja = parseFloat(prompt("Por Favor, ingrese el peso de su pareja en kilos ( solo el número): "));

  sumaKilos = suPeso + pesoPareja;
  promedioKilos = sumaKilos / 2;

  alert("Ustedes se llaman " + suNombre + " y " + nombrePareja + ", pesan " + suPeso + " Kgs. y " + pesoPareja + " Kgs. respectivamente, que sumados son " + sumaKilos + " Kgs. y el promedio de peso es " + promedioKilos + "Kgs.")
}
