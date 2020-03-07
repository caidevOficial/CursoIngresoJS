/*
	Realizar el algoritmo permita ingresar los datos de una compra de ingredientes para 
	preparar comida al por mayor, HASTA QUE EL CLIENTE QUIERA.<br>
        PESO: (entre 10 y 1000 kilos)<br>
        PRECIO POR KILO: (mayor a 0[cero]).<br>
        TIPO VALIDAD: ("v", "a", "m");(vegetal, animal, mezcla).<br><br>
        Si compro mas de 100 kilos en total tenes 15% de descuento sobre el precio bruto.<br>
        Si compro mas de 300 kilos en total, tenes 25% de descuento sobre el precio bruto.<br>
        A) El importe total a pagar, BRUTO sin descuento.<br>
        B) El importe total a pagar con descuento (Solo si corresponde).<br>
        C) Informar el tipo de alimento mas caro.<br>
        D) El promedio de precio por kilo en total.
*/
function mostrar()
{
	
	var contador;
	var respuesta;
	var ingrediente;
	var ingredientePeso;
	var ingredientePrecioPorKilo;
	var ingredienteValidad;

	var descuento
	var cantidadDeKilos;
	var importeBruto;
	var importeFinal;

	var tipoAlimentoMasCaro;
	var tipoAlimentoMasCaroPrecio;
	var tipoValidadAlimentoMasCaro;

	var promedioPrecioKilo;

	descuento=1;
	cantidadDeKilos=0;
	importeBruto=0;
	importeFinal=0;
	respuesta="s";
	contador=0;
	
	while (respuesta=="s"){
		//actualizador de productos
		contador++;

		// valida el nombre, no puede ser un numero
		do{
			ingrediente = prompt("Por favor, ingrese el ingrediente: ");
		}while (!isNaN(ingrediente));
		
		//························································
		// kilos entre 10 y 100
		do{
			ingredientePeso=prompt("Ingrese la cantidad de kilos a comprar: ");
			ingredientePeso=parseInt(ingredientePeso);
		}while (isNaN(ingredientePeso) || (ingredientePeso<10) || (ingredientePeso>100));

		//························································
		// Precio por kilo, mayor a 0
		do{
			ingredientePrecioPorKilo=prompt("Ingrese el precio por kilo del ingrediente: ");
			ingredientePrecioPorKilo=parseInt(ingredientePrecioPorKilo);
		}while (isNaN(ingredientePrecioPorKilo) || (ingredientePrecioPorKilo<10));
		
		//························································
		// tipo de validad
		do{
			ingredienteValidad=prompt("ingrese la validad del ingrediente, use v para vegetal, a para animal o m para mezcla (solo la letra): ");
		}while ((!isNaN(ingredienteValidad)) || ((ingredienteValidad!="v")&&(ingredienteValidad!="a")&&(ingredienteValidad!="m")));
		
		// total de importe bruto
		importeBruto = importeBruto + (ingredientePrecioPorKilo*ingredientePeso);

		//Que tipo de alimento es el mas caro
		if ((contador==1) || (tipoAlimentoMasCaroPrecio<ingredientePrecioPorKilo)){
			tipoAlimentoMasCaroPrecio = ingredientePrecioPorKilo;
			tipoAlimentoMasCaro = ingredienteValidad;
			switch (tipoAlimentoMasCaro){
				case "v":
					tipoValidadAlimentoMasCaro = "Vegetal";
					break;
				case "a":
					tipoValidadAlimentoMasCaro = "Animal";
					break;
				default:
					tipoValidadAlimentoMasCaro = "Mezcla";
					break;
			}

		}
		//cantidad total de kilos comprados
		cantidadDeKilos = cantidadDeKilos + ingredientePeso;

		//actualizacion de variable
		respuesta=prompt("Para continuar la carga de datos, presione s");
	}
		//actualizacion de descuento segun kilos comprados
		if ((cantidadDeKilos>100)&&(cantidadDeKilos<301)){
			descuento = 0.85;
		}
		else{
			if (cantidadDeKilos>300){
				descuento = 0.75;
			}
		}
//························································
//el promedio precio por kilo
promedioPrecioKilo = importeBruto/cantidadDeKilos;

//precio final con descuento (si no aplica, denotara el importe bruto, 
//caso contrario aplicara descuento de 15% o 25%)
importeFinal = parseFloat(importeFinal);
importeFinal = importeBruto*descuento;

//························································
// RESPUESTAS

document.write("El importe bruto es $"+ importeBruto + "<br>");
document.write("El importe con descuento es (si es que aplica) $"+ importeFinal + "<br>");
document.write("El tipo de alimento mas caro es: "+ tipoValidadAlimentoMasCaro + "<br>");
document.write("El promedio de peso por kilo es: "+ promedioPrecioKilo + "<br>");
}
