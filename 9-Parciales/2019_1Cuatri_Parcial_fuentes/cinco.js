/*
Enunciado:
Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
###########################################################################################################
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
###########################################################################################################
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
###########################################################################################################
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
###########################################################################################################
*/

function mostrar()
{
	var continente = document.getElementById('Marca').value;
	var dias = parseInt(prompt(" de cuantos dias sera la travesia? "));
	var medioDePago = prompt("Abonaras con: 1- Debito, 2- Efectivo, 3- MercadoPago, 4- OTRO ?: (escribir el numero)");
	var descuento;
	var precioDias;
	var precioFinal;

	switch (continente){

		case "América":
			descuento = 0.5;
			switch (medioDePago){
				case "1":
				descuento = 0.4;
			break;
			}
		break;
		case "África":
			descuento = 0.4;
			switch (medioDePago){
				case "2":
				case "3":
					descuento = 0.25;
				break;
			}
		break;
		case "Europa":
			descuento = 0.8;
			switch (medioDePago){
				case "1":
					descuento = 0.65;
				break;
				case "3":
					descuento = 0.7;
				break;
				case "4":
					descuento = 0.75;
				break;
			}
		break;
		default:

	}
	precioDias = dias*100;
	precioFinal = precioDias*descuento;
	alert("pagaras un total de $" + precioFinal);
}
